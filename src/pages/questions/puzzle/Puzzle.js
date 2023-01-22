import styles from "./Puzzle.module.css";
import PuzzleAnswer from "./PuzzleAnswer";
import {Card, Grid} from "@mui/material";

function Puzzle() {
    return (
        <div className={styles.mainContainer}>
            <Card variant={"outlined"} className={styles.question}>
                <h2 className={styles.title}>Start typing your question</h2>
            </Card>
            <Grid container  alignItems={"center"} justifyContent={"space-between"}>
                <Grid item xs={6} >
                    <Card className={styles.media}>
                        <div className={styles.add}>
                            <Card sx={{ width: "30px", height: "30px" }} className={styles.addSign} >+</Card>
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