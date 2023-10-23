export function getProductos() {
    console.log("Get Productos...")

return fetch('https://fakestoreapi.com/products')
.then((respuesta)=> {

    
    if (respuesta.status < 400) {
    console.log("termino el pedido bien")
    } else {
    console.log("termino el pedido mal")
    }

    const datos = respuesta.json()
    return datos


})

.then((respuesta)=>{
    console.log(respuesta)
    return respuesta
})


.catch((error)=>{
    console.log("termino el pedido mal")
    console.log(error)
})




}