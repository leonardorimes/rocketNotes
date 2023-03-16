import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./style";



export function Profile(){
    return(
        <Container to="/">
            <Link>
                <FiArrowLeft /> 
            </Link>

            <Form>

                <Avatar>
                    <img src="https://github.com/leonardorimes.png" 
                    alt="Foto do Usuario" 
                    />
                    <label for="avatar">
                        <FiCamera />
                        <input 
                            id="avatar" 
                            type="file"
                            />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon = {FiUser}
                />   

                 <Input 
                    placeholder="E-mail"
                    type="text"
                    icon = {FiMail}
                />   

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon = {FiLock}
                />  

                <Input 
                    placeholder="Nova Senha"
                    type="password"
                    icon = {FiLock}
                />  

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}