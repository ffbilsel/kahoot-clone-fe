import { createStore }from "redux";

const reducer = (state = {
    type : "Quiz",
    timeLimit : 20,
    points : "standard",
    answerOptions : "single",
    answerMargin: "medium",
    answers: ["", "", "", ""],
    answerMedia: ["", "", "", ""],
    correctAnswer: -1,
    min : -1,
    max: -1,
    title: "",
    mediaUrl: "",
}, action) =>  {

    if (action.type === "Quiz") {
        return {type : "Quiz"}
    }
    else if (action.type === "True or False") {
        return {type: "True or False"}
    }
    else if (action.type === "Slider") {
        return {type: "Slider"}
    }
    else if (action.type === "Puzzle") {
        return {type: "Puzzle"}
    }
    else if (action.type === "Type Answer") {
        return {type: "Type Answer"}
    }
    else if (action.type === "Drop Pin") {
        return {type: "Drop Pin"}
    }

    if (action.timeLimit === 5) {
        return  {timeLimit: 5}
    }

    return state;
}

const store = createStore(reducer);

export default store;