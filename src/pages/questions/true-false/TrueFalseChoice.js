import styles from "./TrueFalseChoice.module.css";
import {Grid} from "@mui/material";

function TrueFalseChoice(props) {
    return (
        <Grid container item  xs={6} alignItems={"center"} justifyContent={"center"} className={styles.mainContainer} spacing={2}>
            <Grid item className={styles.symbol} xs={1}>
            </Grid>
            <Grid item xs={8}>
                <p className={styles.type}>{props.type.toString()}</p>
            </Grid>
            <Grid item xs={1}>
                <div className={styles.circle}></div>
            </Grid>
        </Grid>
    )
}

export default TrueFalseChoice;