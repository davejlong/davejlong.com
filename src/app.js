---
---
{% include javascripts/jquery.min.js %}
{% include javascripts/jquery.reveal.js %}
{% include javascripts/jquery.orbit-1.4.0.js %}
{% include javascripts/jquery.customforms.js %}
{% include javascripts/jquery.placeholder.min.js %}
{% include javascripts/jquery.tooltips.js %}
{% include javascripts/app.js %}

/* Lazy Load Disqus Comments */
if( $('#disqus_thread').length > 0 ) {
  var ds_loaded = false,
      _top = $('.meta.after').offset().top,
      lazyLoadDisqus = null;
  lazyLoadDisqus = function () {
    if( !ds_loaded && $(window).scrollTop() + $(window).height() > _top ) {
      ds_loaded = true;
      var dsq = document.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(dsq);
    }
  };

  $(window).on('scroll', lazyLoadDisqus );
  lazyLoadDisqus();
}


(function () {
  var s = document.createElement('script');
  s.async = true;
  s.type = 'text/javascript';
  s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
