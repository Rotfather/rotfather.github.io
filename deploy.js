// "deploy": "NODE_ENV=production gulp build && gh-pages -d public"


var ghpages = require('gh-pages');
var path = require('path');

var options = {
  repo: 'https://github.com/marcosvlehmkuhl/rotfather-site.git'
}

ghpages.publish(path.join(__dirname, 'public/'), options, function(err) {
  console.error(err);
});
