const express = require("express")
const mysql = require("mysql")
const PORT = process.env.PORT || 8000

const app = express()



app.get("/", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node',
    })
    
    connection.connect((err)=>{
        if (err) {
            console.log("Erreur de connexion : " + err.stack)
            return;
        }
        console.log("Connexion à la bdd");
    
    })
    
    
    connection.query("SELECT * FROM users", (err, rows, fields) => {
        if (err) throw err;
        res.json(rows)
        
    })

    connection.end;
})

const users = require("./routes/users")
app.use("/users", users)

app.listen(PORT , () => {
    console.log('serveur en ligne');
})