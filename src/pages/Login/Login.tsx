import { 
    Wrapper,
    Form,
    Input,
    Button,
    Title
} from './Login.style';

import React, { FC } from 'react';
import { useState } from 'react'; 
import { useActions } from '../../hookes/useActions';
import { useHistory } from 'react-router';
import { useTypedSelector } from '../../hookes/useTypedSelector';

const Login:FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading } = useTypedSelector(state => state.user)

    const {loginUser} = useActions();
    const router = useHistory();

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        loginUser(username);
        router.push('/profile');
    }

    return (
        <Wrapper>
            {loading 
                ?
                    // Иммитация реального запроса на бэк, чтобы отобразить оповещение пользователю о том, что идет запрос
                    <h1>Loading...</h1>
                :
                    <Form
                        onSubmit={submitForm}
                    >
                        <Title>
                            Login
                        </Title>
                        <Input 
                            placeholder='Username'
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                        <Input 
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <Button
                            disabled={!(password === '123456' && username ===  'developer21')}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Form>
            }
        </Wrapper>
    )
}

export default Login;