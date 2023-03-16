import { Fragment } from "react"
import { Container, Links, Content } from "./styles.js"
import { Header } from '../../components/Header'
import { Button } from "../../components/Button/"
import { Section } from "../../components/Section/"
import { ButtonText } from "../../components/ButtonText/"
import { Tag } from '../../components/Tag'


export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
     
      <Content>


      
      <ButtonText title="Excluir nota" />

      <h1> Introdução ao React </h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae aliquam aliquid, tenetur adipisci ut hic quidem consequuntur atque, nostrum autem? Assumenda dolor dolores sit minus ullam, perspiciatis molestias autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur asperiores doloribus debitis dolore esse quod, fugiat distinctio voluptas. In ipsam cum amet itaque dolore debitis, alias deleniti quasi provident?
      </p>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>

          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          
        </Links>
      </Section>

      
      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />

      </Section>
      <Button title="voltar"/>
      </Content> 
      </main>
    </Container>
  )
}