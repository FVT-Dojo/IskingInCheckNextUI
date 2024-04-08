type ChessboardProps = {
    boardData: string[][];
};

const Chessboard: React.FC<ChessboardProps> = ({ boardData }) => {
    return (
        <div className={'grid grid-cols-8 gap-0'}>
            {boardData.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <div 
                        key={`${rowIndex}-${colIndex}`}
                        data-index={`${rowIndex}-${colIndex}`}
                        className={`w-8 h-8 ${determineCellColor(rowIndex, colIndex)} ${determineTextColor(rowIndex, colIndex)}`}
                    >
                        {cell}
                    </div>
                ))
            ))}
        </div>
    );
};

const determineCellColor = (rowIndex: number, colIndex: number) => {
    return (rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-black';
};

const determineTextColor = (rowIndex: number, colIndex: number) => {
    return (rowIndex + colIndex) % 2 === 0 ? 'text-black' : 'text-white';
};

export default Chessboard;