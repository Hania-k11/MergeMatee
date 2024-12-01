import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { PlusCircle, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

// Component
function TaskBoard() {
  // Initial state with sample data
  const [columns, setColumns] = useState([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        {
          id: 'task-1',
          title: 'Implement Authentication',
          description: 'Add user login and registration functionality',
          assignee: 'Sarah Chen',
          priority: 'high',
          dueDate: '2024-03-25'
        },
        {
          id: 'task-2',
          title: 'Design Dashboard',
          description: 'Create wireframes for main dashboard',
          assignee: 'Mike Johnson',
          priority: 'medium',
          dueDate: '2024-03-28'
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        {
          id: 'task-3',
          title: 'API Integration',
          description: 'Connect frontend with backend services',
          assignee: 'Alex Kumar',
          priority: 'high',
          dueDate: '2024-03-24'
        }
      ]
    },
    {
      id: 'completed',
      title: 'Completed',
      tasks: [
        {
          id: 'task-4',
          title: 'Setup Project',
          description: 'Initialize repository and configure build tools',
          assignee: 'Chris Wilson',
          priority: 'low',
          dueDate: '2024-03-20'
        }
      ]
    }
  ]);

  // Drag and drop handler
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);

    if (!sourceColumn || !destColumn) return;

    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = source.droppableId === destination.droppableId 
      ? sourceTasks 
      : [...destColumn.tasks];

    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    setColumns(columns.map(col => {
      if (col.id === source.droppableId) {
        return { ...col, tasks: sourceTasks };
      }
      if (col.id === destination.droppableId) {
        return { ...col, tasks: destTasks };
      }
      return col;
    }));
  };

  // Priority badge renderer
  const PriorityBadge = ({ priority }) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };

    if (!priority) return null;

    return (
      <span className={cn(
        'px-2 py-1 rounded-full text-xs font-medium',
        colors[priority]
      )}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  // Task card renderer
  const TaskCard = ({ task, provided, snapshot }) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={cn(
        "bg-white rounded-lg p-4 mb-3 shadow-sm border border-gray-100",
        "hover:shadow-md transition-shadow",
        snapshot.isDragging && "shadow-lg"
      )}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-3 flex-1">
          <div>
            <h3 className="font-medium text-gray-800">{task.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-xs font-medium text-indigo-600">
                  {task.assignee?.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-sm text-gray-600">{task.assignee}</span>
            </div>
            <PriorityBadge priority={task.priority} />
          </div>

          {task.dueDate && (
            <div className="text-sm text-gray-500">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </div>
          )}
        </div>
        <button className="text-gray-400 hover:text-gray-600 ml-4">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Task Board</h1>
          <div className="text-sm text-gray-600">
            {columns.reduce((total, col) => total + col.tasks.length, 0)} tasks
          </div>
        </div>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map(column => (
              <div
                key={column.id}
                className="bg-gray-50 rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {column.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {column.tasks.length} tasks
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                    <PlusCircle className="w-5 h-5" />
                  </button>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={cn(
                        "min-h-[200px] transition-colors rounded-md p-2",
                        snapshot.isDraggingOver && "bg-blue-50"
                      )}
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <TaskCard
                              task={task}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default TaskBoard;
