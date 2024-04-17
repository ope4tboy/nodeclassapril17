const express = require("express")

const router = express.Router()


router.get("/products", (req, res) =>{
    res.status(200)
    res.json([
        {
            productName : "iphone15",
            producPrice: "$1500",
        },

        {
            productName : "iphone14",
            producPrice : "$1300",
        },

        {
            productName : "iphone 13",
            producPrice : "$1000"
        }
    ])
})

// GET SINGLE PRODUCT
router.get('/products/:id', (req, res)=>{
    res.status(200)
    res.json({
        productName : "iphone15",
        producPrice: "$1500",   
    })
})

// CREATE A PRODUCT
router.post("/products", (req, res) =>{
    res.status(200)
    res.json({
        message : "product added successfully"
    })
})

// TO UPDATE A RESOURCE
router.put("/products/:id", (req, res) =>{
    res.status(200)
    res.json({
        message : "post added successfully"
    })
})

// TO DELETE A PRODUCT
router.delete("/products/:id", (req, res) =>{
    res.status(200)
    res.json({
        message : "product deleted successfully"
    })
})




module.exports = router

