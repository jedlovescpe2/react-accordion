
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({
  id,
  title,
  info,
  activeId,
  toggleQuestion, 
}: {
  id:number,
  title: string;
  info: string;
  activeId: number;
  toggleQuestion: (int: number) => void;
}) => {

  const isActive = activeId === id ? true : false

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          onClick={()=>toggleQuestion(id)}
          className="question-btn"
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isActive && <p>{info}</p>}
    </div> 
  );
};
export default Question;
