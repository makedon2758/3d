(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let inpt = document.querySelectorAll(".file");
    let num = document.querySelector(".checked__btn");
    let numb = 0;
    inpt.forEach((item => {
        item.addEventListener("change", (e => {
            if (e.target.checked == true) {
                numb += 1;
                num.textContent = "( " + numb.toString() + " )";
            } else {
                numb -= 1;
                num.textContent = "( " + numb.toString() + " )";
            }
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();