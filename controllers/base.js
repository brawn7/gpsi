/**
 *  Arquitectura: Event-Driven Architecture (EDA)
 */
const data = require('../dataLogic/base')
const {exception} = require('../response/exception');
const _ = require('lodash');
const validator = require('validator').default;

async function welcomeInit (req,res) {
  try {
    const result = await data.welcomInit();
    res.status(200).json(result);
  } catch(error){
    const {code,body} = exception(error)
    res.status(code).json(body)
  }
}
async function allVendors (req,res) {
  try {
    const result = await data.aVendors();
    res.status(200).json(result);
  } catch(error){
    const {code,body} = exception(error)
    res.status(code).json(body)
  }
}
async function oneVendor (req,res) {
  try {
    let { id } = req.params;
    if(id){
      id = validator.escape(id);
      if(!validator.isInt(id)) throw 1;
  }
  const result = await data.vendorId(id);
  res.status(200).json(result);
  } catch(error){
    const {code,body} = exception(error)
    res.status(code).json({body})
  }
}
async function addVendor (req,res) {
  try {
    const validFields = [
      "nombre", "razonSocial", "direccion", "email", "telefono"
    ]
    let parameters = _.pick(req.body,validFields);
    if(Object.keys(parameters).length < 5){
      throw 0;
    }
    const result = await data.saveVendor(parameters);
    res.status(201).json({mensaje:'Usuario registrado'});
  } catch(error){
    const {code,body} = exception(error)
    res.status(code).json({body})
  }
}
async function delVendor (req,res) {
  try {
    let { id } = req.params;
    if(id){
      id = validator.escape(id);
      if(!validator.isInt(id)) throw 1;
    }
    const result = await data.deleteVendor(id);
  res.status(200).json(result);
  } catch(error){
    const {code,body} = exception(error)
    res.status(code).json({body})
  }
}
module.exports = {
  welcomeInit,allVendors,oneVendor,addVendor,delVendor
}