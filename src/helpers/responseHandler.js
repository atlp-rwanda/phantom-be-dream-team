const responseHandler = (res, code, record, req) => {
  const msg = code < 400 ? 'success' : 'fail';
  return res.status(code).json({Message: msg, code, record});
};

export default responseHandler;
