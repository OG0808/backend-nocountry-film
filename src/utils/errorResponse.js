module.exports = (res, errorcode, error,  ) => {
    const response = {///armamos la respuesta,
      succes: false,//como esta funcion se usara en respuestas de error, por defecto el succes ira en false
      message: error.message ?? "Error in server.",//si no viene un mensaje en el error por x motivo tiramos error in server
    };
    return res.status(errorcode).send(response);//finalmente retornamos la respuesta de la peticion
  };