import { boardWithKing } from "../../../tests/stubs/boardData.stub";
import Chessboard from "./Chessboard";
import StartButton from "./StartButton";

export default function Game() {
    const onStart = () => {};
    return (
        <Chessboard boardData={boardWithKing}/>
    );
}