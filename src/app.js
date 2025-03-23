
var session_button;
var like_buttons = [];
var define_button;

function addLikeEvent(element) {
    element.addEventListener("click",
        function () {
            let html = this.innerHTML;
            let num_index = html.search(/\d/i);
            html = html.slice(num_index);
            html = html.split(/\s/g);
            let like_count = Number(html[0]);
            this.innerHTML = (++like_count) + " me gusta";
        });
}

function main() {

    session_button = document.getElementsByClassName("session_button")[0];
    like_buttons = document.getElementsByClassName("like_button");
    define_button = document.getElementsByClassName("define_button")[0];

    for (var i = 0; i < like_buttons.length; i++) {
        addLikeEvent(like_buttons[i]);
    }

    session_button.addEventListener("click",
        function () {

            if (this.classList.contains("log_in")) {
                this.innerHTML = "Cerrar sesión";
            }
            else if (this.classList.contains("log_out")) {
                this.innerHTML = "Iniciar sesión";
            }

            this.classList.toggle("log_in");
            this.classList.toggle("log_out");
    });

    define_button.addEventListener("click",
    function(){
        this.remove();
    });
}

main();