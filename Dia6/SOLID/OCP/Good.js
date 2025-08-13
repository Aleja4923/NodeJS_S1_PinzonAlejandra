/*
El principio Open/Closed (OCP) establece que las clases deben estar abiertas para su extensión,
pero cerradas para su modificación. Esto significa que se deben poder agregar nuevas funcionalidades
a una clase sin modificar su código existente. Para lograr esto, se puede utilizar la herencia o la 
implementación de nuevas interfaces.
*/

/*
Para aplicar el principio Open/Closed, se puede utilizar la herencia y
crear una clase abstracta Forma que contenga un método abstracto
calcularArea(). Luego, se crean clases concretas que extiendan Forma
y proporcionen la implementación específica para cada forma geométrica
de la siguiente manera:
*/
class Forma {
    calcularArea() {
        throw new Error("Este método debe ser implementado");
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

class Cuadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}