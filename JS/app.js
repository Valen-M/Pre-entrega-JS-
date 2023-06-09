
let productos = [
    {
      nombre: "Remera",
      precio: 250,
      categoria: "Ropa"
    },
    {
      nombre: "Pantalón",
      precio: 400,
      categoria: "Ropa"
    },
    {
      nombre: "Zapatos",
      precio: 800,
      categoria: "Calzado"
    }
  ];
  
 
  function esRemera(producto) {
    return producto.categoria === "Ropa" && producto.nombre === "Remera";
  }
  
 
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    
    if (esRemera(producto)) {
      console.log("Se encontró una remera:", producto.nombre);
    }else{
        console.log("No es una remera:",  producto.nombre)
    }
  }