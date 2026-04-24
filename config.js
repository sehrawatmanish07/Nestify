// API Configuration
window.ENV_API_BASE = 'https://nestify-backend-pkia.onrender.com/api';

// Wake up Render server on page load
fetch('https://nestify-backend-pkia.onrender.com/api/health')
  .then(() => console.log('Server is awake'))
  .catch(() => console.log('Waking server up...'));
