import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Scoreboard from "./Scoreboard";
import Field from "./Field";

export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
