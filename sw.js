self.addEventListener('push', function(event) {
  event.waitUntil(  
    self.registration.showNotification('Notification from SW', {  
      body: 'Service Worker message',  
    })
  );  
});
