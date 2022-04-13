const teste = (app) => {
    app.get("/", (req,res) =>{
        res.send("<h1> Hello World ! <h1>")
    })
}
export default teste;
