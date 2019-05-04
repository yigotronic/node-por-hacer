const opt_crear = {
    descripcion: { demand: true, alias: 'd' }
}

const opt_actualizar = {
    descripcion: { demand: true, alias: 'd', desc: 'Descripción de la tarea por hacer' },
    completado: { alias: 'c', default: true, desc: 'Marcar como completado' }
}

const opt_borrar = {
    descripcion: { demand: true, alias: 'd', desc: 'Borra una tarea segu descripción' }
}

const argv = require('yargs')
    //.command('listar', 'Imprime en consola la tabla de multiplicar', opt_crear)
    .command('crear', 'Crea un elemento por hacer', opt_crear)
    .command('actualizar', 'Crea archivo con la tabla de multiplicar', opt_actualizar)
    .command('borrar', 'Borrar una tarea', opt_borrar)
    .help()
    .argv;


module.exports = {
    argv
}