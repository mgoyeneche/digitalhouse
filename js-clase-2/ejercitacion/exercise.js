const { products } = require("../ejercitacion/utils/products");

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
let addingIdToProduct = () => {
  products.forEach((product, i) => (product.id = i + 1));
  return products;
};

/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
let returningTheNames = () => products.map((product) => product.name);

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
const searchID = (id) => {
  let productFound = products.find((product) => product.id === id);
  return productFound ? productFound : "no hubo coincidencias";
};

/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
const matchingColors = (color) => {
  let productFound = products.filter((product) =>
    product.colors.includes(color)
  );
  return productFound ? productFound : "no hubo coincidencias";
};

/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
const colorsLength = () => {
  let productFound = products.filter((product) => product.colors.length === 0);
  return productFound ? productFound : "no hubo coincidencias";
};
console.log(colorsLength());
/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
const addProduct = (newProduct) => {
  let { name, price, quantity, colors } = newProduct;
  if (name && price && quantity && colors) products.push(newProduct);
  return products;
};

/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
const deleteProduct = (products) =>
  products.filter((product) => product.quantity !== 0);

/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
const existingProducts = (products) => {
  let initialValue = 0; //por default es cero para reduce
  return products
    .map((product) => product.quantity)
    .reduce((prev, curr) => prev + curr, initialValue);
};

/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice = (products, price) =>
  products.filter((product) => product.price > price);

module.exports = {
  addingIdToProduct,
  existingProducts,
  deleteProduct,
  addProduct,
  colorsLength,
  matchingColors,
  searchID,
  returningTheNames,
  showHigherPrice,
};
