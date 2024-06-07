// singleton 
 // singleton 
let instancia = null;

class Persona {
    constructor(nombre, email) {
       if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
       }else{

           return instancia; // Esto garantiza que siempre se devuelva la misma instancia
       }
    }
}

const p1 = new Persona('Camilo', 'camillads@masdm.com');
const p2 = new Persona('Otro Nombre', 'otroemail@example.com');

console.log(p1);
console.log(p2);
console.log(p1 === p2); // Esto debería devolver true, ya que p1 y p2 son la misma instancia
