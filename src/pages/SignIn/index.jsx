import { Container, Form, Background } from "./style";
import { Link } from "react-router-dom";

import { FiMail, FiLock} from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button"

export function SignIn(){
    return (
        <Container>
            <Form >
                <h1>Mi-Notas</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <div>
                    <h2>Faça seu login</h2>

                    <Input 
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                    />

                    <Input 
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                    />
                    <Link to="/">
                        <Button title="Entrar"/>
                    </Link>
                </div>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    );
}