// =======================
// B.1 - Dados
// =======================

const catalogo = [
  { id: 1, titulo: "Vingadores", tipo: "filme", ano: 2012, generos: ["ação", "aventura"], nota: 9.2, assistido: true },
  { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["drama"], nota: 9.5, assistido: true },
  { id: 3, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["ficção"], nota: 8.9, assistido: false },
  { id: 4, titulo: "Dark", tipo: "serie", ano: 2017, generos: ["suspense", "ficção"], nota: 9.0, assistido: true },
  { id: 5, titulo: "Titanic", tipo: "filme", ano: 1997, generos: ["romance"], nota: 8.5, assistido: false },
  { id: 6, titulo: "The Witcher", tipo: "serie", ano: 2019, generos: ["fantasia"], nota: 8.2, assistido: false }
];

// =======================
// B.2 - Acesso
// =======================

console.log(catalogo);
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro:", catalogo[2].generos[1]);
} else {
  console.log("Terceiro item não tem segundo gênero");
}

// =======================
// B.3 - Iterators
// =======================

// forEach
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Não assistidos:", naoAssistidos.length);

// find (SEM erro de variável duplicada)
const topFilme = catalogo.find(item => item.nota >= 9);

if (topFilme) {
  console.log(`Top: ${topFilme.titulo} (${topFilme.nota})`);
} else {
  console.log("Nenhum com nota >= 9");
}

// reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

// some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Tem antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);

// =======================
// B.4 - Tela
// =======================

const total = catalogo.length;
const filmes = catalogo.filter(i => i.tipo === "filme").length;
const series = catalogo.filter(i => i.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
<p>Total de itens: ${total}</p>
<p>Filmes: ${filmes}</p>
<p>Séries: ${series}</p>
<p>Não assistidos: ${naoAssistidos.length}</p>
<p>Média geral: ${mediaGeral.toFixed(2)}</p>

<h3>Top 3:</h3>
<ul>
  ${ranking.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
</ul>
`;
