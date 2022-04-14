import Validacoes from "./services/Validacoes.js"

class Tarefas{
    static routers = (app) => {
    app.get("/Tarefas", (req,res) => {
        res.send("<h1> Hello World! Verbo GET <h1>")
    })
    app.post ("/Tarefas", (req,res) => {
        res.send("<h1> Olá - Hello ! Verbo POST <h1>")
    })
}
}
export default Tarefas;

//-----------------------------------------------------
// Testando String maior ou igual ao tamanho de 10

// import Validacoes from "../services/Validacoes.js"

// class Usuarios{
//     static routers(app){
        
//         app.get("/", (req, res)=>{
//             if(Validacoes.validaNome("Diego")){
//                 res.send("<h1>Funciona</h1>")
//             } else {
//                 res.send("<h1>Deu Ruim!</h1>")
//             }
//         })
//     }
// }

// export default Usuarios