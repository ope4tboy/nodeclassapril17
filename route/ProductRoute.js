const express = require("express")

const router = express.Router()
const {getAllProducts, getSingleProduct, getCreatepost, update, deleteProduct} = require('../controllers/ProductController')


// router.get("/products", getAllProducts)

// // GET SINGLE PRODUCT
// router.get('/products/:id', getSingleProduct)

// // CREATE A PRODUCT
// router.post("/products", getCreatepost)

// // TO UPDATE A RESOURCE
// router.put("/products/:id", update)

// // TO DELETE A PRODUCT
// router.delete("/products/:id", delete)


router.route("/products").get(getAllProducts).post(getCreatepost)
router.route("./products/:id").get(getSingleProduct).put(update).delete(deleteProduct)



module.exports = router

