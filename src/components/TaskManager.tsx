import TaskForm from "./TaskForm";
import TaskViewer from "./TaskViewer";

export default function TaskManager() {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm/>
            <TaskViewer/>
        </div>
        );
}