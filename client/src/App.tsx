
import { useEffect, useState } from 'react'
import './App.css'
import { createUser, fetchUsers } from './libs/api';

function App() {

  // const checkServer = async () => {
  //   const data = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/health`)
  //   console.log("data", data);

  // }
  useEffect(() => { }, [])
  // checkServer()

  const [users, setUsers] = useState<any[]>([]);


  const load = async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => { load(); }, []);


  const handleCreate = async (payload: any) => {
    try {
      await createUser(payload);
      await load();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <div className='p-4'>
        <h1>MERN TS - Users</h1>
        {/* <UserForm onCreate={handleCreate} />
        <UserTable users={users} /> */}
      </div>
    </>
  )
}

export default App
