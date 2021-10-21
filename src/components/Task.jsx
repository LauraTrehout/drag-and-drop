import React from "react"
import { Draggable } from "react-beautiful-dnd"

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="task__item"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task