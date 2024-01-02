const Products = require("../models/product")

const getAllProducts = async (req, res) => {
    const products = await Products.find({});
    res.status(200).json({products});
};

const getAllProductsTesting = async (req, res) => {
    const products = await Products.find({name:"phone"});
    res.status(200).json({products});
};


module.exports = { getAllProducts, getAllProductsTesting };