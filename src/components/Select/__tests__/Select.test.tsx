import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from '../index';

describe('Test react-select component', () => {
    const mockedOptions = [
        { title: 'Mocked option 1', value: 'option1' },
        { title: 'Mocked option 2', value: 'option2' },
    ];

    it('should render without errors', async () => {
        const mockedOnChange = jest.fn();
        render(
            <Select
                items={mockedOptions}
                onChange={mockedOnChange}
                placeholder="Select an option"
                value={'option2'}
            />,
        );

        const placeholder = screen.findByPlaceholderText('Select an option');

        expect(placeholder).toBeTruthy();
    });
});
