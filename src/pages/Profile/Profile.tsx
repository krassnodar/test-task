import { FC, useEffect } from 'react';
import { useTypedSelector } from '../../hookes/useTypedSelector';
import { useHistory } from 'react-router';

const Profile:FC = () => {
    const { username } = useTypedSelector(state => state.user);
    const router = useHistory();

    useEffect(() => {
        if(!username) {
            router.push('/')
        }
    }, []);


    return (
        <h1>{username}</h1>
    )
}

export default Profile;