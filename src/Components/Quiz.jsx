import { useContext, useMemo, useState } from "react";
import QuizCSS from "../CSS/Quiz.module.css";
import clockIcon from "../assets/Icons/ic_clock.svg";
import quesionIcon from "../assets/Icons/ic_quesion.svg";
import checkBoxIcon from "../assets/Icons/checkbx.svg";
import crossIcon from "../assets/Icons/cancel_red.svg";
import rightIcon from "../assets/Icons/confirm_tick.svg";
import { quizArray } from "../hooks/useQuizArray";

const checkAnswer = (img) => {};
const setQuestion = (index, que, handleCheck) => {
  return (
    <div className={QuizCSS.box1}>
      <div className={QuizCSS.que}>{que[index].question}</div>
      <div className={QuizCSS.option} option="A" onClick={handleCheck}>
        <span option="A">A. {que[index].A}</span>
        <img src={checkBoxIcon} option="A" alt="" />
      </div>
      <div className={QuizCSS.option} option="B" onClick={handleCheck}>
        <span option="B">B. {que[index].B}</span>
        <img src={checkBoxIcon} option="B" alt="" />
      </div>
      <div className={QuizCSS.option} option="C" onClick={handleCheck}>
        <span option="C">C. {que[index].C}</span>
        <img src={checkBoxIcon} option="C" alt="" />
      </div>
      <div className={QuizCSS.option} option="D" onClick={handleCheck}>
        <span option="D">D. {que[index].D}</span>
        <img src={checkBoxIcon} option="D" alt="" />
      </div>
    </div>
  );
};
const Quiz = () => {
  const totalTime = 60;
  const question=useContext(quizArray);
  const [progress, setProgress] = useState(100);
  const [time, setTime] = useState(totalTime);
  const [timeIntervelId, setTimeIntervelId] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const handleProgress = () => {
    setTimeIntervelId(
      setInterval(() => {
        setProgress((prev) => prev - 100 / totalTime);
        setTime((prev) => prev - 1);
      }, 1000)
    );
    // console.log(timeIntervelId);
  };
  const handleStartQuiz = () => {
    setStartQuiz(true);
    handleProgress();
  };
  if (time == 1) {
    // console.log("hello");
    setQuestionIndex((prev) => prev + 1);
    setProgress(100);
    setTime(totalTime);
  }
  const handleCheck = (e) => {
    e.stopPropagation();
    // console.log(e.target.getAttribute("ans"));
    // If the user will click on the option which is written in the anwser box
    if (e.target.localName == "span") {
      e.target.parentNode.children[1].src = rightIcon;
      checkAnswer(e.target.parentNode.children[1].src);
    }
    // If the user will click on the circle then
    if (e.target.localName == "img") {
      e.target.src = rightIcon;
    }
    // If the user will click on the answer box then
    if (e.target.localName == "div") {
      e.target.children[1].src = rightIcon;
    }
    setTimeout(() => {
      setTime(1);
    }, 2000);
  };
  return (
    <>
      <div className={QuizCSS.container}>
        {startQuiz ? (
          <>
            <div className={QuizCSS.progressBar}>
              <span className={QuizCSS.time}>{time} sec</span>
              <img src={clockIcon} alt="" />
              <span
                className={`${QuizCSS.progress} ${
                  time < 10 ? QuizCSS.bgRed : ""
                }`}
                style={{ width: progress + "%" }}></span>
            </div>
            <header>
              <span className={QuizCSS.question}>
                Question {questionIndex + 1}{" "}
                <span className={QuizCSS.small}>/10</span>
              </span>
              <span className={QuizCSS.participents}>
                <img src={quesionIcon} alt="" />
                <span>&nbsp;256</span>
              </span>
            </header>
            <div className={QuizCSS.border}></div>
            <div className={QuizCSS.boxes}>
              {setQuestion(questionIndex, question, handleCheck)}
              <div className={QuizCSS.box2}></div>
              <div className={QuizCSS.box3}></div>
            </div>
          </>
        ) : (
          <div className={QuizCSS.startQuiz}>
            <span onClick={handleStartQuiz}>Start Quiz</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
