import React, { useState } from "react";
import Chessboard from "./Chessboard";
import StartButton from "./StartButton";
import IsKingInCheckLabel from "./IsKingInCheckLabel"; // Ensure this path is correct
import { fetchChessboardStatus } from "../etkin/etkin";

// The realm awaits the unfolding of events...
export default function Game() {
  const [boardData, setBoardData] = useState<string[][] | null>(null);
  const [isKingInCheck, setIsKingInCheck] = useState(false); // Prepared for the news of our king's fate

  const onStart = async () => {
    try {
      const response = await fetchChessboardStatus(); // A quest for the state of our board
      setBoardData(response.chessboard); // The lay of the land, the positioning of our pieces
      setIsKingInCheck(response.isKingInCheck); // The oracle speaks of the king's peril
    } catch (error) {
      console.error("Merlin's beard! Error fetching chessboard data:", error); // Even wizards face troubles
    }
  };

  return (
    <div>
      {/* A button to commence the jousting */}
      <StartButton onStart={onStart} />
      {boardData && (
        <>
          {/* Behold! The battlefield */}
          <Chessboard boardData={boardData} />
          {/* A scribe declares the status of our noble king */}
          <IsKingInCheckLabel isKingInCheck={isKingInCheck} />
        </>
      )}
    </div>
  );
}
