/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
const calculatePrice = (product, price) => {
  let shippingPrice;
  let TotalPrice;

  if (price > 0 && price < 2000) {
    shippingPrice = 300;
  } else if (price > 2000 && price <= 4000) {
    shippingPrice = 500;
  } else if (price > 4000) {
    shippingPrice = 700;
  } else {
    shippingPrice = 0;
  }

  TotalPrice = price + shippingPrice;

  return shippingPrice !== 0
    ? `el costo de envío de una ${product} es de ${shippingPrice} pesos y el precio total seria de ${TotalPrice} pesos 
       `
    : "Error";
};

module.exports = {
  calculatePrice,
};
