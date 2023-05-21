import React, { useEffect, useState } from 'react'
import { deletebyid, getallauthors, getdatabyid } from '../api/httprequests';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Authors = () => {

    const [authors, setAuthors] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        getallauthors().then((res) => {
            setAuthors(res);
            getdatabyid("646a2ee65b94a5e2297ef640")
        })

    }, [authors, setAuthors])



    return (

        <div>
            <Grid container spacing={0}>
                {authors.map((author) => {
                    return (
                        <Grid item xs={12} md={3} lg={3} key={author._id} style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>

                            <Card sx={{ maxWidth: 250 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={author.ImageURL}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {author.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Birthyear:{author.Birthyear}    <br />    Genre:{author.Genre}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <Link to={`/authordetail/${author._id}`} style={{ textDecoration: 'none', color: 'black' }}  >Detail</Link>
                                    </Button>
                                    <Button size="small" style={{ color: "red", marginLeft: "20px" }} onClick={() => {
                                     navigate(`/editauthor/${author._id}`)
                                    }}>
                                        edit
                                    </Button>
                                    <Button size="small" style={{ color: "red", marginLeft: "10px" }} onClick={() => {
                                        deletebyid(author._id)
                                    }}>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
}

export default Authors