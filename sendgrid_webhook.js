var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'cmnvzxccan' }, function(err, tunnel) {
  console.log('LT running');
});
