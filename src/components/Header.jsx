const Header = ({ filtrarProdutos, ordenarProdutos, pesquisarProdutos}) => {
    return ( 
           <header 
           className="lg:flex items-center justify-between px-15 py-4 bg-cyan-500">
        <div className="mb-4 lg:mb-0">
            <input onChange={(event) => pesquisarProdutos(event.target.value)}
            type="text" 
            placeholder="Digite o nome do produto" 
            className="w-full lg:w-120 h-10 rounded bg-white pl-4" />
        </div>
        <div className="flex gap-4 *:w-full lg:*:w-auto">
            <select onChange={(event) => filtrarProdutos(event.target.value)}
            className="h-10 rounded bg-white px-4">
                <option selected disabled>Selecione uma categoria</option>
                <option>All</option>
                <option>Men's clothing</option>
                <option>Women's clothing</option>
                <option>Electronics</option>
                <option>Jewelery</option>
            </select>
            <select onChange={(event) => ordenarProdutos(event.target.value)}
            className="h-10 rounded bg-white px-4 ml-4">
                <option selected disabled>Ordenar produtos</option>
                <option value="preco">Ordenar por Preço</option>
                <option value="nota">Ordenar por Avaliação</option>
            </select>
        </div>
    </header> 
    );
}
 
export default Header;
