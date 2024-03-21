import { useState } from "react";
import QuizCSS from "../CSS/Quiz.module.css";
import clockIcon from "../assets/Icons/ic_clock.svg";
import quesionIcon from "../assets/Icons/ic_quesion.svg";
import checkBoxIcon from "../assets/Icons/checkbx.svg";
import crossIcon from "../assets/Icons/cancel_red.svg";
import rightIcon from "../assets/Icons/confirm_tick.svg";
const question = [
  {
    question:
      "A flashing red traffic light signifies that a driver should do what?",
    A: "stop",
    B: "speed up",
    C: "proceed with caution",
    D: "honk the horn",
    answer: "A",
  },
  {
    question: "A knish is traditionally stuffed with what filling?",
    A: "potato",
    B: "creamed corn",
    C: "lemon custard",
    D: "raspberry jelly",
    answer: "A",
  },
  {
    question: "A pita is a type of what?",
    A: "fresh fruit",
    B: "flat bread",
    C: "French tart",
    D: "friend bean dip",
    answer: "B",
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: "landscape",
    B: "caricature",
    C: "still life",
    D: "Impressionism",
    answer: "B",
  },
  {
    question: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A",
  },
  {
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A",
  },
  {
    question: "A triptych is a work of art that is painted on how many panels?",
    A: "two",
    B: "three",
    C: "five",
    D: "eight",
    answer: "B",
  },
  {
    question:
      "According to a famous line from the existentialist play 'No Exit' what is hell?",
    A: "oneself",
    B: "other people",
    C: "little made large",
    D: "hued in green and blue",
    answer: "B",
  },
  {
    question:
      "According to a popular slogan, what state should people not 'mess with'?",
    A: "New York",
    B: "Texas",
    C: "Montana",
    D: "Rhode Island",
    answer: "B",
  },
  {
    question:
      "According to a Yale University study, what smell is the most recognizable to American adults?",
    A: "tuna",
    B: "laundry",
    C: "popcorn",
    D: "coffee",
    answer: "D",
  },
];
const setQuestion = (index, que,handleCheck) => {
  return (
    <div className={QuizCSS.box1}>
      <div className={QuizCSS.que}>{que[index].question}</div>
      <div className={QuizCSS.option} onClick={handleCheck}>
        <span>A. {que[index].A}</span>
        <img src={checkBoxIcon} alt="" />
      </div>
      <div className={QuizCSS.option} onClick={handleCheck}>
        <span>B. {que[index].B}</span>
        <img src={checkBoxIcon} alt="" />
      </div>
      <div className={QuizCSS.option} onClick={handleCheck}>
        <span>C. {que[index].C}</span>
        <img src={checkBoxIcon} alt="" />
      </div>
      <div className={QuizCSS.option} onClick={handleCheck}>
        <span>D. {que[index].D}</span>
        <img src={checkBoxIcon} alt="" />
      </div>
    </div>
  );
};
const Quiz = () => {
  const totalTime=60;
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
    console.log(e.target.getAttribute("sumit"));
    // If the user will click on the option which is written in the anwser box
    if (e.target.localName == "span") {
      e.target.parentNode.children[1].src = rightIcon;
    }
    // If the user will click on the circle then
    if (e.target.localName == "img") {
      e.target.src = rightIcon;
    }
    // If the user will click on the answer box then
    if (e.target.localName == "div") {
      e.target.children[1].src = rightIcon;
    }
    setTime(1);
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
                Question {questionIndex+1} <span className={QuizCSS.small}>/10</span>
              </span>
              <span className={QuizCSS.participents}>
                <img src={quesionIcon} alt="" />
                <span>&nbsp;256</span>
              </span>
            </header>
            <div className={QuizCSS.border}></div>
            <div className={QuizCSS.boxes}>
              {setQuestion(questionIndex, question,handleCheck)}
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
