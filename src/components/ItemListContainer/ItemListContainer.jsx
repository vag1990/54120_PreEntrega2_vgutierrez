import useProducts from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ saludo }) {
  const { isLoading, products } = useProducts();

  if (isLoading) return <div>Buscando los productos...</div>;
  

  

  return (
    <div>
      
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
