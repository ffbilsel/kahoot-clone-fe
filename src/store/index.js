import { createStore }from "redux";

const standardState = {
    type : "Quiz",
    timeLimit : "20",
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
}
const reducer = (state = standardState, action) =>  {

    if (action.type === "Quiz") {
        return {...standardState, type : "Quiz"}
    }
    else if (action.type === "True or False") {
        return {...standardState, type: "True or False"}
    }
    else if (action.type === "Slider") {
        return {...standardState, type: "Slider"}
    }
    else if (action.type === "Puzzle") {
        return {...standardState, type: "Puzzle"}
    }
    else if (action.type === "Type Answer") {
        return {...standardState, type: "Type Answer"}
    }
    else if (action.type === "Drop Pin") {
        return {...standardState, type: "Drop Pin"}
    }

    if (action.type === "5") {
        return  {...state, timeLimit: "5"}
    }
    else if (action.type === "10") {
        return  {...state, timeLimit: "10"}
    }
    else if (action.type === "20") {
        return  {...state, timeLimit: "20"}
    }
    else if (action.type === "30") {
        return  {...state, timeLimit: "30"}
    }
    else if (action.type === "60") {
        return  {...state, timeLimit: "60"}
    }
    else if (action.type === "90") {
        return  {...state, timeLimit: "90"}
    }
    else if (action.type === "120") {
        return  {...state, timeLimit: "120"}
    }
    else if (action.type === "240") {
        return  {...state, timeLimit: "240"}
    }

    if (action.type === "standard") {
        return  {...state, points: "standard"}
    }
    else if (action.type === "double") {
        return  {...state, points: "double"}
    }
    if (action.type === "no") {
        return  {...state, points: "no"}
    }

    if (action.type.includes(">>Title ")) {
        return  {...state, title: action.type.substring(8)}
    }

    return state;
}

const store = createStore(reducer);

export default store;