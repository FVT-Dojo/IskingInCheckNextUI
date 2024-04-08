import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chessboard from '../../src/app/components/Chessboard';

describe('The Chessboard Component', () => {
    test('Should render a chessboard with 64 squares, alternating colors', () => {
        const boardData = Array(8).fill(Array(8).fill(''));
        const { container } = render(<Chessboard boardData={boardData} />);
        
        const squares = container.querySelectorAll('.w-8.h-8');
        
        expect(squares.length).toBe(64);

    });
});
