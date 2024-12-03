import TodoCard from "./TodoCard";

export default function TodoList({ tasks, handleRemoveTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <div className="tasksListContainer">
          <li
            className="tasksList"
            key={index}
            onClick={() => {
              handleRemoveTask(index);
            }}
          >
            {task}
          </li>
        </div>
      ))}
    </div>
  );
}
