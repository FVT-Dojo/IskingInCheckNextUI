// jestIsKingInCheck.test.js
import axios from 'axios';
import { fetchChessboardStatus } from '../../src/app/etkin/etkin';
import { darkResponse, gloriousResponse } from '../stubs/axios.stub';

type MockedAxios = jest.Mocked<typeof axios>;
const mockedAxios = axios as MockedAxios;

jest.mock('axios');

describe('The Enigmatic "Is the King in Check" API', () => {
  it('should unveil the chessboard status with the wisdom of an ancient oracle', async () => {
    // The sacred text (Mock Response);
    mockedAxios.get.mockResolvedValue(gloriousResponse);

    // The valiant quest (Calling the Source Code)
    const chessboardStatus = await fetchChessboardStatus();

    // The grand revelation (Assertions)
    expect(chessboardStatus).toHaveProperty('chessboard');
    expect(Array.isArray(chessboardStatus.chessboard)).toBeTruthy();
    expect(chessboardStatus.chessboard[3][0]).toEqual('R'); // The Rook, standing tall.
    expect(chessboardStatus.chessboard[7][4]).toEqual('K'); // The King, noble and true.
    expect(chessboardStatus).toHaveProperty('isKingInCheck');
    expect(chessboardStatus.isKingInCheck).toBe(false);

    // Thus, the truth of the chessboard is laid bare for all to see.
  });

  it('should encounter a scenario as dark as the Forbidden Forest, where everything fails miserably', async () => {
    // The Dark Mark of a Response (Mock Failure Response)
    mockedAxios.get.mockRejectedValue(darkResponse);

    await expect(fetchChessboardStatus()).rejects.toHaveProperty('message', "The Dark Lord's interference prevents the game from proceeding.");

    // And thus, the code was left haunted by the specter of a failed API call, as if hit by a stray Avada Kedavra.
  });
});
