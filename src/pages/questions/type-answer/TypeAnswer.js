import styles from "./TypeAnswer.module.css";
import TypeAnswerTemplate from "./TypeAnswerTemplate";
import UpperPart from "../UpperPart";
import {Grid} from "@mui/material";

function TypeAnswer() {
    return (
        <div className={styles.mainContainer}>
            <UpperPart/>
            <Grid container justifyContent={"center"} className={styles.main}>
                <TypeAnswerTemplate ></TypeAnswerTemplate>
            </Grid>
            <Grid container justifyContent={"center"} spacing={1}>
                <Grid item xs={3}>
                    <TypeAnswerTemplate></TypeAnswerTemplate>
                </Grid>
                <Grid item xs={3}>
                    <TypeAnswerTemplate></TypeAnswerTemplate>
                </Grid>
                <Grid item xs={3}>
                    <TypeAnswerTemplate></TypeAnswerTemplate>
                </Grid>
            </Grid>
        </div>
    )
}

export default TypeAnswer;