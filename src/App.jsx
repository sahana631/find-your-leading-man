import { useEffect, useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import { outcomes } from "./data/outcomes";
import { buildStoryTimeline } from "./utils/buildStory";
import TitleScreen from "./components/TitleScreen";
import QuestionScreen from "./components/QuestionScreen";
import LoadingScreen from "./components/LoadingScreen";
import EnvelopeScreen from "./components/EnvelopeScreen";
import WeddingSiteScreen from "./components/WeddingSiteScreen";

const INITIAL_STATE = {
  screen: "title",
  questionIndex: 0,
  answers: [],
  outcome: null,
  playerName: "",
};

export default function App() {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    if (state.screen !== "loading") return;
    const t = setTimeout(() => {
      const score = state.answers.reduce((sum, a) => sum + a, 0);
      const outcome = outcomes[score % outcomes.length];
      setState((s) => ({ ...s, screen: "envelope", outcome }));
    }, 1400);
    return () => clearTimeout(t);
  }, [state.screen, state.answers]);

  function handleStart() {
    setState((s) => ({ ...INITIAL_STATE, playerName: s.playerName, screen: "question" }));
  }

  function handleNameChange(playerName) {
    setState((s) => ({ ...s, playerName }));
  }

  function handleSelect(optionIndex) {
    setState((s) => {
      const answers = [...s.answers, optionIndex];
      const nextIndex = s.questionIndex + 1;
      if (nextIndex < questions.length) {
        return { ...s, answers, questionIndex: nextIndex };
      }
      return { ...s, answers, questionIndex: nextIndex, screen: "loading" };
    });
  }

  function handleEnvelopeOpened() {
    setState((s) => ({ ...s, screen: "invite" }));
  }

  function handleRestart() {
    setState(INITIAL_STATE);
  }

  return (
    <div className="app-root">
      {state.screen === "title" && (
        <TitleScreen
          onStart={handleStart}
          name={state.playerName}
          onNameChange={handleNameChange}
        />
      )}

      {state.screen === "question" && (
        <QuestionScreen
          questionIndex={state.questionIndex}
          onSelect={handleSelect}
        />
      )}

      {state.screen === "loading" && <LoadingScreen />}

      {state.screen === "envelope" && (
        <EnvelopeScreen onOpened={handleEnvelopeOpened} />
      )}

      {state.screen === "invite" && state.outcome && (
        <WeddingSiteScreen
          outcome={state.outcome}
          storyTimeline={buildStoryTimeline(
            state.answers,
            state.outcome.id,
            state.outcome.name
          )}
          playerName={state.playerName.trim() || "You"}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
