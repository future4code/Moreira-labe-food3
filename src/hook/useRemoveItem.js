import { useContext } from "react";
import { GlobalContext } from "../Global/GlobalContext";

export default function useRemoveItem() {
  const { cart, setCart } = useContext(GlobalContext);

  const removeDoCarrinho = (produto) => {
    const itemCarrinhos = [...cart];
    const verificaCarrinho = itemCarrinhos
      .map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item; //alert("seu item foi deletado");
      })
      .filter((pedido) => pedido.quantity > 0);
    setCart(verificaCarrinho);
    localStorage.setItem("cart", JSON.stringify(itemCarrinhos));
  };

  return removeDoCarrinho;
}
