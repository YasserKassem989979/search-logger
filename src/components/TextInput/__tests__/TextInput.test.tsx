import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TextInput } from '../index';
import { act } from 'react-dom/test-utils';

test('loads and displays TextInput', async () => {
    // ARRANGE
    render(<TextInput title="testtextinput" placeholder="testtextinputid" />);

    // ACT
    userEvent.click(screen.getByText('testtextinput'));
    const input = await screen.findByPlaceholderText('testtextinputid');
    act(() => {
        input.focus();
    });

    // ASSERT
    expect(input).toBeVisible();
    expect(input).toHaveFocus();
});
