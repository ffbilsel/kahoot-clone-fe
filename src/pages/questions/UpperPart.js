import styles from "./UpperPart.module.css";
import {Card, TextField} from "@mui/material";

function UpperPart() {
    return (
        <>
            <Card variant={"outlined"} className={styles.question}>
                <TextField className={styles.title} placeholder={"Start typing your question"} sx={{ width: 0.8}}/>
            </Card>
            <div>
                <Card className={styles.media}>
                    <div className={styles.add}>
                        <Card sx={{ width: "30px", height: "30px" }} className={styles.addSign} >+</Card>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default UpperPart;