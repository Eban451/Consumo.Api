export class Productos{
    constructor(){

    }
    obtenerProductos(){
       return fetch("https://bsite.net/metalflap/td-producto")
        .then(response => response.json())
        .then(data => data)
    }

    obtenerChelas(){
        return fetch("https://bsite.net/metalflap/td-producto")
         .then(response => response.json())
         .then(data => {
            const listaChela = []
            data.forEach(chela =>{
                if (chela.idSucursal == 3){
                    listaChela.push(chela)

                }
            })
            return listaChela
         })
     }
}


