
// requireds
// const fs = require("fs");
// const fs = require("express"); => son archivos que alguien mas creo
// const fs = require("../fs"); => son archivos que uno crea

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
          .then(archivo => console.log(`Archivo Creado: ${archivo.green}`))
          .catch(e => console.log(e));
    break;
    default:
    console.log('Comando no Reconocido');
}



// let data = '';

// for( let i = 1; i<=10; i++){
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log("El archivo tabla-${base}.txt ha sido creado");
// });






// console.log(argv.limite);



//version a pie
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base).then( archivo => console.log(`Archivo Creado: ${ archivo }`))
//             .catch(e => console.log(e));
