import Game from "./components/Game";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col items-center">
        <Game />
      </main>
    </div>
  );
}
