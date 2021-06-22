import express, { request, response } from "express";

//@types/express
const app = express();

/*
Metodos
GET    => Buscar informação
POST   => Inserir (Criar) uma informação
PUT    => Alterar uma informação
DELETE => Remover um dado
PATCH  => Alterar uma informação especifica
*/

app.get("/produtos", (request, response) =>{
    return response.json("Hello Word!")
})

app.post("/produtoItem", (request, response) => {
    return response.json({ saudacao: "Seja-Bem Vindo"})
})


app.listen(3333, () => console.log('Server is runnig'));