import { shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage component', ()=> {

    let wrapper;

    beforeEach(()=> {

        wrapper = shallowMount(PokemonPage);
    })

    test('should match with the snapshot', ()=> {

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should call mixPokemonArray on component mount', ()=>{

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage);

        expect( mixPokemonArraySpy ).toHaveBeenCalled();
    })

    test('should match with the snapshot after the pokemons are loaded', ()=> {
        
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showMessage: '',
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should show the components PokemonPicture and PokemonOptions', ()=> {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showMessage: '',
                }
            }
        })

        expect(wrapper.find('pokemon-picture-stub').exists).toBeTruthy()
        expect(wrapper.find('pokemon-options-stub').exists).toBeTruthy()
        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('1')
        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()
    })

    test('should succeed on correct pokemon selection', async ()=> {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showMessage: '',
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.find('h2').text()).toBe('Great job!')
        
    })

    test('should fail on incorrect pokemon selection', async ()=> {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showMessage: '',
                }
            }
        })

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.find('h2').text()).toBe('Nooo! Wrong answer! Try again!')

    })
})