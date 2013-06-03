CloudFlare.require(
  [],
  function() {
    (function(d, w) {
      var x = d.getElementsByTagName('SCRIPT')[0];
      var g = d.createElement('SCRIPT');
      g.type = 'text/javascript';
      g.async = true;
      g.src = ('https:' == d.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      x.parentNode.insertBefore(g, x);
      var f = function () {
        var s = d.createElement('SCRIPT');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "//cf.lexity.com/dl/domain/"+d.domain;
        x.parentNode.insertBefore(s, x);
      };
      setTimeout(f, 0);
    }(document, window))
  }
)