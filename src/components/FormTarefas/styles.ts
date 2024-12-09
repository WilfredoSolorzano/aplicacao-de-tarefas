import styled from 'styled-components'
import { varCor } from '../../styles'

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${varCor.borderC};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: ${varCor.branco};
`

export const Title = styled.h2`
  text-align: center;
  color: ${varCor.preto};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${varCor.borderC};
  border-radius: 5px;
  font-size: 16px;
`

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${varCor.borderC};
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${varCor.azul};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${varCor.verde};
  }
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
export const SuccessMessage = styled.div`
  color: ${varCor.verde};
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`
