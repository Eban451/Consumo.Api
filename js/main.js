import {Categoria} from "../class/Categoria.js";
import {Sucursal} from "../class/Sucursal.js";
import {Productos} from "../class/Productos.js";

// CATEGORIA

const categorias = new Categoria();
const select = document.querySelector("#categorias");

categorias.obtenerCategorias()
.then(categorias =>{
    categorias.forEach(element =>{
        //console.log(element)
        const option = document.createElement("option");
        option.value = element.id
        option.textContent = element.nombre;
        select.appendChild(option)
    })
})

// SUCURSAL

const sucursales = new Sucursal();
const select1 = document.querySelector("#sucursales");

sucursales.obtenerSucursal()
.then(sucursales =>{
    sucursales.forEach(element =>{
        //console.log(element)
        const option1 = document.createElement("option");
        option1.value = element.id
        option1.textContent = element.nombre;
        select1.appendChild(option1)
    })
})

// Productos

// const productos = new Productos();
// const select2 = document.querySelector("#productos");

// productos.obtenerProductos()
// .then(productos =>{
//     productos.forEach(element =>{
//         //console.log(element)
//         const option2 = document.createElement("option");
//         option2.value = element.id
//         option2.textContent = element.nombre;
//         select2.appendChild(option2)
//     })
// })


// Productos

const chelas = new Productos();
const select2 = document.querySelector("#productos");

chelas.obtenerChelas()
.then(chelas =>{
    chelas.forEach(element =>{
        //console.log(element)
        const option2 = document.createElement("option");
        option2.value = element.id
        option2.textContent = element.nombre;
        select2.appendChild(option2)
    })
})
