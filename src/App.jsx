import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {

const[produtos, setProdutos] = useState([]);

  function buscarProdutos(){
      fetch("https://fakestoreapi.com/products")
      .then((response) => { return response.json()})
      .then((response) => {
        setProdutos(response)
      })
  }

  function filtrarProdutos(categoria){
    if(categoria != "All"){
    let prodrutosFiltrados = produtos.filter((produto) => {
        return produto.category == categoria.toLowerCase();
    });
      setProdutos(prodrutosFiltrados);
    }else{
      setProdutos(produtos);
    }
}

  useEffect(() => {
    buscarProdutos();
  }, [])

  return (
    <>
     <Header filtrarProdutos={filtrarProdutos}/>
    <main className="p-15 bg-slate-200">
      <div className="grid grid-cols-4 gap-4">
      {
      produtos.map((produto) => (      
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