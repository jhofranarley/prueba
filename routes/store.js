exports.grafica = function(req, res){ 
  res.render('grafica', { title: 'Grafica',
    ran1: req.session.rango1,
    ran2: req.session.rango2,
    x1: req.session.variableX1,
    y1: req.session.variableY1,
    y2: req.session.variableY2,
    x2: req.session.variableX2,
    dx1: req.session.derivadaX1,
    dy1: req.session.derivadaY1,
    dy2: req.session.derivadaY2,
    dx2: req.session.derivadaX2,
    fog: req.session.compo1,
    gof: req.session.compo2,
    incre: req.session.incrementoo,
    compu: req.session.compru,
    compu2: req.session.compru2,
          });
}; 
exports.composicion = function(req, res){ 
  res.render('composicion', { title: 'Composicion',
          });
}; 
exports.index = function(req, res){
  res.render('index', { title: 'Calcular',
    valida: req.session.valida,
          });
};

exports.tablas = function(req, res){
  res.render('tablas', { title: 'Tablas',
    ran1: req.session.rango1,
    ran2: req.session.rango2,
    x1: req.session.variableX1,
    y1: req.session.variableY1,
    y2: req.session.variableY2,
    x2: req.session.variableX2,
    dx1: req.session.derivadaX1,
    dy1: req.session.derivadaY1,
    dy2: req.session.derivadaY2,
    dx2: req.session.derivadaX2,
    fog: req.session.compo1,
    gof: req.session.compo2,
    incre: req.session.incrementoo,
          });
};
