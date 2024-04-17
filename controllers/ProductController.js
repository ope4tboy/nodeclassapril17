exports.getAllProducts = (req, res) =>{
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
            producPrice : "$1000",
        }
    ])
}

exports.getSingleProduct = (req, res)=>{
    res.status(200)
    res.json({
        productName : "iphone15",
        producPrice: "$1500",   
    })
}

exports.getCreatepost = (req, res) =>{
    res.status(200)
    res.json({
        message : "product added successfully"
    })
}