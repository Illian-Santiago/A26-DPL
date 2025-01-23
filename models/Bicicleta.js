// Constructor
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

// Almacen de datos
Bicicleta.allBicis = [];

// Funcion para agregar una bicicleta
Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

// Funcion para buscar una bicicleta por su id y borrarla
Bicicleta.removeById = function (id) {
    for (let i = 0; i < this.allBicis.length; i++) {
        if (this.allBicis[i].id == id) {
            this.allBicis.splice(i, 1);
            break;
        }
    }
}

// Funcion para actualizar una bicicleta por su id
Bicicleta.updateById = function (id, newColor, newModelo, newUbicacion) {
    for (let i = 0; i < this.allBicis.length; i++) {
        if (this.allBicis[i].id == id) {
            this.allBicis[i].color = newColor;
            this.allBicis[i].modelo = newModelo;
            this.allBicis[i].ubicacion = newUbicacion;
            break;
        }
    }
}

// Hardcodear dos bicis
let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

// Exportar modulo
module.exports = Bicicleta;