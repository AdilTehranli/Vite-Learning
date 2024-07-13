import React from 'react'
const BASE_URL = "http://localhost:3005/"
const Axios = () => {

    const GetUsers = async ()=>{
        const response = await axios.get(`${BASE_URL}users`)
        console.log(response.data)
      }
    
      const CreateUser = async (newUser) =>{
       await axios.post(`${BASE_URL}users`,newUser)
      }
    
      const UpdateUser = async (userId,updatedUser)=>{
        await axios.put(`${BASE_URL}users/${userId}`,updatedUser)
      }
    
      const DeleteUser = async (userId) =>{
       const deletedRespons= await axios.delete(`${BASE_URL}users/${userId}`)
       console.log(deletedRespons.data);
      }
      useEffect(()=>{
        // DeleteUser("4af4")
        // GetUsers()
    
        // // const newUser={
        // //   name:"Sergio",
        // //   email:"sergio@gmail.com",
        // //   password:"123456"
        // // }
        // // CreateUser(newUser)
    
        // UpdateUser(1,{
        //   name:"Xalid",
        //   email:"xalid@gmail.com",
        //   password:"123456"
        // })
    
      },[])
  return (
    <div>Axios</div>
  )
}

export default Axios