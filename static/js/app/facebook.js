function Facebook() {

	window.fbAsyncInit = function() {
	  FB.init({
	    appId      : '1810257965898767',
	    xfbml      : true,
	    version    : 'v2.8'
	  });
	};

	(function(d, s, id){
	   var js, fjs = d.getElementsByTagName(s)[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement(s); js.id = id;
	   js.src = "//connect.facebook.net/en_US/sdk.js";
	   fjs.parentNode.insertBefore(js, fjs);
	 }(document, 'script', 'facebook-jssdk'));

	  document.getElementById('fb_share_button').onclick = function() {
	    FB.ui({
	      method: 'share',
	      display: 'popup',
	      href: 'http://bppwrite.github.io/',
	    }, function(response){});
	  }

}

export { Facebook };
