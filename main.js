
//simulador de biblioteca

let inicio = prompt(
  "Bienvenido a la biblioteca, presione enter para acceder o salir para finalizar"
);
//declaracion array vacio
const biblioteca = [];
//declaracion funcion constructora
function Libro(nombre, precio, stock = 0,id) {
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock;
    this.id = id = Libro.lenght+1
}
//ingreso 
while (inicio != "salir") {
  let accion = prompt(
    `actualmente la biblioteca cuenta con ${biblioteca.length} libros.\n Ingrese la opcion deseada:\n 1- Agregar un libro\n 2- Consultar lista de libros \n 3- Eliminar un libro `
  );
  if (accion == 1) {
    let nombreLibro = prompt("Ingrese el nombre del libro");
    let precioLibro = prompt("Ingrese el precio del libro");
    let cantidadLibro = prompt("Ingrese la cantidad de libros");
    const libro1 =new Libro(nombreLibro,precioLibro,cantidadLibro);
    biblioteca.push(libro1);
    alert(`Libro ${libro1.nombre} agregado`)

  }else if(accion==2){
    alert(`libros de la biblioteca ${biblioteca}`)
  }

  inicio = prompt(
    "si desea realizar otra accion en la biblioteca presione ENTER o escriba salir para finalizar"
  );
}

//ingresar libros a biblioteca
//mostrar libros
//buscar libros
//eliminar libros