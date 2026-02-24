const generateReceiptId = () => {
  const timestamp = Date.now(); 
  return `RECPT-${timestamp}`;
};

module.exports = generateReceiptId;
