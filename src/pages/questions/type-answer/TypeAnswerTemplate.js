import styles from "./TypeAnswerTemplate.module.css";
import {TextField} from "@mui/material";

function TypeAnswerTemplate() {
    return (
        <div className={styles.mainContainer}>
            <TextField placeholder={"Type an answer"}></TextField>
        </div>
    )
}

export default TypeAnswerTemplate;