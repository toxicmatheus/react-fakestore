import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {


  const[produtos, setProdutos] = useState([]);
  const[produtosFiltrados, setProdutosFiltrados] = useState([]);

  function buscarProdutos(){
      fetch("https://fakestoreapi.com/products")
      .then((response) => { return response.json()})
      .then((response) => {
        setProdutos(response)
        setProdutosFiltrados(response)
      })
  }

  function filtrarProdutos(categoria){
    if(categoria != "All"){
    let produtosFiltrados = produtos.filter((produto) => {
        return produto.category == categoria.toLowerCase();
    });
      setProdutosFiltrados(produtosFiltrados);
    }else{
      setProdutosFiltrados(produtos);
    }
  }

  function ordenarProdutos(ordem){
    let produtosOrdenados = [];
    if(ordem == "preco"){
        produtosOrdenados = produtos.toSorted((prodA, prodB) => {
            return prodA.price - prodB.price;
        });

    } else {
        produtosOrdenados = produtos.toSorted((prodA, prodB) => {
            return prodB.rating.rate - prodA.rating.rate;
        });
    }
    setProdutosFiltrados(produtosOrdenados);
  }        

function pesquisarProdutos(texto){
    if(texto.length == 0){
        setProdutosFiltrados(produtos);
        return;
    }
    if(texto.length >= 3){
        let produtosEncontrados = produtos.filter((produto) => {
            return produto.title.toLowerCase().includes(texto.toLowerCase());
        });
        setProdutosFiltrados(produtosEncontrados);
    }
}

  useEffect(() => {
    buscarProdutos();
  }, [])

  return (
    <>
     <Header filtrarProdutos={filtrarProdutos} ordenarProdutos={ordenarProdutos} pesquisarProdutos={pesquisarProdutos}/>
    <main className="p-4 lg:p-15 bg-slate-200">
    <div className="grid lg:grid-cols-4 gap-4">
      {
      produtosFiltrados.map((produto) => (      
      <Card
        key={produto.id}
        title={produto.title}
        image={produto.image}
        category={produto.category}
        price={produto.price}
        rate={produto.rating.rate}
      />
      ))
      }
    </div>
    </main>
  </>
  );
}
 
export default App;