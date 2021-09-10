import { shallowMount } from '@vue/test-utils';
import Counter from '../../../src/components/Counter.vue';


describe('Counter Component', ()=> {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallowMount(Counter);
    })

    // test('should match with the snapshot', ()=> {

    //     expect(wrapper.html()).toMatchSnapshot()
    // })


    test('should render default value on h2 tag', ()=> {

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Counter');
    })

    test('should render default value of 100', ()=> {

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('100')
    })

    test('should increment in 1 the counter', async ()=> {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click');

        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const valueModified = wrapper.find('[data-testid="counter"]').text();
        
        expect(valueModified).toBe('99')
    })

    test('should render the default value of the counter by props', ()=> {

        const { start } = wrapper.props();
        const counter = wrapper.find('[data-testid="counter"]').text()

        expect(start.toString()).toBe('100');
        expect(counter).toBe(start.toString());
    })

    test('should render a custom title sent by props', ()=> {

        wrapper = shallowMount(Counter, {
            props: {
                title: "hola mundo"
            }
        });

        const title = 'hola mundo'
        
        const h2 = wrapper.find('h2').text();

        expect(h2).toBe(title);
    })
})