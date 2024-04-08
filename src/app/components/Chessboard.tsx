type ChessboardProps = {
    boardData: string[][];
};

const Chessboard: React.FC<ChessboardProps> = ({ boardData }) => {
    const boardSize = 8; 

    return (
        <div className={`grid grid-cols-${boardSize} gap-0`}>
            {boardData.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <div 
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-8 h-8 ${determineCellColor(rowIndex, colIndex)}`}
                    >
                    </div>
                ))
            ))}
        </div>
    );
};

const determineCellColor = (rowIndex: number, colIndex: number) => {
    return (rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-black';
};

export default Chessboard;