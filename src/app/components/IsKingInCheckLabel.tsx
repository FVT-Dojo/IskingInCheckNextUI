import React from 'react';

interface IsKingInCheckLabelProps {
    isKingInCheck: boolean;
}

// In a land far, far away, where knights and kings roam...
export default function IsKingInCheckLabel({ isKingInCheck }: IsKingInCheckLabelProps) {
    // Merlin's wisdom tells us if the king is in peril!
    return isKingInCheck ? (
        // Alas! The enemies are closing in on Camelot!
        <p>The king is in check</p>
    ) : (
        // All is well in the kingdom, festivities continue!
        <p>The king is not in check</p>
    );
}
