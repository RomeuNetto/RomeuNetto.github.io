const divFilmes = document.querySelector("#filmes");
const informacoes = document.querySelector("#mais-informacoes");
const http = new XMLHttpRequest;
const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
const botaoFechar = document.querySelector("#fechar");
const divModal = document.createElement("div");

informacoes.style.display = 'none';

http.open("get", url);
http.send();
http.onreadystatechange = function () {
    if (http.readyState == 4) {
        if (http.status == 200) {
            let resposta = this.responseText;
            let filmes = JSON.parse(resposta);
            filmes.forEach(filme => {
                let divFilmeImg = document.createElement("div");
                let img = document.createElement("img");
                let urlImg = filme.figura;
                let botao = document.createElement("button");
                let titulo = filme.titulo;

                divFilmeImg.setAttribute("class", "div-imagem");
                botao.setAttribute("class", `btn btn-${titulo.split(" ")[0]}-${titulo.split(" ")[1] ? titulo.split(" ")[1] : "x"}`);
                img.setAttribute("class", "imagem");
                img.setAttribute("src", urlImg);

                botao.appendChild(img)
                divFilmeImg.appendChild(botao);
                divFilmes.appendChild(divFilmeImg);
            });

            const botoes = document.querySelectorAll(".btn");
            botoes.forEach(btn => {
                btn.addEventListener('click', function () {
                    let classes = btn.classList;
                    let classe = classes[1];
                    let divOpinioes = document.createElement("div");

                    botaoFechar.addEventListener('click', function () {
                        divModal.innerHTML = '';
                        informacoes.style.display = 'none';
                    })

                    informacoes.style.display = 'block';
                    informacoes.appendChild(divModal);

                    divOpinioes.setAttribute("class", "opnioes");
                    divModal.setAttribute("class", "modal");


                    filmes.forEach(filme => {
                        if (classe.includes("Better") && filme.titulo.includes("Better")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)

                        }
                        if (classe.includes("Breaking") && filme.titulo.includes("Breaking")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("House-of") && filme.titulo.includes("House of")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Narcos") && filme.titulo.includes("Narcos")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Carros-x") && filme.titulo == "Carros") {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Carros-2") && filme.titulo.includes("Carros")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Uma-Família") && filme.titulo.includes("Uma ")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Valente") && filme.titulo.includes("Valente")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Friends") && filme.titulo.includes("Friends")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("House-x") && filme.titulo.includes("House")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Mãos") && filme.titulo.includes("Mãos")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Família-Moderna") && filme.titulo.includes("Família Moderna")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Scarface") && filme.titulo.includes("Scarface")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("70s") && filme.titulo.includes("70s")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating '>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao '>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }
                        if (classe.includes("Zumbilândia") && filme.titulo.includes("Zumbilândia")) {
                            divModal.innerHTML = `<h2 class="titulo">Título: ${filme.titulo}</2>`;
                            divModal.innerHTML += `<p class="classificacao">Classificação: ${filme.classificacao}</p>`;
                            divModal.innerHTML += `<p class="resumo">Resumo: ${filme.resumo}</p>`;
                            divModal.innerHTML += `<p class="generos">Gêneros: ${filme.generos} </p>`;
                            divModal.innerHTML += `<p class="elenco">Elenco: ${filme.elenco} </p>`;
                            divModal.innerHTML += `<p class="semelhantes">Títulos semelhantes: ${filme.titulosSemelhantes} </p>`;
                            divModal.innerHTML += "<hr><h3>Opiniões: </h3>";
                            filme.opinioes.forEach(opiniao => {
                                let divOpiniao = document.createElement("div");
                                divOpiniao.innerHTML += "<p class='rating'>Rating: " + opiniao["rating"] + "</p>";
                                divOpiniao.innerHTML += "<p class='descricao'>" + opiniao["descricao"] + "</p>";
                                divOpinioes.appendChild(divOpiniao);
                                divOpiniao.setAttribute("class", "opiniao");
                            })
                            divModal.appendChild(divOpinioes)
                        }

                    })
                })
            })
        }
    }
}
