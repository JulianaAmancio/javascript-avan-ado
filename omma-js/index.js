// Requisito 1

const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);


// Requisito 2-3

 let listaDeReceitas = [
    {
        id: 1,
        titulo: "Cachorro quente",
        dificuldade: "simples",
        ingredientes: ["1 pão de leite", "2 salsichas", "1 colher de batata palha"],
        preparo: "",
        link: "http://youtube.com",
        vegano: false,
    }
];

// Requisito 4

const cadastrarReceita = (
        id,
        titulo,
        dificuldade, 
        ingredientes, 
        preparo,
        link, 
        vegano,
    ) => {

    const novaReceita = {
        id,
        titulo,
        dificuldade, 
        ingredientes, 
        preparo,
        link, 
        vegano,  

    };

    listaDeReceitas.push(novaReceita);
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`)

};
 


// Requisito 5 

function exibirReceitas() {
    for (let i = 0; i < listaDeReceitas.length; i++) {
      const receita = listaDeReceitas[i];
  
      console.log("--------------------------------");
      console.log(`Título: ${receita.titulo}`);
  
      console.log("Ingredientes:");
      for (let j = 0; j < receita.ingredientes.length; j++) {
        console.log(`- ${receita.ingredientes[j]}`);
      }
  
      console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
      console.log("--------------------------------");
    }
  }

  // Requisito 6

  function deletarReceita(id) {
    let novaListaDeReceitas = [];
  
    for (let i = 0; i < listaDeReceitas.length; i++) {
      const receita = listaDeReceitas[i];
  
      if (receita.id !== id) {
        novaListaDeReceitas.push(receita);
      }
    }
  
    if (novaListaDeReceitas.length === listaDeReceitas.length) {
      return console.log("Receita não encontrada");
    }
  
    listaDeReceitas = novaListaDeReceitas;
    console.log("Receita deletada com sucesso!");
  }


  // cadastrar nova receita

 cadastrarReceita(
    2,
    "Ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "sal a gosto"],
    "Quebre o ovo em um copo americano, jogue sal, e leve a frigideira.",
    "https://google.com",
    false,

);


// Exibe todas as receitas
exibirReceitas();

// Remove a receita de id 1
deletarReceita(2);

// Exibe a nova lista de receitas
exibirReceitas();
 