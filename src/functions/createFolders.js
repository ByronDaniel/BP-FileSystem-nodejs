const fs = require('fs');
const anioActual = new Date().getFullYear();
const mesesDelAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

for(let anio = 2017; anio <= anioActual; anio++){
    fs.mkdir(`src/años/${anio}`, {recursive:true}, (err) => {
        if(err){
            throw err;
        }else{
            for(let mes = 0; mes < mesesDelAnio.length; mes++){
                fs.mkdir(`src/años/${anio}/${mesesDelAnio[mes]}`, {recursive:true}, (err) => {
                    if(err){
                        throw err;
                    }else{
                        for(let dia = 1; dia <=new Date(anio,mes+1,0).getDate(); dia++){
                            let diaActual = new Date(anio,mes,dia).getDay();
                            let fechaString = `${dias[diaActual]}, ${dia} de ${mesesDelAnio[mes]} de ${anio}`;
                            fs.writeFile(`src/años/${anio}/${mesesDelAnio[mes]}/${dia}.txt`, fechaString,{recursive:true}, (err)=>{
                                if(err){
                                    throw err;
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}
