let products = require("../utils/mock");
const express = require("express");
const { restart } = require("nodemon");

const router = express.Router();

/*************************************************************** 
	PUNTO 1
	- Retornar todos los productos del array. “/api/products”,
	Utiliza la variable products que se encuentra en este archivo
 ***************************************************************/
// Tu código acá

router.get("/products", (req, res) => {
  res.json(products);
});

/****************************************************************
	PUNTO 2
	- Obtener un producto específico mediante su ID “/api/products/:id”
*******************************************************************/
// Tu código acá
router.get("/products/:id", (req, res) => {
  let { id } = req.params;
  const product = products.find((prod) => prod.id === parseInt(id));
  res.send([product]);
});

/**********************************************************************
	PUNTO 3
	- Agregar un nuevo producto “/api/products”
 ***********************************************************************/
// Tu código acá
router.post("/products/add", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send("creado");
});

/************************************************************************
	PUNTO 4
	Cambiar alguna propiedad de un producto en particular 
	( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
 **************************************************************************/
// Tu código acá
router.put("/products/:id/:name", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const productUpdated = products.map((product) => {
    if (product.id === parseInt(id)) return { ...product, name };
    return product;
  });

  const productFound = productUpdated.find((prod) => prod.id === parseInt(id));
  console.log(productFound);

  res.json(productFound);
});

/**************************************************************************
	PUNTO 5
	Eliminar un producto mediante su ID “/api/products/:id”,
 ***************************************************************************/
// Tu código acá
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productDelete = products.filter((prod) => prod.id !== id);
  res.json([productDelete]);
});

module.exports = { router, products };
