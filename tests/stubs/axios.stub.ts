import { AxiosError } from "axios";
import { boardWithKingAndRook } from "./boardData.stub";

export const gloriousResponse = {
      data: {
        chessboard: boardWithKingAndRook,
        isKingInCheck: false
      },
      status: 200
    }

export const darkResponse = {
      isAxiosError: true,
      name: '',
      message: "The Dark Lord's interference prevents the game from proceeding.",
      response: {
        data: {
          message: "The Dark Lord's interference prevents the game from proceeding."
        },
        status: 500,
        statusText: 'Internal Server Error',
      },
    } as AxiosError;