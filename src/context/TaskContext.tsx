import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Task {
  id: string
  title: string
  description: string
}

interface TaskContextType {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: string) => void
  editTask: (task: Task) => void
}

interface TaskProviderProps {
  children: ReactNode
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => setTasks((prevTasks) => [...prevTasks, task])
  const removeTask = (id: string) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  const editTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
    )
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
