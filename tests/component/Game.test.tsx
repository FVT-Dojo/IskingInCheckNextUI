import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from '../../src/app/components/Game';
import axios from 'axios';
import { gloriousResponse } from '../stubs/axios.stub';

type MockedAxios = jest.Mocked<typeof axios>;
const mockedAxios = axios as MockedAxios;

jest.mock('axios');

describe('Game Component', () => {
    test('When starting the game, it should render the startGame button', () => {
        render(<Game />);
        expect(screen.getByTestId('start-game-button')).toBeInTheDocument();
    });

    test('When clicking on the startGame button, a chessboard should be shown', async () => {
        mockedAxios.get.mockResolvedValue(gloriousResponse);
        
        render(<Game />);
    
        const startButton = await screen.findByTestId('start-game-button');
        fireEvent.click(startButton);
        
        const chessboard = await screen.findByTestId('chessboard');
        expect(chessboard).toBeInTheDocument();
    });
});
