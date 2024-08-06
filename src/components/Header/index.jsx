import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/LeoGCarva.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Leo Carvalho</strong>
                </div>
            </Profile>

            <Link to="/signin">
                <Logout>
                    <RiShutDownLine />
                </Logout>
            </Link>
        </Container>
    )
}