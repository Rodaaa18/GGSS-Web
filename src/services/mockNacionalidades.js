const nacionalidades = [
    {
        "iDnacionalidad" : 1,
        "masculino" : "Argentino",
        "femenino" : "Argentina",
        "iDempleado" : 1
    },
    {
        "iDnacionalidad" : 2,
        "masculino" : "Uruguayo",
        "femenino" : "Uruguaya",
        "iDempleado" : 2
    },
    {
        "iDnacionalidad" : 3,
        "masculino" : "Brasilero",
        "femenino" : "Brasilera",
        "iDempleado" : 3
    }
]
export function getNacionalidades(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(nacionalidades), 2000);
    });
}
export function getNacionalidadEmpleado(idEmpleado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(nacionalidades.filter(d=> d.iDempleado === idEmpleado)),0);
    });
}
