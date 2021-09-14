import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";
describe("Pokemon Options component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    });
  });
  test("should match with the snapshot", () => {
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="options-container">
        <ul>
          <li>bulbasaur</li>
          <li>ivysaur</li>
          <li>venusaur</li>
          <li>charmander</li>
        </ul>
      </div>
    `);
  });

  test('should emit the event and get the parameters', ()=> {

    const liTags = wrapper.findAll('li')

    expect(liTags.length).toBe(4);

    const [p1, p2, p3, p4] = liTags;

    expect(p1.text()).toBe('bulbasaur')
    expect(p2.text()).toBe('ivysaur')
    expect(p3.text()).toBe('venusaur')
    expect(p4.text()).toBe('charmander')

    p1.trigger('click')
    p2.trigger('click')
    p3.trigger('click')
    p4.trigger('click')

    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([1])
    expect(wrapper.emitted('selection')[1]).toEqual([2])
    expect(wrapper.emitted('selection')[2]).toEqual([3])
    expect(wrapper.emitted('selection')[3]).toEqual([4])
  })
});
