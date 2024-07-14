import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/UserSlice'
import User from './User'

const UserList = () => {
    const dispacth = useDispatch()


    const {users} = useSelector(store => store.user)
    console.log(users);

    useEffect(()=>{
        dispacth(getAllUsers())
    },[])

  return (
    <div>
        {
            users && users.map((users) =>(
                <User key={id}  user={users}/>
            ))
        }
    </div>
  )
}

export default UserList