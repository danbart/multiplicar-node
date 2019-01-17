
// requireds
const fs = require("fs");
const colors = require("colors");

// module.exports.crearArchivo = ( base ) => { una forma de poder exportar funciones
let crearArchivo = (base, limite = 10 ) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${ limite }.txt`);
        });
    })
}

let listarTabla = (base, limite = 10) => {

    console.log("===========================".green);
    console.log(`  tabla de ${base}`.green);
    console.log("===========================".green);

    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
    }
}

//otra forma de exportar funciones en esta se pueden exportar en un arreglo todas las funciones
module.exports = {
    crearArchivo,
    listarTabla
}