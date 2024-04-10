import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IsKingInCheckLabel from '../../src/app/components/IsKingInCheckLabel';

describe('The IsKingInCheck label Component', () => {
    test('When it is fed false, renders a plain piece of text that states that the king is not in check', () => {
        render(<IsKingInCheckLabel isKingInCheck={false}/>);
        expect(screen.getByText('The king is not in check')).toBeInTheDocument();
    });

    test('When it is fed true, renders a plain piece of text that states that the king is in check', () => {
        render(<IsKingInCheckLabel isKingInCheck={true}/>);
        expect(screen.getByText('The king is in check')).toBeInTheDocument();
    });
});
