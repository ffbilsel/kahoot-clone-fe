import styles from "./Answer.module.css";
import {Grid, TextField} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

function Answer() {
    return (
        <Grid className={styles.mainContainer} container item xs={6} alignItems={"center"} justifyContent={"center"}>
            <Grid item className={styles.symbol}></Grid>
            <Grid item>
                <TextField variant={"outlined"} sx={{ height: "100%"}}/>
            </Grid>
            <Grid item>
                <ImageIcon/>
            </Grid>
        </Grid>
    )
}

export default Answer;