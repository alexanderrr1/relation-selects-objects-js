class Producto {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let selectContainer = document.querySelector("#selectContainer");

let producto1 = new Producto(1, "Manzana", 200);
let producto2 = new Producto(2, "Naranja", 300);

let arrayProductos = [];
arrayProductos.push(producto1);
arrayProductos.push(producto2);

let select = document.createElement("select");
let precio = document.querySelector("#precio");

/* Genero el select con el array de mis productos - INICIO */

let optionDefault = document.createElement("option");
let optionTextoDefault = document.createTextNode("Seleccione su producto...");
optionDefault.appendChild(optionTextoDefault);
select.appendChild(optionDefault);


arrayProductos.forEach(producto => {
    let option = document.createElement("option");
    option.setAttribute("value", producto.id);
    let optionTexto = document.createTextNode(producto.nombre);
    option.appendChild(optionTexto);
    select.appendChild(option);
})
selectContainer.appendChild(select);

/* Genero el select con el array de mis productos - FIN */

select.addEventListener("change", (e) => {
    let idElementoSeleccionado = e.target.value;
    let elementoSeleccionado = arrayProductos.find(producto => producto.id == idElementoSeleccionado);
    if(elementoSeleccionado == undefined){
        precio.value = "";
    } else {
        precio.value = elementoSeleccionado.precio;
    }
})