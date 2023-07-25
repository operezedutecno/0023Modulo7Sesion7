//Prendas de Vestir
/*
id
codigo
nombre,
color,
precio
*/

module.exports = class Prendas {
  constructor(id, codigo, nombre, color, precio) {
    this._id = id;
    this._codigo = codigo;
    this._nombre = nombre;
    this._color = color;
    this._precio = precio;
  }

  /* Id */
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  /* Código */
  get codigo() {
    return this._codigo;
  }
  set codigo(codigo) {
    this._codigo = codigo;
  }

  /* nombre */
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  /* color*/
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }

  /* precio*/
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  /****************** Métodos ********************/
  mostrarDescripcion() {
    return `Código: ${this._codigo} | Nombre: ${this._nombre} | Precio: ${
      this._precio
    } | Impuesto: ${this.calcularImpuesto()} | Total: ${this.totalConImpuesto()}`;
  }

  calcularImpuesto() {
    return this._precio * 0.19;
  }

  totalConImpuesto() {
    return this._precio + this.calcularImpuesto();
  }
};
