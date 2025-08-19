// Menu sencillo buscando centralizar toda interacción por consola,
// lo cual incluye menú, prompt y formatos de salida

const ItemView = {
    mostrarMenu() {
        console.log("Crud de items")
        console.log("1. Crear")
        console.log("2. Listar")
        console.log("3. Ver por ID")
        console.log("4. Actualizar")
        console.log("5. Eliminar")
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

    pedirDatosActualizacion(prompt) {
        const nombre = prompt("Nuevo nombre: ").trim();
        const descripcion = prompt("Nueva descripcion: ").trim();
        return { nombre, descripcion };
    },

    mostrarLista(items) {
        if (items.length === 0) {
            console.log("No hay items");
            return;
        }
        items.forEach(i => {
            console.log(`${i.id}. ${i.nombre} - ${i.descripcion}`);
        });
    },

    mostrarItem(item) {
        if (!item) {
            console.log("Item no encontrado");
            return;
        }
        console.log(`ID: ${item.id}`);
        console.log(`Nombre: ${item.nombre}`);
        console.log(`Descripcion: ${item.descripcion}`);
    },
    
    mostrarMensaje(msg){
        console.log(`\n${msg}`);
    }
}

module.exports=[ItemView]