import styles from "./TrueFalse.module.css";
import UpperPart from "../UpperPart";
import TrueFalseChoice from "./TrueFalseChoice";
import {Grid} from "@mui/material";

function TrueFalse() {
    return (
        <div className={styles.mainContainer}>
            <UpperPart/>
            <Grid container className={styles.innerContainer}>
                <TrueFalseChoice type={true}/>
                <TrueFalseChoice type={false}/>
            </Grid>
        </div>
    );
}

export default TrueFalse;