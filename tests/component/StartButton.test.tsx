import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartButton from '../../src/app/components/StartButton'; // Adjust the path based on your file structure

const mockStartFunction = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
})

describe('The StartButton Component', () => {
    test('renders the start button', () => {
        render(<StartButton onStart={mockStartFunction} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('has the correct text', () => {
        render(<StartButton onStart={mockStartFunction} />);
        expect(screen.getByText('Start the game, hombre!')).toBeInTheDocument();
    });

    test('has the correct data-testid', () => {
        render(<StartButton onStart={mockStartFunction} />);
        expect(screen.getByTestId('start-game-button')).toBeInTheDocument();
    })

    test('calls the start function once when clicked', () => {
        render(<StartButton onStart={mockStartFunction} />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockStartFunction).toHaveBeenCalledTimes(1);
    });
});
