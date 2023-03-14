import { List, Item, Content, RemoveButton, DoneButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TasksList = ({ removeTask}) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    (
      <List>
        {tasks.map((task) => (
          <Item key={task.id} hidden={task.done && hideDone}>
            <DoneButton
              
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔" : " "}
            </DoneButton>
            <Content done={task.done}>
                {task.content}
            </Content>
            <RemoveButton
              onClick={() => removeTask(task.id)}
            >
              🗑
            </RemoveButton>
          </Item>
        ))}
      </List>
    )
  )
};

export default TasksList;
