const express = require ("express")
const app = express()
const port = 9700
const fs = require("fs")


const productRoute = require("./route/ProductRoute")

const homepage = fs.readFileSync("./pages/home.html", "utf-8")
// const about = fs.readFileSync("./pages/about.html", "utf-8")
// const product = fs.readFileSync("./pages/product.html", "utf-8")
// const contact = fs.readFileSync("./pages/contact.html", "utf-8")
// const testimonial = fs.readFileSync("./pages/testimonial.html", "utf-8")


app.get('/',(req, res) =>{
    res.send(homepage)
})

// app.get('/about', (req, res) => {
//     res.send(about)
// })

// app.get('/product', (req, res) => {
//     res.send(product)
// })

// app.get('/contact', (req, res) => {
//     res.send(contact)
// })

// app.get('/testimonial', (req, res) => {
//     res.send(testimonial)
// })

// USING PRODUCT ROUTE
app.use(productRoute)

// SERVER WILL NOW HANDLE JSON DATA
app.use(express.json())

app.listen(port,() =>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})