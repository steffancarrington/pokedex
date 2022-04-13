import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import PokemonInfo from '../components/PokemonInfo/PokemonInfo';

describe('Pokemon Info', () => {
    let expectedProps;

    // Define values in beforeEach() to be used across multiple tests
    beforeEach(() => {
        expectedProps = {
            name: 'Bulbasaur',
            image: 'https://placehold.it',
            description: 'Example Description here',
            height: '134',
            weight: '23',
            stats: [{}]
        }
    });

    test('Should render Pokemon Name, ID, Image, Description, Height, Weight and Stats', () => {
        const { getByText, getByAltText } = render(<PokemonInfo {...expectedProps} />);
        const name = getByText(expectedProps.name);
        const image = getByAltText(expectedProps.image);
        const description = getByAltText(expectedProps.description);

        expect(name).toBeVisible();
        expect(id).toBeVisible();
        expect(image).toBeVisible();
        expect(description).toBeVisible();
    });
});
