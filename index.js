

let botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    let resultadoCampo = document.querySelector("#campo").value;
    switch (resultadoCampo) {

        case '':

            let p = document.createElement('p');
            p.classList.add("color");
            p.textContent = "Campo vazio, preencha corretamente!"
            document.querySelector(".container2").insertAdjacentElement("afterend", p);

            setTimeout(() => {
                p.remove()
            }, 5000);
            break;

        default:
            let p1 = document.createElement("p");
            let button = document.createElement("button");
            let a = document.querySelector(".campo");
            let div = document.createElement("div");
            p1.classList.add("texto");
            button.classList.add("deletar");
            p1.textContent = resultadoCampo;
            div.appendChild(p1)
            div.classList.add("showContent");
            a.appendChild(div);
            button.textContent = '✕'
            div.appendChild(button);

            button.addEventListener("click", () => {
                div.classList.add("hiddenContent");
            });
    }
});



