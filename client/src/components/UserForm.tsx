import React, { useState } from 'react';
import { Button } from './ui/button';


export default function UserForm({ onCreate }: { onCreate: (d: any) => Promise<void> }) {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [age, setAge] = useState<number>();
    const [city, setCity] = useState<string>("")


    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onCreate({ first_name:firstName, last_name: lastName, age: age ? Number(age) : undefined, city :city?city:""});
        setFirstName('');setLastName ;setAge(0);setCity("")  
    }


    return (
        <form onSubmit={submit} className='mb-5'>
            <input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            <input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
            <input type='number' placeholder="Age" value={age} onChange={e => setAge(Number(e.target.value))} />
            <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            {/* <button type="submit">Add</button> */}
            <Button>Add User</Button>
        </form>
    )
}