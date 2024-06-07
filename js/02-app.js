class Persona{
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    getNombre(){
        return this.nombre;
    }
    getSalario(){
        return this.salario;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setSalario(salario){
        this.salario = salario;
    }
    static saludar(){
        console.log("Hola");
    }
    
}


class Empleado extends Persona{
    constructor(nombre,salario,empresa){
        super(nombre,salario),
        this.empresa = empresa;
    }
}

const persona = new Persona('nojoda',500);
console.log(persona.getNombre());
const empleado = new Empleado('camilo',5000,'upc')
console.log(empleado.getNombre());
console.log(persona);