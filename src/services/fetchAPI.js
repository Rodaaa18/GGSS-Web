import axios from "axios";

export function getEmpleados(empleados){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(empleados), 0);
    });
}

export function getEmpleado(empleados, idEmpleado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(empleados.filter(d=> d.iDempleado === idEmpleado)), 0);
    });
}

export function getEmployeByLegajo(empleados, legajo){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(empleados.filter(e=> e.legajo.includes(legajo))),0);
}); 
}

export function getEmployeByName(empleados, name){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(empleados.filter(e=> e.apellido.includes(name) || e.nombres.includes(name))),0);
}); 
}

export function getEmployeById(empleados, id){
    return new Promise((resolve)=>{
      setTimeout(()=> resolve(empleados.filter(e=> e.iDempleado === id)),0);
  }); 
  }
export function getData(url, setStates){
    axios.get(url)
    .then(res=> setStates(res.data.result));
}

export function getFamiliarByIdEmpleado(familiares,idEmpleado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(familiares.filter(fam=> fam.iDempleado === idEmpleado)),0);
    })
}
export function getFamiliarByIdFamiliar(familiares,idFamiliar){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(familiares.find(f=> f.iDfamiliares === idFamiliar)),0);
    })
}
export function getEstadosCivilesModal(listEstados, nameEstado){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(listEstados.find(f=> f.masculino === nameEstado || f.femenino === nameEstado)))
    })
}