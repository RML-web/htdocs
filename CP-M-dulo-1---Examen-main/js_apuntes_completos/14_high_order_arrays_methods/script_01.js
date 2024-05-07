//foreach
//map
//filter
//sort
//reduce
//some y every
const empresas = [

   { name:"Empresa Uno", category: "Finanzas", start: 1981, end:2004 },
   { name:"Empresa Dos", category: "Minorista", start: 1992, end:2008 },
   { name:"Empresa Tres", category: "Automoción", start: 1999, end:2007 },
   { name:"Empresa Cuatro", category: "Minorista", start: 1989, end:2010 },
   { name:"Empresa Cinco", category: "Tecnología", start: 2009, end:2014 },
   { name:"Empresa Seis", category: "Finanzas", start: 1987, end:2010 },
   { name:"Empresa Siete", category: "Automoción", start: 1986, end:1996 },
   { name:"Empresa Ocho", category: "Tecnología", start: 2001, end:2016 },
   { name:"Empresa Nueve", category: "Minorista", start: 1981, end:1989 }

];

empresas.miForEach = function(callback) {
      for (let i = 0; i < this.length; i++){
        const element = this[i];
        callback(element);
         }

};
// let idVal = 0;
// empresas.miForEach((empresa) =>{
//     empresa.id = idVal;
//      idVal++;
// });
//Custom map
empresas.miMap = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const newElement = callback(element);
        array.push(newElement);
    }
    return array;
}

const empresasTel= empresas.miMap((empresa) => {
    const empresaConTel = {
    name: empresa.name,
    category: empresa.category,
    telf: Math.floor(Math.random() * 10),
};
return empresaConTel;
});

console.log(empresasTel);
console.log(empresas);

//Custom filter
empresas.miFilter = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (callback (element)){
        array.push(element);
        }
    }
    return array;
};

const empresasFinanzas = empresas.miFilter((empresa) =>{
    return empresa.category ==="Finanzas";
});
console.log(empresasFinanzas);
console.log(empresasTel);
console.log(empresas);


