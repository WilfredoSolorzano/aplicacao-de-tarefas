import styled from 'styled-components'
import { varCor } from '../../styles'

export const ListaContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 15px;
  background-color: ${varCor.branco};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ListaTitle = styled.h2`
  font-size: 24px;
  color: ${varCor.preto};
  margin-bottom: 15px;
  text-align: center;
`

export const EmptyMessage = styled.p`
  font-size: 16px;
  color: ${varCor.vermelho};
  text-align: center;
  padding: 20px;
`
