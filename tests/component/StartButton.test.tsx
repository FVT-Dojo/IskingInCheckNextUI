import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartButton from '../../src/app/components/StartButton'; // Adjust the path based on your file structure

describe('StartButton Component', () => {
    test('renders the start button', () => {
        render(<StartButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test.skip('calls the start function when clicked', () => {
        // const mockStartFunction = jest.fn();
        // render(<StartButton onStart={mockStartFunction} />);

        // fireEvent.click(screen.getByRole('button'));
        // expect(mockStartFunction).toHaveBeenCalled();
    });
});