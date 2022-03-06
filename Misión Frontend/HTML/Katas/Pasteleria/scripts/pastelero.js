fetch("../assets/data.json")
  .then(response => response.json())
  .then(json => {
    CargarSabores(json);
    CargarAdornos(json);
  });

CargarPedidos();

  function CargarSabores(json){
  console.log(json.sabores);
  const sabores = json.sabores;
  let template = "";
  for(let sabor in sabores){
    template += 
      `<tr>
        <td><label for="${sabor}">${sabor}</label></td>
        <td>${sabores[sabor].Cantidad}</td>
        <td>$${sabores[sabor].Precio}</td>
      </tr>`;
  }
  tablaSabores.innerHTML += template;
}

function CargarAdornos(json){
  console.log(json.adornos);
  const adornos = json.adornos;
  let template = "";
  for(let adorno in adornos){
    template += 
      `<tr>
        <td><label for="${adorno}">${adorno}</label></td>
        <td>${adornos[adorno].Cantidad}</td>
        <td>$${adornos[adorno].Precio}</td>
      </tr>`;
  }
  tablaAdornos.innerHTML += template;
}

function CargarPedidos(){
  fetch("../assets/pedidos.json")
  .then(response => response.json())
  .then(json => {
    let template = "";
    for(let pedido in json){

      const nombre = json[pedido].nombre;
      const desc = json[pedido].descripcion;
      const tel = json[pedido].telefono;
      const email = json[pedido].email;

      const sabores = json[pedido].sabores;
      let listaSabores = "";
      sabores.forEach(element => {
        listaSabores += "<li>" + element + "</li>";
      });

      const adornos = json[pedido].adornos;
      let listaAdornos = "";
      adornos.forEach(element => {
        listaAdornos += "<li>" + element + "</li>";
      });

      template +=
      `<tr onclick="MostrarInfoPedido('pedido-${pedido}')">
        <td class="fila-pedido">
          <div>${nombre}, <small>${desc}</small></div>
          <div id="pedido-${pedido}" class="info info-oculta">
            <div style="display: flex; justify-content: space-evenly;"><p><strong>Teléfono:</strong> ${tel}</p><p><strong>Email:</strong> ${email}</p></div>
            <div style="display: flex; justify-content: space-around;">
              <div>
                <p><strong>Sabores:</strong></p>
                <ul>${listaSabores}</ul>
              </div>
              <div>
                <p><strong>Adornos:</strong></p>
                <ul>${listaAdornos}</ul> 
              </div>
            </div>
          </div>
        </td>
      </tr>`;
      console.log(json[pedido].sabores[0]);
    }
    tablaPedidos.innerHTML += template;
  });
}

function MostrarInfoPedido(id){
  const element = document.getElementById(id);
  element.classList.toggle("info-oculta");
  // if(element.hasAttribute("hidden"))
  //   element.removeAttribute("hidden");
  // else
  //   element.setAttribute("hidden", "");
  
}

