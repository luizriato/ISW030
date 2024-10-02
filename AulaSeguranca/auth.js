const jsonwebtoken = require('jsonwebtoken');
 
exports.PRIVATE_KEY = '1010FFF';
 
exports.user = {
  name: 'Janaina Ferreira',
  email: 'maria.ferreira21@fatec.sp.gov.br'
};
 
exports.tokenValited = (request, response, next) => {
  console.log('chegou');
  const [, token] = request.headers.authorization?.split(" ") || ["", ""];
 
  if (!token) {
    return response.status(401).send('Acesso negado. Nenhum token fornecido');
  }
 
  try {
    const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
    const userIdFromToken = typeof payload !== 'string' && payload.user;
 
    if (!user && userIdFromToken) {
      return response.send(401).json({ message: 'Token inválido' });
    }
 
    request.headers['user'] = payload.user;
    return next();
  } catch (error) {
    console.error(error);
    return response.status(401).json({ message: 'Token inválido' });
  }
};  