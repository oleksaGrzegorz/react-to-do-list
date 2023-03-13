import { useState, useRef } from "react";
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

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTask}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTask(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie!</Button>
    </MainForm>
  );
};

export default Form;
