import React from 'react';

interface IsKingInCheckLabelProps {
    isKingInCheck: boolean;
}

export default function IsKingInCheckLabel({ isKingInCheck }: IsKingInCheckLabelProps) {
    return (
        <div>
            {!isKingInCheck && <p>The king is not in check</p>}
        </div>
    );
}
