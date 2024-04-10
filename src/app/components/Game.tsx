import React, { useState } from "react";
import Chessboard from "./Chessboard";
import StartButton from "./StartButton";
import { fetchChessboardStatus } from "../etkin/etkin";

interface ChessboardData {
  boardData: string[][]; // Adjust the type based on your chessboard data structure
}

export default function Game() {
  const [chessboardData, setChessboardData] = useState<ChessboardData | null>(
    null
  );

  const onStart = async () => {
    try {
      const response = await fetchChessboardStatus(); // Assuming fetchChessboardStatus is an async function that fetches data from an API
      setChessboardData({ boardData: response.chessboard }); // Assuming response is a 2D array of chessboard data
    } catch (error) {
      console.error("Error fetching chessboard data:", error);
    }
  };

  return (
    <div>
      <StartButton onStart={onStart} />
      {chessboardData && (
        <Chessboard boardData={chessboardData.boardData} />
      )}
    </div>
  );
}