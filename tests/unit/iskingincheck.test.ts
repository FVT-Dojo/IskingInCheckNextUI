// jestIsKingInCheck.test.js
import axios, { AxiosError } from 'axios';
import { fetchChessboardStatus } from '../../src/app/etkin/etkin';

type MockedAxios = jest.Mocked<typeof axios>;
const mockedAxios = axios as MockedAxios;

jest.mock('axios');

describe('The Enigmatic "Is the King in Check" API', () => {
  it('should unveil the chessboard status with the wisdom of an ancient oracle', async () => {
    // The sacred text (Mock Response)
    const mockResponse = {
      data: {
        chessboard: [
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["R", "", "", "", "", "", "", ""], // Behold, the Rook!
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "K", "", "", ""] // And there, the King in all his majesty.
        ],
        isKingInCheck: false
      },
      status: 200
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

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
    const darkResponse: AxiosError = {
      isAxiosError: true,
      config: {},
      name: '',
      message: "The Dark Lord's interference prevents the game from proceeding.",
      response: {
        data: {
          message: "The Dark Lord's interference prevents the game from proceeding."
        },
        status: 500,
        headers: {},
        config: {},
        statusText: 'Internal Server Error',
      },
      toJSON: () => ({})
    };
    mockedAxios.get.mockRejectedValue(darkResponse);

    // A Journey through the Chamber of Secrets (Calling the Source Code)
    let errorResponse;
    try {
      await fetchChessboardStatus();
    } catch (error) {
      errorResponse = error as AxiosError; // Casting the unknown to the known
    }

    // The Grim Revelations (Assertions)
    if (errorResponse && errorResponse.response) {
      expect(errorResponse.response.data.message).toContain("The Dark Lord's interference");
      expect(errorResponse.response.status).toBe(500);
    } else {
      fail("Expected an Axios error with a response, but found none. Perhaps the Room of Requirement?");
    }
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.anything()); // The cursed call was made

    // And thus, the code was left haunted by the specter of a failed API call, as if hit by a stray Avada Kedavra.
  });
});
