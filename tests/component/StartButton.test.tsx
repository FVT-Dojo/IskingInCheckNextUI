import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartButton from '../../src/app/components/StartButton'; // Adjust the path based on your file structure

describe('StartButton Component', () => {
    test('renders the start button', () => {
        render(<StartButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('button has the correct text', () => {
        render(<StartButton />);
        expect(screen.getByText('Start the game, hombre!')).toBeInTheDocument();
    });
});
