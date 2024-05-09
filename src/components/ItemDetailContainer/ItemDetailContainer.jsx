import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductById } from "../../mock/asyncMock"; 

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProduct = async () => {
      const selectedProduct = await getProductById(parseInt(id));
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (isLoading) return <div>Cargando producto...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ItemList products={[product]} />
    </div>
  );
}
