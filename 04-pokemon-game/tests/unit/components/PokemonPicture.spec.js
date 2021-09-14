import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture Component', ()=> {

    test('should match with snapshot', ()=> {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should render the hidden image with the 100 pokemon id', ()=> {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false,
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        console.log(img1)

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
                expect(img1.classes('hidden-pokemon')).toBeTruthy()

    })

    test('should show image if showImage attribute is true', ()=> {

        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true,
            }
        })

        const img1 = wrapper.find('img')

        expect(img1.exists()).toBeTruthy()
        expect(img1.classes('fade-in')).toBeTruthy()
        


    })
})