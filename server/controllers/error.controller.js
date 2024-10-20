// error handler 
function getErrorMessage(errMsg) {
  console.log(errMsg);
  return 'Internal Server Error 500';
  }
  
// Export the controller function
export default {
  getErrorMessage
  };
  