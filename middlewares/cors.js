module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');

  if (req.method === 'OPTIONS') return res.status(200).end();

  return next();
};
