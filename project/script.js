const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  try {
    // Create a JWT that expires in 1 hour 
    const token = jwt.sign(payload, secret, { 
      expiresIn: '1h' 
    });
    return token;
  } catch (error) {
    throw new Error('Failed to create token: ' + error.message);
  }
};

// Example usage:
const payload = { userId: '123', username: 'john_doe' };
const secret = 'your-secret-key';

try {
  const token = encrypt(payload, secret);
  console.log('Generated Token:', token);
  
  // Verify the token
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Token:', decoded);
} catch (error) {
  console.error('Error:', error.message);
}

module.exports = encrypt;