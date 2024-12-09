import React, { useState } from 'react'
import { useTaskContext } from '../../context/TaskContext'
import {
  Form,
  FormContainer,
  Input,
  SubmitButton,
  Textarea,
  Title,
  ErrorMessage,
  SuccessMessage
} from './styles'

const FormTarefas: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { addTask } = useTaskContext()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verifica se os campos estão vazios
    if (!title.trim() || !description.trim()) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    // Se ambos os campos estão preenchidos, cria a nova tarefa
    const newTask = {
      id: Date.now().toString(),
      title,
      description
    }

    addTask(newTask)

    // Limpar os campos após adicionar a tarefa
    setTitle('')
    setDescription('')
    setError('') // Limpar a mensagem de erro, se houver
    setSuccess('Tarefa agregada com sucesso!') // Exibe a mensagem de sucesso
  }

  return (
    <FormContainer>
      <Title>Adicionar Tarefa</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título da tarefa"
        />
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}{' '}
        {/* Exibe a mensagem de sucesso */}
        {!success && (
          <SubmitButton type="submit">Adicionar Tarefa</SubmitButton>
        )}{' '}
      </Form>
    </FormContainer>
  )
}

export default FormTarefas
