import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/leonardorimes.png"
                 alt="Foto do usuário" />

                 <div>
                    <span> Bem - Vindo</span>
                    <strong> Leonardo Rimes</strong>
                 </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}