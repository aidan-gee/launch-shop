  // A list of paths to cache
  var paths = [
    '/'
  ];

  // Open the cache (and name it)
  caches.open('offline-v1').then(function(cache) {
    return cache.addAll(paths);
  })
