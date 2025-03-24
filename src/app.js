
var session_button;
var like_buttons = [];
var define_button;

function addLikeEvent(element) {
    element.addEventListener("click",
        function () {

            /*
            // old like count
            let html = this.innerHTML;
            let num_index = html.search(/\d/i);
            html = html.slice(num_index);
            html = html.split(/\s/g);
            let like_count = Number(html[0]);
            */

            // Like count
            // By using innerText we dont have to worry about formatting
            let text = this.innerText;
            text = text.split(/\s/g);
            let like_count = Number(text[0]);
            this.innerText = (++like_count) + " me gusta";

            // Alert
            //
            // There is two ways to do this, one is using the .parentNode property
            // to access the parent element then its first child,
            // which is the one containing the animal's name.
            // The second option requires the parent of the button to be a form element,
            // which allow us to access it through the .form property, the rest is the same as the first option.

            //let title = this.form.children[0].innerHTML;
            let title = this.parentNode.children[0].innerHTML;

            alert(title + " was liked.");
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
        function () {
            this.remove();
        });
}

main();