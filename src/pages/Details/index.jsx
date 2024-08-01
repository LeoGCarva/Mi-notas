import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details(){
  return(
    <Container  >
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

          <h1>
            Introdução ao React
          </h1>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non posuere turpis. Donec pretium bibendum est ultrices tempus. Aliquam vel euismod ex, non pretium augue. Curabitur aliquet ipsum nunc, vitae laoreet felis dapibus et. Curabitur pharetra rutrum rhoncus. Sed rhoncus tortor non augue commodo, eu varius erat varius. Sed in efficitur nulla, in consectetur augue. 
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="exporess" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container  >  
  )
}