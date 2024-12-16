import { Task } from '@/types/task'; // Adjust the import path as necessary

export default async function TaskCard(task: { task: Task }) {
    return (
      <div className="border-solid border-2 border-gray-200 p-4">
        <h1>Task Card</h1>s
        <p>{task.task.id}</p>
      </div>
    );
}
  