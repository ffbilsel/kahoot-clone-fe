import styles from "./Puzzle.module.css";
import PuzzleAnswer from "./PuzzleAnswer";
import {Button, Card, Grid, TextField} from "@mui/material";

function Puzzle() {
    return (
        <div className={styles.mainContainer}>
            <Card variant={"outlined"} className={styles.question}>
                <TextField className={styles.title} placeholder={"Start typing your question"} sx={{ width: 0.8}}/>
            </Card>
            <Grid container  alignItems={"center"} justifyContent={"space-between"}>
                <Grid item xs={6} >
                    <Card className={styles.media}>
                        <div className={styles.add}>
                            <Button variant={"outlined"} component={"label"} >+<input type={"file"} hidden/></Button>
                        </div>
                    </Card>
                </Grid>
                <Grid container item xs={5} justifyContent={"center"}>
                    <Grid container className={styles.answer}>
                        <PuzzleAnswer/>
                    </Grid>
                    <Grid container className={styles.answer}>
                        <PuzzleAnswer/>
                    </Grid>
                    <Grid container className={styles.answer}>
                        <PuzzleAnswer/>
                    </Grid>
                    <Grid container>
                        <PuzzleAnswer/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Puzzle;