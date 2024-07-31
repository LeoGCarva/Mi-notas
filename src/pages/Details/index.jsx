import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details(){
  return(
    <Container  >
      <h1>Hello, World!</h1>
      <div>
        <p>Meu nome é Leo Carvalho</p>
      </div>
      
      <Button title="Entrar" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container  >
  )
}