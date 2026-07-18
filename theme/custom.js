// LazyLoad for app icons
(function() {
    // Open external links in new tab
    document.addEventListener("DOMContentLoaded", function() {
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.getAttribute("href") && link.hostname !== location.hostname) {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }
        }
    });

    // LazyLoad from CDN
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@19.1.3/dist/lazyload.min.js';
    script.onload = function() {
        document.addEventListener("DOMContentLoaded", function() {
            new LazyLoad();
        });
    };
    document.head.appendChild(script);
})();
