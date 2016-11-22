function Facebook(element) {

    window.fbAsyncInit = function() {
        FB.init({
            appId: '1810257965898767',
            xfbml: false,
            version: 'v2.8'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    element.onclick = function(e) {
        FB.ui({
            method: 'share',
            hashtag: 'newplays',
            display: 'popup',
            href: e.target.dataset.permalink,
        }, function(response) {});
    }

}

export {
    Facebook
};
