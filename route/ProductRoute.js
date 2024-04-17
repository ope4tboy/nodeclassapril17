const express = require("express")

const router = express.Router()
const {getAllProducts, getSingleProduct, getCreatepost} = require('../controllers/ProductController')


router.get("/products", getAllProducts)

// GET SINGLE PRODUCT
router.get('/products/:id', getSingleProduct)

// CREATE A PRODUCT
router.post("/products", getCreatepost)

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

