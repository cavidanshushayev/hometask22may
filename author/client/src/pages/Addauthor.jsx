import React, { useState } from 'react'
import { addelement } from '../api/httprequests';
import { useNavigate } from 'react-router-dom';

const Addauthor = () => {
    const [author, setnewauthor] = useState([]);
    const navigate = useNavigate();

    const handlesumbit = () => {
        addelement(author)
        navigate('/authors');
    }
    const handlechange = (e) => {
        setnewauthor({ ...author, [e.target.name]: e.target.value })

    }

    return (
        <>

            <div style={{ width: "300px", marginLeft: "40%", marginTop: "10%" }}>
                <h1>Add Author</h1>
                <input type="text" name='ImageURL' placeholder='IMAGE' onChange={handlechange} />
                <input type="text" name='name' placeholder='name' onChange={handlechange} />
                <input type="text" name='Birthyear' placeholder='Birthyear' onChange={handlechange} />
                <input type="text" name='Genre' placeholder='Genre' onChange={handlechange} />
                <input type="text" name='isDead' placeholder='isDead' onChange={handlechange} />
                <input type="text" name='isMale' placeholder='isMale' onChange={handlechange} />
                
                <br />
                <button type='Sumbit' onClick={handlesumbit} style={{ width: "173PX" }}>sumbit</button>
            </div>

        </>
    )
}

export default Addauthor