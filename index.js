const { application } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const port = 3000;
app.get('/', (req, res)=>{
    res.send('Hello Bangladesh Hello Hello Bangladesh  From My Secound Node Server autometic restart')
});

const users = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },

    {
        "id": 1,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    {
        "id": 2,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    {
        "id": 3,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
    },
    {
    "id": 4,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    },
    {
        "id": 5,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
    }

]

app.get("/users", (req, res)=>{
    const search = req.query.search; 
    if(search){
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult)
    }
    else{
        res.send(users)    
    }
});

app.post("/users", (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hiting the post ', req.body)
    res.json(newUser)
})

app.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get("/mango/kathal/fazli", (req,res)=>{
    res.send("Yemmy Yeemy ama ta valo nah")

})

app.listen(port, ()=>{
    console.log('listening to port' , port)
})