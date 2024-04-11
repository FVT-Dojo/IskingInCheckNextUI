import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chessboard from '../../src/app/components/Chessboard';
import { boardWithKing, emptyBoard } from '../stubs/boardData.stub';

describe('The Chessboard Component', () => {
    test('Should have the right test-id to be able to be found in other tests', () => {
        render(<Chessboard boardData={emptyBoard} />);
        expect(screen.getByTestId('chessboard')).toBeInTheDocument();
    })
    
    test('Should render a chessboard with 64 squares', () => {
        const { container } = render(<Chessboard boardData={emptyBoard} />);
        
        const squares = container.querySelectorAll('.w-14.h-14');
        
        expect(squares.length).toBe(64);
    });

    test('Should render the squares with alternating colors, where even squares are white and uneven black, with inverted text colors', () => {
        const { container } = render(<Chessboard boardData={emptyBoard} />);
        
        const squares = container.querySelectorAll('.w-14.h-14');

        squares.forEach((square, index) => {
            const row = Math.floor(index / 8);
            const col = index % 8;
            const isEven = (row + col) % 2 === 0
            const expectedColor = isEven ? 'bg-amber-100' : 'bg-amber-800';

            const expectedTextColor = isEven ? 'text-gray-800' : 'text-amber-100';
            expect(square).toHaveClass(expectedColor);
            expect(square).toHaveClass(expectedTextColor);
        });
    });

    test('Should render a chessboard with only 1 King', () => {
        const { container } = render(<Chessboard boardData={boardWithKing} />);
        
        const squares = container.querySelectorAll('.w-14.h-14');

        let squaresWithKing = 0;
        
        squares.forEach((square) => {
            if (square.textContent === 'K') squaresWithKing++;
        })

        expect(squaresWithKing).toEqual(1);
    });

    test('Should render a chessboard with a King on E1', () => {
        const { container } = render(<Chessboard boardData={boardWithKing} />);
        
        const squareE1 = container.querySelector('[data-index="7-4"]');
        
        expect(squareE1?.textContent).toEqual('K');
    });

});
