import React from 'react'
import { Link } from 'react-router-dom' // Importando o Link para navegação
import { useTaskContext } from '../../context/TaskContext'
import ItemsTarefas from '../../components/ItemsTarefas' // Listar as tarefas

const Home: React.FC = () => {
  const { tasks } = useTaskContext() // Pega as tarefas do contexto

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ItemsTarefas tasks={tasks} /> {/* Renderiza as tarefas */}
      {/* Link para a página de adicionar tarefa */}
      <Link to="/add-task">Adicionar Nova Tarefa</Link>
    </div>
  )
}

export default Home
