

class InputHTML{
    constructor(type,nombre){
        this.type = type,
        this.nombre= nombre
    }

    crearInput(){
        return `<input type="${this.type}" name="${this.nombre} id="${this.nombre}">`
    }
}

class HTMLfactory{
    crearElemento(tipo,nombre){
        switch (tipo) {
            case 'text':
                    return new InputHTML(tipo,nombre);
                break;
            case 'tel':
                return new InputHTML(tipo,nombre);
            case 'email':
                return new InputHTML(tipo,nombre);
            default:
                return;
        }
    }
}

const elemento = new HTMLfactory();
const input = elemento.crearElemento('text','nombre-cliente');

console.log(input); // el objeto
console.log(input.crearInput()); // el html

const elemento2 = new HTMLfactory();
const input2 = elemento2.crearElemento('tel','telefono-cliente');

console.log(input2); // el objeto
console.log(input2.crearInput()); // el html

const elemento3 = new HTMLfactory();
const input3 = elemento3.crearElemento('email','email-cliente')

console.log(input3);
console.log(input3.crearInput());