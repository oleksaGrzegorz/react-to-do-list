import { useState } from "react";
import { MainForm, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTask, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() === "") {
            return;
        }

        addNewTask(newTask.trim());
        setNewTask("");
    };

    return (
        <MainForm onSubmit={onFormSubmit}>
            <Input
                value={newTask}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTask(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </MainForm>
    )
};

export default Form;