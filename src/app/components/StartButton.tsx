export default function ({onStart}: {onStart: () => void}) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onStart}
            data-testid="start-game-button"
        >Start the game, hombre!</button>
    )
}