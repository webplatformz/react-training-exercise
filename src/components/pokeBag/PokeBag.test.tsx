import React from 'react';
import { PokeBag } from './PokeBag';
import { render, RenderResult } from '@testing-library/react';
import { PokeBagContext } from '../../pokeBag.context';

describe('PokeBag', () => {
  it('should display no pokemon', () => {
    const component = render(<PokeBag />);

    expect(component.getByText('Empty :(')).not.toBeNull();
  });

  describe('when there are pokemons in the bag', () => {
    const pokemons: string[] = ['Pikachu', 'Pummeluff'];

    let component: RenderResult;

    beforeEach(() => {
      component = render(
        <PokeBagContext.Provider
          value={{
            pokemons,
            addPokemon: () => {},
          }}
        >
          <PokeBag />
        </PokeBagContext.Provider>,
      );
    });

    it('should display their names', () => {
      expect(component.getByText('Pikachu')).not.toBeNull();
      expect(component.getByText('Pummeluff')).not.toBeNull();
    });
  });
});
