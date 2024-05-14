// background.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
});

// Additional event listeners and logic for extension functionality
