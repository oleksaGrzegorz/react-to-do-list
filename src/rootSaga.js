import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([
    watchFetchExampleTasks(),
    //space for another saga, right now we use just one.
  ]);
}
