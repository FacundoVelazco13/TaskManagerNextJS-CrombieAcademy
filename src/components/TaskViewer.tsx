import { PrismaClient } from "@prisma/client";
import TaskCard from "./TaskCard";
import { Task } from "@/types/task";

const prisma = new PrismaClient();

export default async function TaskViewer() {
  const tasks : Task[] = await prisma.task.findMany();
  return (
    <div className="border-solid border-2 border-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl">Task List</h1>
      <hr className="my-2"/>
      <ul>
        {tasks.map((task : Task) => (
          <li key={task.id}>
            <TaskCard task = {task}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
