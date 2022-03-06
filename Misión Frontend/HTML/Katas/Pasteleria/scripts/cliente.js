fetch("../assets/data.json")
  .then(response => response.json())
  .then(json => {
    CargarSabores(json);
    CargarAdornos(json);
  });

function CargarSabores(json){
  console.log(json.sabores);
  const sabores = json.sabores;
  let template = "";
  for(let sabor in sabores){
    template += 
      `<tr>
        <td><input type="checkbox" id="${sabor}" name="sabor" value="${sabor}"></td>
        <td><label for="${sabor}">${sabor}</label></td>
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
        <td><input type="checkbox" id="${adorno}" name="adorno" value="${adorno}"></td>
        <td><label for="${adorno}">${adorno}</label></td>
        <td>$${adornos[adorno].Precio}</td>
      </tr>`;
  }
  tablaAdornos.innerHTML += template;
}

function EnviarPedido(form){
  sabores = [];
  adornos = [];
  form["sabor"].forEach(sabor => {
    if(sabor.checked){
      sabores.push(sabor.value);
    }
  });

  form["adorno"].forEach(adorno => {
    if(adorno.checked){
      adornos.push(adorno.value);
    }
  });

  const nombre = form["nombre"].value;
  const tel = form["telefono"].value;
  const email = form["email"].value;
  const desc = form["descripcion"].value;

  pedido = {
    sabores: sabores,
    adornos: adornos,
    nombre: nombre,
    telefono: tel,
    email: email,
    descripcion: desc
  };

  //console.log(pedido);
  //console.log(JSON.stringify(pedido));
  window.location.href = "../Pages/PedidoRealizado.html";

  return false;
}