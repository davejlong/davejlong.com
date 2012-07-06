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
var disqus_shortname = "{{ site.disqus }}";
if( $('#disqud_thread').length > 0 ) {
  var ds_loaded = false,
      top = $('.tags').offset().top,
      lazyLoadDisqus = null;
  lazyLoadDisqus = function () {
    if( !ds_loaded && $(window).scrollTop() + $(window).height() > top ) {
      ds_loaded = true;
      var dsq = document.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild(dsq);
    }
  };

  $(window).scroll( lazyLoadDisqus );
  lazyLoadDisqus();
        
}
