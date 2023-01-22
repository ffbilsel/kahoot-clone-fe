import styles from "./QuestionTemplate.module.css";
import DropPin from "./questions/drop-pin/DropPin";
import {useState} from "react";
import Quiz from "./questions/quiz/Quiz";
import TrueFalse from "./questions/true-false/TrueFalse";
import TypeAnswer from "./questions/type-answer/TypeAnswer";
import Slider from "./questions/slider/Slider";
import Puzzle from "./questions/puzzle/Puzzle";
import {Button, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

function QuestionTemplate() {
    const dispatch = useDispatch();
    const questionType = useSelector(state => state.type);

    let component;
    let [nofQuestions, setNofQuestions] = useState(1);

    switch (questionType){
        case "Quiz":
            component = <Quiz/>
            break;
        case "True or False":
            component = <TrueFalse/>
            break
        case "Type Answer":
            component = <TypeAnswer/>
            break;
        case "Slider":
            component = <Slider/>
            break;
        case "Puzzle":
            component = <Puzzle/>
            break;
        case "Drop Pin":
            component = <DropPin/>
            break;
        default:
            component = <Quiz/>
    }
    const handleQuestionType = (event) => {
        dispatch({type : event.target.value});
    }

    return (
        <div className={styles.center}>
            <div className={styles.leftSideBar}>
                {[...Array(nofQuestions)].map((e, i) => <p>Question {i + 1}</p>)}
                <Button variant={"contained"} onClick={() => setNofQuestions(nofQuestions + 1)}>Add question</Button>
            </div>
            <div className={styles.mainContainer}>
                {component}
            </div>
            <div className={styles.rightSideBar}>
                <label>Question type</label>
                <Select sx={{ width: 1 , height: '25%' }} value={questionType} onChange={handleQuestionType}>
                    <MenuItem value={"Quiz"}>Quiz</MenuItem>
                    <MenuItem value={"True or False"}>True or False</MenuItem>
                    <MenuItem value={"Type Answer"}>Type Answer</MenuItem>
                    <MenuItem value={"Slider"}>Slider</MenuItem>
                    <MenuItem value={"Puzzle"}>Puzzle</MenuItem>
                    <MenuItem value={"Drop Pin"}>Drop Pin</MenuItem>
                </Select>
                <label>Time limit</label>
                <Select sx={{ width: 1 , height: '25%' }} value={20} >
                    <MenuItem value={5}>5 seconds</MenuItem>
                    <MenuItem value={10}>10 seconds</MenuItem>
                    <MenuItem value={20}>20 seconds</MenuItem>
                    <MenuItem value={30}>30 seconds</MenuItem>
                    <MenuItem value={60}>1 minute</MenuItem>
                    <MenuItem value={90}>1 minute 30 seconds</MenuItem>
                    <MenuItem value={180}>2 minutes</MenuItem>
                    <MenuItem value={240}>4 minutes</MenuItem>
                </Select>
                <label>Points</label>
                <Select sx={{ width: 1 , height: '25%' }} value={"standard"} >
                    <MenuItem value={"standard"}>Standard</MenuItem>
                    <MenuItem value={"double"}>Double Points</MenuItem>
                    <MenuItem value={"no"}>No points</MenuItem>
                </Select>
                {questionType === "Quiz" &&
                    <>
                        <label>Answer Options</label>
                        <Select sx={{ width: 1 , height: '25%' }} value={"single"}>
                            <MenuItem value={"single"}>Single select</MenuItem>
                            <MenuItem value={"multi"}>Multi-select</MenuItem>
                        </Select>
                    </>
                }
                {questionType === "Slider" &&
                    <>
                        <label>Answer Margin</label>
                        <Select sx={{ width: 1 , height: '25%' }} value={"medium"}>
                            <MenuItem value={"none"}>None</MenuItem>
                            <MenuItem value={"low"}>Low</MenuItem>
                            <MenuItem value={"medium"}>Medium</MenuItem>
                            <MenuItem value={"high"}>High</MenuItem>
                            <MenuItem value={"maximum"}>Maximum</MenuItem>
                        </Select>
                    </>
                }
            </div>
        </div>
    )
}

export default QuestionTemplate;