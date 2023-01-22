import styles from "./SliderTemplate.module.css";
import {Grid, TextField} from "@mui/material";

function SliderTemplate() {
    return (
        <Grid container justifyContent={"space-between"} textAlign={"center"} className={"mainContainer"}>
            <Grid item className={styles.containerFirst}>
                <label>Min.</label>
                <TextField/>
            </Grid>
            <Grid item className={styles.containerSecond}>
                <label>Max.</label>
                <TextField/>
            </Grid>
        </Grid>
    );
}

export default SliderTemplate;