// patron de diseño mediador, se comunica con varios objetos para objetivos especificos

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo,precio) => {
        console.log(` tenemos el articulo: ${articulo} con un precio de $${precio}`);
    },
    vendido:(comprador) =>{
        console.log(`vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre,
    this.sala = null
}

Comprador.prototype = {
    oferta : (cantidad, comprador) => {
        console.log(` ${comprador.nombre} oferta ${cantidad}`);
    }
    
}

function Subasta(){
    
}

const camilo = new Comprador('camilo');
const juan = new Comprador('juan');
const subasta = new Subasta();
const vendedor = new Vendedor('vendedor de autos');

vendedor.oferta('A3',30000);

juan.oferta(31000,'juan');
camilo.oferta(34000,'camilo');
juan.oferta(34400,'juan');

vendedor.vendido(`juan`)