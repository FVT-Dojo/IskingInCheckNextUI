type ChessboardProps = {
    boardData: string[][];
};

const Chessboard: React.FC<ChessboardProps> = ({ boardData }) => {
    return (
        <div className={'grid grid-cols-8 gap-0 shadow-lg border-4 border-gray-300 p-1'} data-testid="chessboard">
            {boardData.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <div 
                        key={`${rowIndex}-${colIndex}`}
                        data-index={`${rowIndex}-${colIndex}`}
                        className={`flex justify-center items-center w-14 h-14 md:w-20 md:h-20 ${determineCellColor(rowIndex, colIndex)} ${determineTextColor(rowIndex, colIndex)} font-bold text-lg transition ease-in-out duration-150 hover:border-4 hover:border-amber-500`}
                    >
                        {cell}
                    </div>
                ))
            ))}
        </div>
    );
};

const determineCellColor = (rowIndex: number, colIndex: number) => {
    // Using brown shades for a more traditional chessboard look
    return (rowIndex + colIndex) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-800';
};

const determineTextColor = (rowIndex: number, colIndex: number) => {
    // Adjusting text color for better contrast and readability
    return (rowIndex + colIndex) % 2 === 0 ? 'text-gray-800' : 'text-amber-100';
};

export default Chessboard;
