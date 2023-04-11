
import React, { useEffect, useState } from 'react'
function API() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].title)
        setMobile(resp[0].complete)
       
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
//   function selectUser(id)
//   {
//     let item=users[id-1];
//     setName(item.name)
//         setEmail(item.email)
//         setMobile(item.mobile);
//         setUserId(item.id)
//   }
//   function updateUser()
//   {
//     let item={name,mobile,email}
//     console.warn("item",item)
//     fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`, {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
  return (
    <div className="App">
      <h1> User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.complete}</td>
                
                

              </tr>
            )
          }
        </tbody>
      </table>
      {/* <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div> */}
    </div>
  );
}
export default API;