import { useContext, useEffect, useMemo, useState } from "react";
import QuizCSS from "../CSS/Quiz.module.css";
import clockIcon from "../assets/Icons/ic_clock.svg";
import quesionIcon from "../assets/Icons/ic_quesion.svg";
import checkBoxIcon from "../assets/Icons/checkbx.svg";
import crossIcon from "../assets/Icons/cancel_red.svg";
import rightIcon from "../assets/Icons/confirm_tick.svg";
import successIcon from "../assets/Icons/success.svg";
import startButtonImage from "../assets/Icons/startButton.png";
import { quizArray } from "../hooks/useQuizArray";

const checkAnswer = (img) => {};
const quizstartArray = [
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: true,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: false,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: true,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: false,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: true,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: true,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: false,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: true,
  },
  {
    subject: "Subject Code",
    unit: "UNIT",
    status: false,
  },
];

const Quiz = () => {
  const totalTime = 60;
  const question = useContext(quizArray);
  const [progress, setProgress] = useState(100);
  const [time, setTime] = useState(totalTime);
  const [timeIntervelId, setTimeIntervelId] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [clickOption, setClickOption] = useState({});
  const [queJSX, setQueJSX] = useState(<></>);
  const [quizEnd, setQuizEnd] = useState(false);

  const [score, setScore] = useState(100);

  useEffect(() => {
    if (questionIndex >= question.length) {
      setQueJSX(<div className={QuizCSS.box1}>Hello world</div>);
      setQuizEnd(true);
    } else {
      console.log(clickOption.src);
      if (clickOption) {
        clickOption.src = checkBoxIcon;
      }

      setQueJSX(
        <div className={QuizCSS.box1}>
          <div className={QuizCSS.que}>{question[questionIndex].question}</div>
          <div className={QuizCSS.option} option="A" onClick={handleCheck}>
            <span option="A">A. {question[questionIndex].A}</span>
            <img src={checkBoxIcon} option="A" alt="" />
          </div>
          <div className={QuizCSS.option} option="B" onClick={handleCheck}>
            <span option="B">B. {question[questionIndex].B}</span>
            <img src={checkBoxIcon} option="B" alt="" />
          </div>
          <div className={QuizCSS.option} option="C" onClick={handleCheck}>
            <span option="C">C. {question[questionIndex].C}</span>
            <img src={checkBoxIcon} option="C" alt="" />
          </div>
          <div className={QuizCSS.option} option="D" onClick={handleCheck}>
            <span option="D">D. {question[questionIndex].D}</span>
            <img src={checkBoxIcon} option="D" alt="" />
          </div>
        </div>
      );
    }
  }, [questionIndex]);

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

  const handleQuizCompletedMessage = () => {
    alert("You have already copmleted this quiz!");
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
      setClickOption(e.target.parentNode.children[1]);
      // checkAnswer(e.target.parentNode.children[1].src);
    }
    // If the user will click on the circle then
    if (e.target.localName == "img") {
      e.target.src = rightIcon;
      setClickOption(e.target);
    }
    // If the user will click on the answer box then
    if (e.target.localName == "div") {
      e.target.children[1].src = rightIcon;
      setClickOption(e.target.children[1]);
    }
    setTimeout(() => {
      setTime(1);
    }, 1000);
  };
  return (
    <>
      <div className={QuizCSS.container}>
        {startQuiz && !quizEnd ? (
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
              {queJSX}
              <div className={QuizCSS.box2}></div>
              <div className={QuizCSS.box3}></div>
            </div>
          </>
        ) : quizEnd ? (
          <div className={QuizCSS.quizCompleted}>
            <h4>Subject Code</h4>
            <h4>UNIT</h4>
            <h3>Quiz Successfully Completed</h3>
            <span>Score : {score}</span>
            <img
              className={QuizCSS.successIcon}
              src={successIcon}
              alt="Success Icon"
            />
          </div>
        ) : (
          <div className={QuizCSS.startQuizContainer}>
            {quizstartArray.map((ele) => {
              return (
                <div className={QuizCSS.startQuiz}>
                  <div className={QuizCSS.quizInfo}>
                    <div>{ele.subject}</div>
                    <div>{ele.unit}</div>
                  </div>
                  <div className={QuizCSS.startButton}>
                    <img
                      src={ele.status ? startButtonImage : successIcon}
                      alt={ele.status ? "Start Button Image" : "Success Icon"}
                      onClick={
                        ele.status
                          ? handleStartQuiz
                          : handleQuizCompletedMessage
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
