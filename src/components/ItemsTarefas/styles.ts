import styled from 'styled-components'
import { varCor } from '../../styles'

interface ButtonProps {
  variant: 'edit' | 'delete'
}

export const ListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: ${varCor.branco};
  border: 1px solid ${varCor.borderC};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${varCor.escuroV};

  &:last-child {
    border-bottom: none;
  }
`

export const TaskInfo = styled.div`
  flex: 1;
  margin-right: 10px;
`

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${varCor.preto};
`

export const TaskDescription = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: ${varCor.gris};
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button<ButtonProps>`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  background-color: ${({ variant }) =>
    variant === 'edit' ? varCor.verde : varCor.vermelho};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${varCor.preto};
  font-size: 16px;
`
