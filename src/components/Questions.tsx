import Question from "./Question";

export interface iQuestion {
  id: number;
  title: string;
  info: string;
}

const Questions = ({
  questions,
  activeId,
  toggleQuestion,
}: {
  questions: Array<iQuestion>;
  activeId: number;
  toggleQuestion: (id: number) => void;
}) => {
  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </div>
  );
};
export default Questions;
