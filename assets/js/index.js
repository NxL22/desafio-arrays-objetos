const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    habitaciones: 2,
    metros: 170
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    habitaciones: 2,
    metros: 130
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    habitaciones: 1,
    metros: 80
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    habitaciones: 1,
    metros: 6
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    habitaciones: 3,
    metros: 200
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    habitaciones: 5,
    metros: 500
  }
];


let botonBuscar = document.getElementById("btnBuscar")
let inputCantidadCuartos = document.querySelector("#cantidadCuartos")
let inputMetrosMininimos = document.querySelector("#metrosMin")
let inputMetrosMaximos = document.querySelector("#metrosMax")

botonBuscar.addEventListener("click", function () {
  let cantidadCuartos = inputCantidadCuartos.value
  let metrosMininimos = inputMetrosMininimos.value
  let metrosMaximos = inputMetrosMaximos.value
  const inputs = [cantidadCuartos, metrosMininimos, metrosMaximos]

  if (!validarInputs(inputs)) {
    alert("Faltan campos por llenar")
    return false
  }

  let propiedadesFiltradas = filtrarPropiedades (propiedadesJSON, inputs)
//crear ciclo for de todas las propiedades filtradas//

let template = `
<div class="propiedad">
    <div class="img" style="background-image: url('${propiedadesJSON[0].src}')"></div>
    <section>
        <h5>${propiedadesJSON[0].nombre}Mansión</h5>
        <div class="d-flex justify-content-between">
            <p>${propiedadesJSON[0].habitaciones}Cuartos: 2</p>
            <p>${propiedadesJSON[0].metros}Metros: 170</p>
        </div>
        <p class="my-3">Mansión gigante</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>
`
`
<div class="propiedad">
    <div class="img" style="background-image: url('${propiedadesJSON[1].src}')"></div>
    <section>
        <h5>${propiedadesJSON[1].nombre}Mansión</h5>
        <div class="d-flex justify-content-between">
            <p>${propiedadesJSON[1].habitaciones}Cuartos: 2</p>
            <p>${propiedadesJSON[1].metros}Metros: 170</p>
        </div>
        <p class="my-3">Mansión gigante</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>
`


})




const validarInputs = inputs => {

  for (let input of inputs) {
    if (input === "") {
      return false
    }
  }

  return true

}

const filtrarPropiedades = (propiedades, inputs) => {
  let propiedadesFiltradas = [];
  let indexPropiedadFiltrada = 0;

  for(let i = 0; i < propiedades.length;i++){
    if(
      propiedades[i].cuartos == inputs[0] &&
      propiedades[i].metros >= inputs[1] &&
      propiedades[i].metros <= inputs[2]
    ){
      propiedadesFiltradas[indexPropiedadFiltrada] = propiedades[i]
      indexPropiedadFiltrada++
    }
  }

  return propiedadesFiltradas
}