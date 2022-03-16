const express = require("express");

const {create} = require("express-handlebars");

const app = express();
// configurar partials handlebars
const hbs = create({
    partialsDir:["view/partials"],
    extname:".hbs",
})

// motor de plantilla 
app.engine(".hbs", hbs.engine)
app.set('view engine' , '.hbs')
app.set('views' , './view')

// midleware
app.use(express.static(__dirname + "/public"))
app.use(
    "/css/bootstrap.min.css",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"
    )
);
app.use(
    "/js/bootstrap.min.js",
    express.static(
        __dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js"
    )
);


app.get("/mercado", (req, res) => {
    res.render("dashboard", {
        frutas: ["cebollas", "lechuga","papas","pimenton", "tomate", "banana"],
    });
});


// 

app.listen(5000, () => console.log("servidor andando en puerto 5000"))
