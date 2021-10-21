import React from "react"
import Task from "./Task"
import { Droppable } from "react-beautiful-dnd"

function Column({ column, tasks }) {
  return (
    <div className="tasks__column">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {provider => (
          <div
            {...provider.droppableProps}
            ref={provider.innerRef}
            className="tasks__list"
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column