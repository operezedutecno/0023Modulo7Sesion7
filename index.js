const Prendas = require("./clases/Prendas.js")
const { v4: uuid } = require("uuid")

const listado = []


const idPrenda1 = uuid()
const prenda1 = new Prendas(idPrenda1, "JDAZUL", "Jean Azul de Dama", "Azul", 20_000)


const idPrenda2 = uuid()
const prenda2 = new Prendas(idPrenda2, "JDNEGRO", "Jean Negro de Dama", "Negro",22_000)


// listado[0] = prenda1
// listado[1] = prenda2


listado.push(prenda1, prenda2)
// console.log(listado);


listado.forEach(prenda => {
    // console.log(prenda.mostrarDescripcion());
    prenda.precio = prenda.precio * 1.1
    console.log(`Nombre: ${prenda.nombre} | Precio: ${prenda.precio} | Impuestos: ${prenda.calcularImpuesto()} | Total: ${prenda.totalConImpuesto()}`);
})

console.log("------------------------------------");
console.table(listado);