import { Task } from '@/types/task'; // Adjust the import path as necessary

export default async function TaskCard(task: { task: Task }) {
    return (
      <div className="border-solid border-2 border-gray-200 p-4 rounded-lg">
        <div className='flex'>
            <h1>{task.task.title}</h1>
        </div>
        <div>
            <h2>Descripcion : </h2>
            <p>{task.task.description}</p>
        </div>
        <div>
          <button className='p-2 m-2 bg-blue-500 text-white rounded-lg'>
            edit
          </button>
          <button className='p-2 m-2 bg-red-500 text-white rounded-lg'>
            delete
          </button>
        </div>

      </div>
    );
}
  