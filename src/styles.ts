import { createGlobalStyle } from 'styled-components'

export const varCor = {
  branco: '#f5f5f5;',
  gris: '#a29797',
  azul: '#0056b3',
  verde: '#4CAF50',
  vermelho: '#f00808',
  escuroV: '#8C0303',
  borderC: '#ddd',
  preto: '#333333'
}

export const GlobalCss = createGlobalStyle`
    *{
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif
  }
      body{
     background-color: ${varCor.gris};
     color: ${varCor.preto};
      }
`
