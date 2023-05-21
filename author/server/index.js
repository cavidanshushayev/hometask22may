const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const mongoose = require("mongoose");
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const AuthorSchema = new mongoose.Schema({
    name: String,
    Birthyear: String,
    Genre: String,
    isDead: String,
    isMale: String,
    ImageURL: String,
});
const Authormodel = mongoose.model("Authors", AuthorSchema);
module.exports = Authormodel;
mongoose.connect('mongodb+srv://cavidan_admin:Admin123@spotify.4xl08pb.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB Conected!!");
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/authors", async (req, res) => {
    const authors = await Authormodel.find();
    res.send({
        data: authors,
        mesaage: "ALl data geted sucsesfuly"
    }
    )

})

app.get("/authors/:id" , async (req,res)=>{
    const id=req.params.id
    const author=await Authormodel.findById(id)
    res.send({
        data:author,
        Message :"Data geted by id"
    })
})



app.delete("/authors/:id" , async(req,res) =>{
    const id=req.params.id;
    const deletedauthor= await Authormodel.findByIdAndDelete(id);
    res.send("deleted")
})


// app.put("/authors/:id", (req, res) => {
//     const id = req.params(id);
//     const editauthor = Authormodel.find(id);
    

// })




app.post('/authors', async (req, res) => {
    const { name, Birthyear, Genre, isDead, isMale, ImageURL } = req.body;
    const newAuthor = new Authormodel({
        name: name,
        Birthyear: Birthyear,
        Genre: Genre,
        isDead: isDead,
        isMale: isMale,
        ImageURL: ImageURL
    })
    await newAuthor.save();
    res.send("created")
})


app.put('/authors/:id', async (req, res) => {
    const id = req.params.id;
    const { name, Birthyear, Genre, isDead, isMale, ImageURL } = req.body;
    const editauthor = await Authormodel.findById(id);
    editauthor.name = name;
    editauthor.Birthyear = Birthyear;
    editauthor.Genre = Genre;
    editauthor.isDead = isDead;
    editauthor.isMale = isMale;
    editauthor.ImageURL = ImageURL;
    
    await Authormodel.updateOne({ _id: id }, editauthor);
    res.send("updated");
 });




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})