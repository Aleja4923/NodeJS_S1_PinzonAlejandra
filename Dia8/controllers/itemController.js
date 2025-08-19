class ItemController{
    constructor({model,view,prompt}){
        this.model=model;
        this.view=view;
        this.prompt = prompt
    }
    crear(){
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es obligatorio.");
            return;
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Creado con ID ${creado.id}.`);
    }


    listar() {
        const items = this.model.listar();
        this.view.mostrarLista(items);
    }

    verPorId() {
        const id = this.view.pedirId(this.prompt);
        const item = this.model.buscarPorId(id);
        this.view.mostrarItem(item);
    }

    actualizar() {
        const id = this.view.pedirId(this.prompt);
        const datos = this.view.pedirDatosActualizacion(this.prompt);
        const actualizado = this.model.actualizar(id, datos);
        if (actualizado) {
            this.view.mostrarItem(actualizado);
        } else {
            this.view.mostrarMensaje("Item no encontrado");
        }
    }

    eliminar() {
        const id = this.view.pedirId(this.prompt);
        const ok = this.model.eliminar(id);
        this.view.mostrarMensaje(ok ? "Item eliminado" : "Item no encontrado");
    }
}
module.exports={ItemController};