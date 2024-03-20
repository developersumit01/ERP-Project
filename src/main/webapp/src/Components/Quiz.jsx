import { useState } from "react";
import QuizCSS from "../CSS/Quiz.module.css";
import clockIcon from "../assets/Icons/ic_clock.svg";

const Quiz = () => {
  const [progress, setProgress] = useState(100);
  const [time, setTime] = useState(30);
  const [timeIntervelId, setTimeIntervelId] = useState();
  const [startQuiz, setStartQuiz] = useState(false);
  const handleProgress = () => {
    setStartQuiz(true);
    setTimeIntervelId(
      setInterval(() => {
        // console.log(progress)
        setProgress((prev) => prev - 100 / 30);
        setTime((prev) => prev - 1);
      }, 1000)
    );
  };
  if (time < 10) {
    clearInterval(timeIntervelId);
  }
  return (
    <>
      <div className={QuizCSS.container}>
        {startQuiz ? (
          <div className={QuizCSS.progressBar}>
            <span className={QuizCSS.time}>{time} sec</span>
            <img src={clockIcon} alt="" />
            <span
              className={`${QuizCSS.progress} ${time<10?QuizCSS.bgRed:""}`}
              style={{ width: progress + "%" }}></span>
          </div>
        ) : (
          <div className={QuizCSS.startQuiz}>
            <span onClick={handleProgress}>Start Quiz</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
