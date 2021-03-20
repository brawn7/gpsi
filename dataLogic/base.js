// const dbjson = require('')
const dbj = require('../Lib/db.json')

function welcomInit ( user ) {
  let userg = user.charAt(user.length - 1);
  let candidat = 'candidato '
  if(userg == 'a'){
    candidat = 'candidata ';
  }
  let msgWelcome = ' “Bienvenido '.concat(candidat,user);
  return msgWelcome
}
function aVendors () {
  const allVendors = dbj.vendors
  return allVendors;
}
function vendorId (id) {
  let oVendor = dbj.vendors
  let vendors = oVendor.length
  if(id>vendors){
    throw 3;
  }
  oVendor.map(item=> {
    if(item.id == id){
      oVendor = item
    }
  })
  return oVendor;
}
async function saveVendor (parameters) {
  let nombre = parameters.nombre;

  let oVendor = dbj.vendors
  oVendor.map(item=> {
    if(item.nombre == nombre){
      throw 2;
    }
  })
  let keys = ((Object.keys(oVendor).length) + 1)
  parameters['id'] = keys;
  oVendor.push(parameters)
  
  return parameters;
}
async function deleteVendor (id) {
  let dVendor = dbj.vendors
  dVendor.map(item=> {
    if(item.id == id){
      delete dVendor[(item.id)-1];
    }
  })
  return dVendor
}
module.exports = {
  welcomInit,aVendors,vendorId,saveVendor,deleteVendor
}