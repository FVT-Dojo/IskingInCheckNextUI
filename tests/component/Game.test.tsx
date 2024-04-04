import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from '../../src/app/components/Game';

describe('Game Component', () => {
    test('When starting the game, it should render the startGame button', () => {
        render(<Game />);
        expect(screen.getByTestId('start-game-button')).toBeInTheDocument();
    });

    test('When clicking on the startGame button, a chessboard should be shown', () => {
        render(<Game />);
        fireEvent.click(screen.getByTestId('start-game-button'));
        expect(screen.getByTestId('chessboard')).toBeInTheDocument();
    });
});
