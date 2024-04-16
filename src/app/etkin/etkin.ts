import axios from "axios";

export async function fetchChessboardStatus() {
  try {
    const response = await axios.get('http://localhost:3000/game');
    return response.data;
  } catch (error) {
    throw error;
  }
}
