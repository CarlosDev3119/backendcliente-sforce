const { DataTypes } = require('sequelize');
const { db } = require('../../database/config');

const Extracciones = db.define('Extracciones', {
    idextracciones: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rfc: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    razonsocial: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    direccionfiscal: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    fechainscripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    urlconstancia: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    seriename: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    fechaemision: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    datefield: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    urlcertificado: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    direction: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    holder: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    expired: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    urlcomprobante: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    actanumber: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    notenumber: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    dateconstitution: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    altadate: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    activity: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    urlactacons: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    namefull: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    curp: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    porcentaje: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ifeurl1: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    namefull2: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    curp2: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    porcentaje2: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ifeurl2: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    namefull3: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    curp3: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    porcentaje3: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ifeurl3: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    curp4: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    namefull4: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    ifeurl4: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    fechainsercion: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
}, {
    timestamps: false, // Si no tienes campos createdAt y updatedAt, puedes deshabilitar las marcas de tiempo.
    tableName: 'extracciones', // Sustituye esto con el nombre de tu tabla en la base de datos.
});

  module.exports = {
    Extracciones
  }