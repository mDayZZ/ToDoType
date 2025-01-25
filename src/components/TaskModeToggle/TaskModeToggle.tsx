import RadioButton from "../UI/RadioButton/RadioButton.tsx";
import {Dispatch, SetStateAction} from "react";
import classes from "./TaskModeToggle.module.scss";

interface ITaskModeProps {
    filterMode: string,
    setFilterMode: Dispatch<SetStateAction<string>>,
}
const TaskModeToggle = ({filterMode, setFilterMode}: ITaskModeProps) => {
    const handleFilterModeChange = (mode :string): void => {
        setFilterMode(mode);
    }
    return (
        <fieldset className={classes.taskModeToggle}>
            <legend className='visually-hidden' >Display tasks: </legend>
            <RadioButton name='filterMode' value='all' checked={filterMode === 'all'} id='filterMode__all' onChange={(e) => handleFilterModeChange(e.target.value)}>All</RadioButton>
            <RadioButton name='filterMode' value='active' checked={filterMode === 'active'} id='filterMode__active' onChange={(e) => handleFilterModeChange(e.target.value)}>Active</RadioButton>
            <RadioButton name='filterMode' value='completed' checked={filterMode === 'completed'} id='filterMode__completed' onChange={(e) => handleFilterModeChange(e.target.value)}>Completed</RadioButton>
        </fieldset>
    );
};

export default TaskModeToggle;