const Header = ({ filtrarProdutos }) => {
    return ( 
           <header 
           className="flex items-center justify-between px-15 py-4 bg-cyan-500">
        <div>
            <input 
            type="text" 
            placeholder="Digite o nome do produto" 
            className="w-120 h-10 rounded bg-white pl-4" />
        </div>
        <div>
            <select onChange={(event) => filtrarProdutos(event.target.value)}
            className="h-10 rounded bg-white px-4">
                <option selected disabled>Selecione uma categoria</option>
                <option>All</option>
                <option>Men's clothing</option>
                <option>Women's clothing</option>
                <option>Electronics</option>
                <option>Jewelery</option>
            </select>
            <select 
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
