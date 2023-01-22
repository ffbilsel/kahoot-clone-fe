import styles from "./PuzzleAnswer.module.css";
import {Grid, TextField} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

function Answer() {
    return (
        <>
            <Grid item className={styles.symbol}></Grid>
            <Grid item>
                <TextField variant={"outlined"} sx={{ height: "100%"}}/>
            </Grid>
            <Grid item>
                <ImageIcon/>
            </Grid>
        </>
    )
}

export default Answer;