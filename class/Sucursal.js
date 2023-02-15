export class Sucursal{
    constructor(){

    }
    obtenerSucursal(){
       return fetch("https://bsite.net/metalflap/td-sucursal")
        .then(response => response.json())
        .then(data => data)
    }
}
