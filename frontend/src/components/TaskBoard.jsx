import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const TaskBoard = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const columns = {
    todo: "To Do",
    inProgress: "In Progress",
    completed: "Completed",
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks/${projectId}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));

    socket.on("taskUpdated", (updatedTask) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.taskId === updatedTask.taskId ? updatedTask : task
        )
      );
    });

    socket.on("taskCreated", (newTask) => {
      setTasks((prev) => [...prev, newTask]);
    });
  }, [projectId]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const task = tasks[source.index];
    const updatedTask = { ...task, status: destination.droppableId };

    fetch(`http://localhost:5000/api/tasks/${task.taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const reorderedTasks = Array.from(tasks);
    reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, updatedTask);
    setTasks(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {Object.entries(columns).map(([key, name]) => (
          <Droppable key={key} droppableId={key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/3 bg-gray-100 p-4 rounded shadow"
              >
                <h2 className="text-xl font-bold mb-4">{name}</h2>
                {tasks
                  .filter((task) => task.status === key)
                  .map((task, index) => (
                    <Draggable
                      key={task.taskId}
                      draggableId={task.taskId}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-3 mb-2 rounded shadow cursor-pointer"
                        >
                          <h3 className="font-semibold">{task.title}</h3>
                          <p>{task.description}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
