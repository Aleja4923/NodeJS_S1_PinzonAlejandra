// Menu sencillo buscando centralizar toda interacción por consola,
// lo cual incluye menú, prompt y formatos de salida

const ItemView = {
    mostrarMenu() {
        console.log("Crud de items")
        console.log("1. Crear")
        console.log("2. LIistar")
        console.log("3. Ver por ID")
        console.log("4. Actualizar")
        console.log("5. ELiminar")
        console.log("0. Salir")
    },
    pedirOpcion(prompt) {
        const op=prompt ("ELige opción");
        return op.trim();
    },
    
    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descrpcion = prompt ("Descripcion: ").trim();
        return {nombre,descripcion}
    },
    
}