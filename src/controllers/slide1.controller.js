/** Node Modules */
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const db = require("../config/db");

const post = catchAsync(async (req, res) => {
  const userData = await req.body;
  const {
    pelicula,
    direccion,
    guionAdap,
    guionOri,
    montaje,
    sonido,
    internacional,
    actor,
    actriz,
    actorRep,
    actrizRep,
    foto,
    vestuario,
    efectos,
    disProd,
    animacion,
    docu,
    cortoAnim,
    cortoDoc,
    corto,
    bandaSonora,
    cancion,
    maqYPel,
  } = userData.guesses;

  const results = await new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO OscarPredicciones (NombreParticipante,pelicula,direccion,guionAdap, guionOri, montaje,sonido, internacional, actor,actriz,actorRep,actrizRep,foto,vestuario,efectos,disProd,animacion,docu,cortoAnim,cortoDoc,corto,bandaSonora,cancion,maqYPel) VALUES ('${userData.username}','${pelicula}','${direccion}','${guionAdap}', '${guionOri}', '${montaje}','${sonido}','${internacional}', '${actor}','${actriz}','${actorRep}','${actrizRep}','${foto}','${vestuario}','${efectos}','${disProd}','${animacion}','${docu}','${cortoAnim}','${cortoDoc}','${corto}','${bandaSonora}','${cancion}','${maqYPel}');`,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
  return res.json(results);
});

module.exports = {
  post,
};
