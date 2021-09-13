import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision Component', ()=> {

    let wrapper, clgSpy;

    global.fetch = jest.fn( ()=> Promise.resolve({
        json: ()=> Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(()=> {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks();
    })
    
    test('should match with the snapshot', ()=> {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should not trigger anything on input type', async ()=> {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswers' )
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    })

    test('should call api when type "?" in input', async ()=> {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswers' )
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo?');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalled();
    })

    test('should succeed on getAnswer method', async ()=> {

        await wrapper.vm.getAnswers();

        const img = wrapper.find('img');
        
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')

    })

    test('should fail on getAnswer method', async ()=> {

        fetch.mockImplementationOnce( ()=> Promise.reject('API is down'))

        await wrapper.vm.getAnswers();
        const img = wrapper.find('img');
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('Could not get an answer')

    })
})