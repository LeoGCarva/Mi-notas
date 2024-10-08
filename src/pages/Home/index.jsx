import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>Mi-Notas</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'React' }, 
                        ]
                        }}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>


        </Container>

    );
}