import React from 'react'
import { Link } from 'react-router-dom'
import ItemsTarefas from '../ItemsTarefas'

const ListaDeTarefas: React.FC = () => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ItemsTarefas tasks={[]} />
      <Link to="/add-task">Adicionar Nova Tarefa</Link>
    </div>
  )
}

export default ListaDeTarefas
