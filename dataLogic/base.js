/**
 *  Arquitectura: Event-Driven Architecture (EDA)
 */
const dbj = require('../Lib/db.json')

async function welcomInit ( user ) {
  let msgWelcome = 'Bienvenido Candidato 01';
  let versionMsg = 'versión 0.0.1'

  const wMessage = { msgWelcome, versionMsg}

  return await wMessage
}
async function aVendors () {
  const allVendors = dbj.vendors
  return await allVendors;
}
async function vendorId (id) {
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
  return await oVendor;
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
  parameters['estatus'] = true;
  oVendor.push(parameters)
  
  return await parameters;
}
async function deleteVendor (id) {
  let dVendor = dbj.vendors
  dVendor.map(item=> {
    if(item.id == id){
      delete dVendor[(item.id)-1];
    }
  })
  return await dVendor
}
module.exports = {
  welcomInit,aVendors,vendorId,saveVendor,deleteVendor
}