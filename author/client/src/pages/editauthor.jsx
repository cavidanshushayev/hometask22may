import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getdatabyid } from '../api/httprequests'

const Editauthor = () => {
    const [edited, setedited] = useState({
        ImageURL: '',
        name: '',
        Birthyear: '',
        Genre: '',
        isDead: '',
        isMale: '',
    });
    const { id } = useParams()
    const handleChange = (e) => {
        setedited({ ...edited, [e.target.name]: e.target.value });
    };
    const handlesumbit = () => {
        console.log(edited);
    }





    return (
        <div style={{ width: "300px", marginLeft: "40%", marginTop: "10%" }}>
            <h1>Edit Author </h1>
            <input
                type="text"
                name="ImageURL"
                placeholder="IMAGE"
                onChange={handleChange}
                value={edited.ImageURL}
            />
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={edited.name}
            />
            <input
                type="text"
                name="Birthyear"
                placeholder="Birthyear"
                onChange={handleChange}
                value={edited.Birthyear}
            />
            <input
                type="text"
                name="Genre"
                placeholder="Genre"
                onChange={handleChange}
                value={edited.Genre}
            />
            <input
                type="text"
                name="isDead"
                placeholder="isDead"
                onChange={handleChange}
                value={edited.isDead}
            />
            <input
                type="text"
                name="isMale"
                placeholder="isMale"
                onChange={handleChange}
                value={edited.isMale}
            />
            <br />
            <button type='Sumbit' onClick={handlesumbit} style={{ width: "173PX" }}>sumbit</button>
        </div>
    )
}

export default Editauthor