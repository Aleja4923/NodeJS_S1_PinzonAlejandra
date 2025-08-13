/*
El cuarto principio de S.O.L.I.D es el Interface Segregation Principle (ISP), el cual sugiere que se deben crear interfaces que sean específicas
para un tipo de cliente o una finalidad concreta. En lugar de tener una única interfaz que obligue a las clases a implementar muchos métodos 
que no utilizarán, es preferible contar con muchas interfaces que definan un número reducido de métodos, cada una enfocada en una funcionalidad específica. 
De esta manera, las clases solo implementarán las interfaces que realmente necesiten y evitarán la implementación innecesaria de métodos. 
*/

class Impresora {
    imprimirDocumento() { }
    imprimirFoto() { }
    imprimirContrato() { }
}

class ImpresoraLaser extends Impresora {
    imprimirDocumento() {
        // lógica válida
    }



    imprimirFoto() {
        // lógica innecesaria
    }
    imprimirContrato() {
        // lógica innecesaria
    }
}
/*
En esta implementación, hay una interfaz Impresora con tres métodos: imprimirDocumento(), imprimirFoto() e imprimirContrato().
Las clases ImpresoraLaser e ImpresoraInyeccionTinta implementan esta interfaz, pero la clase ImpresoraLaser se ve obligada a
proporcionar implementaciones vacías para los métodos imprimirFoto() e imprimirContrato(), las cuales no son aplicables a una impresora láser. 
 */