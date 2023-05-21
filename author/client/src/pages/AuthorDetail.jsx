import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getdatabyid } from '../api/httprequests';
import { Button } from '@mui/material';

const AuthorDetail = () => {
    const [author, setAuthor] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getdatabyid(id).then((res) => {
            setAuthor(res);
        }, [author])
    })
    return (
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <img src={author.ImageURL} alt=""  style={{width:"250px"}}/>
            <h1 >{author.name}'s Detail page</h1>
            <h3>Birthdate:{author.Birthyear}</h3>
            <h3>isDead:{author.isDead}</h3>
            <h3>isMale:{author.isMale}</h3>
            <h3>Genre:{author.Genre}</h3>
            <Button ><Link to={'/authors'}>Go back</Link> </Button>

        </div>

    )
}

export default AuthorDetail