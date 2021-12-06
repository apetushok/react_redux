import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActionCreators} from "../hooks/useActionCreator";

const UsersList = () => {
    const {fetchUsers, setUserId} = useActionCreators()
    const {usersState: {
        isLoading, users, error
    }, postsState} = useTypedSelector(state => state)

    useEffect(() => {
        fetchUsers()
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>{error}</div>
    }

    return (
        <div className="users-list">
            {users.map(user =>
                <div className={user.id === postsState.userId ? 'user-block active' : 'user-block'} key={user.id} onClick={() => {setUserId(user.id)}}>{user.name}</div>
            )}
        </div>
    );
};

export default UsersList;