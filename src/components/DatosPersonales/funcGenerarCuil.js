export default function generateCuil(document_number, gender, swal){
    
    if((document_number === undefined || document_number === "" || document_number === null) && (gender === undefined || gender === "" || gender === null)){
        swal({
            title: "Error",
            text: "Debe ingresar el Documento y el Sexo para generar el CUIL",
            icon: "error",
          });
        return;
    }

    if(document_number === undefined || document_number === "" || document_number === null){
        swal({
            title: "Error",
            text: "Debe ingresar el Documento para Generar el CUIL",
            icon: "error",
          });
        return;
    }

    if(gender === undefined || gender === "" || gender === null){
        swal({
            title: "Error",
            text: "Debe seleccionar el sexo para Generar el CUIL",
            icon: "error",
          });
        return;
    }

    const HOMBRE = ["HOMBRE", "M", "MALE"],
          MUJER = ["MUJER", "F", "FEMALE"],
          SOCIEDAD = ["SOCIEDAD", "S", "SOCIETY"];
    let AB, C;

    if (document_number.length !== 8 || isNaN(document_number)) {
        if (document_number.length == 7 && !isNaN(document_number)) {
            console.log("Ha entrado aqui")
            document_number = `0${document_number}`;
        } else {
        // Muestro un error en caso de no serlo.
            throw swal({
                title: "Error",
                text: `El número de Documento ${document_number} es inválido`,
                icon: "error",
              });
        }
    }

    gender = gender.toUpperCase();

    if (HOMBRE.indexOf(gender) >= 0) {
        AB = "20";
    } else if (MUJER.indexOf(gender) >= 0) {
        AB = "27";
    } else {
        AB = "30";
    }

    const multiplicadores = [3, 2, 7, 6, 5, 4, 3, 2];

    let calculo = parseInt(AB.charAt(0)) * 5 + parseInt(AB.charAt(1)) * 4;

    for (let i = 0; i < 8; i++) {
        calculo += parseInt(document_number.charAt(i)) * multiplicadores[i];
    }
    let resto = parseInt(calculo) % 11;

    if (SOCIEDAD.indexOf(gender) < 0 && resto == 1) {
        if (HOMBRE.indexOf(gender) >= 0) {
        C = "9";
        } else {
        C = "4";
        }
        AB = "23";
    } else if (resto === 0) {
        C = "0";
    } else {
        C = 11 - resto;
    }
    const example = `${AB}-${document_number}-${C.toString()}`;
    // Show example
    console.log(example);

    // Generate cuit
    const cuil_cuit = `${AB}${document_number}${C}`;
    return example;
}
