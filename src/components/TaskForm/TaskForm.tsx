import classes from './TaskForm.module.scss';
import {KeyboardArrowDown} from "@mui/icons-material";
import Input from "../UI/Input/Input.tsx";
const TaskForm = () => {
    return (
        <form className={classes.taskForm}>
            <button className={classes.taskForm__button}>
                <KeyboardArrowDown/>
            </button>
            <Input placeholder='What needs to be done'/>
        </form>
    );
};

export default TaskForm;