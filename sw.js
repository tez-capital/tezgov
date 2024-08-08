self.addEventListener('install', (event) => {
	// Skip waiting to take control immediately
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	// Delete all caches
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => caches.delete(cacheName))
			);
		}).then(() => {
			// Unregister this service worker
			return self.registration.unregister();
		}).then(() => {
			// Force clients to reload, which will load the fresh version of the site
			return self.clients.matchAll().then((clients) => {
				clients.forEach(client => client.navigate(client.url));
			});
		})
	);
});
