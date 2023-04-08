import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth"
import { Container, Profile, Logout } from './styles';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigation } from 'react-router-dom';

export function Header() {
    const { signOut, user } = useAuth();

    function handleSignOut(){
        const navigation = useNavigation();
        navigation("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src={avatarUrl}
                 alt={user.name}/>

                 <div>
                    <span> Bem - Vindo</span>
                    <strong> {user.name}</strong>
                 </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}