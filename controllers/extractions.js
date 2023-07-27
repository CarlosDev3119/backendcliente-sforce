const { response, request } = require("express");
const { Extracciones } = require("../models/database/extracciones");

const dataExtraction = async (req = request, res = response) => {
    try{
        const data = await Extracciones.findOne({
            order: [['idextracciones','DESC']], 
          });
        
        res.status(200).json({
            data
        })

    }catch(event){
        res.status(400)
    }
}

module.exports = {

    dataExtraction

}