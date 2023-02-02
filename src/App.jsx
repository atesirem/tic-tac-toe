import { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

import "./styles/globals.scss";
import "./styles/reset.scss";
import "./App.scss";

function App() {
  const [currentPLayerScore, setCurrentPLayerScore] = useState(0);
  const [AIScore, setAIScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  return (
    <div className="App">
      <ScoreBoard 
        currentPLayerScore={currentPLayerScore}
        AIScore={AIScore}
        tieScore={tieScore}
      />
      <GameBoard 
        setCurrentPLayerScore={setCurrentPLayerScore}
        setAIScore={setAIScore}
        setTieScore={setTieScore}
        currentPLayerScore={currentPLayerScore}
        AIScore={AIScore}
        tieScore={tieScore}
      />
    </div>
  );
}

export default App;
