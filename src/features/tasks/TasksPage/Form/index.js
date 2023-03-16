import { useState, useRef } from "react";
import { MainForm, Button, Input } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        content: newTask.trim(),
        done: false,
        id: nanoid(),
      })
    );

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
