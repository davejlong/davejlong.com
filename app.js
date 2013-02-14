---
---
{% include javascripts/jquery.min.js %}
{% include javascripts/jquery.reveal.js %}
{% include javascripts/jquery.orbit-1.4.0.js %}
{% include javascripts/jquery.customforms.js %}
{% include javascripts/jquery.placeholder.min.js %}
{% include javascripts/jquery.tooltips.js %}
{% include javascripts/moment.js %}
{% include javascripts/app.js %}

var disqus_shortname = "{{ site.disqus }}",
  disqus_developer = 1,
  disqus_container_id = "disqus_thread",
  disqus_domain = "disqus.com";

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

$(function () {
  // Load twitter
  var account = 'davejlong',
      $container = $('#tweet'),
      linkify;
  linkify = function (text) {
    exp = /((?:ftp|http|https):\/\/)((\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    text = text.replace(exp, "<a href=\"$1$2\" target=\"_blank\">$2</a>");
    text = text.replace(/#([A-Za-z0-9_]+)/gi, "<a href=\"http://twitter.com/search/%23$1\" target=\"_blank\">#$1</a>");
    return text.replace(/@([A-Za-z0-9_]+)/gi, "<a href=\"http://twitter.com/$1\" target=\"_blank\">@$1</a>");
  };

  $.ajax({
    url: 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + account + '&count=1',
    dataType: 'jsonp',
    success: function (data) {
      var tweet = data[0];
      console.log(tweet);
      $container.find('.status').html(linkify(tweet.text));
      $container.find('.date').text(moment(tweet.created_at).fromNow());
    }
  });
}());
