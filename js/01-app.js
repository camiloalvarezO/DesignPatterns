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

const newpersona = new Persona("William",1000);
console.log(newpersona.getNombre());
console.log(newpersona.getSalario());
newpersona.setNombre("John");
newpersona.setSalario(2000);
console.log(newpersona.getNombre());
console.log(newpersona.getSalario());

//Herencia
 class Empleado extends Persona {
    constructor(nombre, salario, cargo) {
        super(nombre, salario);
        this.cargo = cargo;
    }
    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
}
const empleado = new Empleado("Sarah", 1500, "Manager");
console.log(empleado.getNombre());
console.log(empleado.getSalario());
console.log(empleado.getCargo());
empleado.setNombre("Emily");
empleado.setSalario(2500);
empleado.setCargo("Supervisor");
console.log(empleado.getNombre());
console.log(empleado.getSalario());
console.log(empleado.getCargo());

