/*
El cuarto principio de S.O.L.I.D es el Interface Segregation Principle (ISP), el cual sugiere que se deben crear interfaces que sean específicas
para un tipo de cliente o una finalidad concreta. En lugar de tener una única interfaz que obligue a las clases a implementar muchos métodos 
que no utilizarán, es preferible contar con muchas interfaces que definan un número reducido de métodos, cada una enfocada en una funcionalidad específica. 
De esta manera, las clases solo implementarán las interfaces que realmente necesiten y evitarán la implementación innecesaria de métodos. 
*/

class ImpresoraDocumento {
    imprimirDocumento() { }
}

class ImpresoraFoto {
    imprimirFoto() { }
}

class ImpresoraLaser extends ImpresoraDocumento {
    imprimirDocumento() {
        console.log("Imprimiendo documento en láser");
    }
}

class ImpresoraTinta extends ImpresoraDocumento {
    imprimirDocumento() {
        console.log("Documento impreso a tinta");
    }
}

class ImpresoraMultifuncional extends ImpresoraFoto {
    imprimirFoto() {
        console.log("Foto impresa");
    }
}
/*
En esta nueva implementación se ha segregado la "interfaz" Impresora en dos
interfaces más específicas: ImpresoraDocumento e ImpresoraFoto. Ahora cada
clase implementa solo las interfaces que necesitan, evitando así la implementación
innecesaria de métodos. La clase ImpresoraLaser solo implementa ImpresoraDocumento,
mientras que ImpresoraInyeccionTinta implementa ambas interfaces ImpresoraDocumento
e ImpresoraFoto, cumpliendo con el principio de segregación de interfaz.
 */