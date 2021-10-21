import React, { useState } from "react"
import initialData from "../config/datas"
import Column from "./Column"
import { DragDropContext } from "react-beautiful-dnd"

function Tasks() {
  const [datas, setDatas] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    // on check la possition si c'est pas en dehors du cadre - sinon on arrete l'execution de la fonction
    if (!destination) {
      return
    }
    // on check si la destination n'est pas la meme que la source
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // partie 2 multiples colonnes
    // on check si la colonne source et la meme que la colonne de destination

    const start = datas.columns[source.droppableId]
    const finish = datas.columns[destination.droppableId]

    console.log(start)
    console.log(finish)

    if (start === finish) {
      console.log("meme colonne")

      // on va chercher la colonne de tache qui nous interesse
      const column = datas.columns[source.droppableId]
      // on choppe les ids des taches actuelles
      const newTaskIds = Array.from(column.taskIds)
      // on remplace les places dans l'array
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      // on crée une copie de la colonne de tache modifiée
      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      }
      // et on met à jour le state
      const newState = {
        ...datas,
        columns: {
          ...datas.columns,
          [newColumn.id]: newColumn,
        },
      }
      setDatas(newState)
      return
    }

    // Si on bouge les éléments dans une autre colonne
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...datas,
      columns: {
        ...datas.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setDatas(newState)
  }

  return (
    <div className="tasks">
      <DragDropContext onDragEnd={onDragEnd}>
        {datas.columnOrder.map(columnId => {
          const column = datas.columns[columnId]
          const tasks = column.taskIds.map(taskId => datas.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </div>
  )
}

export default Tasks