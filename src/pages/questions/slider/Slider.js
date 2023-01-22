import styles from "./Slider.module.css";
import UpperPart from "../UpperPart";
import SliderTemplate from "./SliderTemplate";

function Slider() {
    return (
        <div className={styles.mainContainer}>
            <UpperPart/>
            <SliderTemplate/>
        </div>
    );
}

export default Slider;