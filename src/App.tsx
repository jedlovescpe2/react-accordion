import { useState } from "react";
import data from "./data";

import "./index.css";
import Questions from "./components/Questions";

const App = () => {
  const [questions] = useState(data);
  const [activeId, setActiveId] = useState(0);

  const toggleQuestion = (id: number) => {
    const newActiveId = activeId === id ? 0 : id;
    setActiveId(newActiveId)
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
