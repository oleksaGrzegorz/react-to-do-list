import Form from "./Form";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { fetchExampleTasks } from "./tasksSlice";
import { useDispatch } from "react-redux";

function Tasks() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </button>
        }
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
