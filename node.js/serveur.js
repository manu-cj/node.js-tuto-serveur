const http = require('http');
const { url } = require('inspector');
const serveur = http.createServer((req, res) => {

//Définitio n de l'en-tête

res.setHeader("content-type", "text/plain")

    if (req.url === "/acceuil") {
        res.write('Bienvenue')
    }
    else if(req.url === "/profil"){
        res.write('Vous êtes un developpeur node.js');
    }
    else {
        res.write('Url non valide');
    }
    //Finalisation de la réponse
    
    res.end()
}) 

serveur.listen(8000, "localhost", () => {
    console.log("en attente de requètes sur le port 8000");
});