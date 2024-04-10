import axios from "axios";

export async function fetchChessboardStatus() {
  try {
    const response = await axios.get('http://localhost:5000/mcoen93ns/IsKingInCheck/1.0.0/game');
    return response.data;
  } catch (error) {
    // Handle error as you deem fit
    throw error;
  }
}
