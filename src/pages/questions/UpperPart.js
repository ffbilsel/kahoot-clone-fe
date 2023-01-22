import styles from "./UpperPart.module.css";
import {Button, Card, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

function UpperPart() {
    const dispatch = useDispatch();
    const title = useSelector(state => state.title);

    const handleTitle = (event) => {
        dispatch({type : ">>Title " + event.target.value});
    }

    return (
        <>
            <Card variant={"outlined"} className={styles.question}>
                <TextField className={styles.title} placeholder={"Start typing your question"} value={title} sx={{ width: 0.8}} onChange={handleTitle}/>
            </Card>
            <div>
                <Card className={styles.media}>
                    <div className={styles.add}>
                        <Button variant={"outlined"} component={"label"} >+<input type={"file"} hidden /></Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default UpperPart;