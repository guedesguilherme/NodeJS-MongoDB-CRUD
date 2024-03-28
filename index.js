//imports
const express = require('express')
const app = express()
const Product = require('./models/product.models')
const productRoute = require('./routes/product.route.js')
const mongoose = require('mongoose');

//intermediario de informações
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

//rotas
app.use("/api/products", productRoute)

//conexexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/CRUD-NodeJS')
    .then(() => console.log('MongoDB Connected!')).catch(() => {
        console.log("Failed to Connect MongoDB")
    })

//confirmação de server rodando
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

/*
//rota principal
app.get('/', (req, res) => {
    res.send("Hello /")
})

//mostrar todos os produtos
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
})

//mostrar produto selecionado 
app.get('/api/products/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//criar novo produto
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//atualizar dados de um produto
app.put('/api/products/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({
                message: "product not found"
            })
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//excluir um produto
app.delete('/api/products/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params

        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            res.status(404).json({
                message: "Product doenst exist"
            })
        }

        res.status(200).json({
            message: "Product deleted "
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
*/