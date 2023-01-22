import Answer from "./Answer"
import styles from "./Quiz.module.css";
import UpperPart from "../UpperPart";
import {Card, Grid} from "@mui/material";

function Quiz() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.upperPart}>
                <UpperPart/>
            </div>
            <Grid container>
                <Answer/>
                <Answer/>
                <Answer/>
                <Answer/>
            </Grid>
            {/*<Card className={styles.addMore}>*/}
            {/*    <p>Add more Answers</p>*/}
            {/*</Card>*/}
        </div>
    );
}

export default Quiz;