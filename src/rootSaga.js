import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([
    tasksSaga(),
    //space for another saga, right now we use just one.
  ]);
}
