import React from 'react'
import FormTarefas from '../../components/FormTarefas'
import { Link } from 'react-router-dom'

const AddTask: React.FC = () => {
  return (
    <div>
      <h2>Adicionar Nova Tarefa</h2>
      <FormTarefas />
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default AddTask
