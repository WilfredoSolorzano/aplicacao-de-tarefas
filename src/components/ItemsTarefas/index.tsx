import React from 'react'
import {
  Button,
  ButtonsContainer,
  EmptyMessage,
  ListContainer,
  TaskDescription,
  TaskInfo,
  TaskItem,
  TaskTitle
} from './styles'
import { useTaskContext } from '../../context/TaskContext'

interface Task {
  id: string
  title: string
  description?: string
}

interface ItemsTarefasProps {
  tasks: Task[]
}

const ItemsTarefas: React.FC<ItemsTarefasProps> = ({ tasks }) => {
  const { removeTask, editTask } = useTaskContext() // Acesso ao contexto para manipular tarefas

  return (
    <ListContainer>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskInfo>
              <TaskTitle>{task.title}</TaskTitle>
              {task.description && (
                <TaskDescription>{task.description}</TaskDescription>
              )}
            </TaskInfo>
            <ButtonsContainer>
              <Button
                variant="edit"
                onClick={() =>
                  editTask({ ...task, description: task.description || '' })
                }
              >
                Editar
              </Button>
              <Button variant="delete" onClick={() => removeTask(task.id)}>
                Excluir
              </Button>
            </ButtonsContainer>
          </TaskItem>
        ))
      ) : (
        <EmptyMessage>Nenhuma tarefa encontrada.</EmptyMessage>
      )}
    </ListContainer>
  )
}

export default ItemsTarefas
