import { useContext } from "react";
import { GlobalContext } from "../Global/GlobalContext";

export default function useRemoveItem() {
  const { cart, setCart } = useContext(GlobalContext);

  const removeDoCarrinho = (produto) => {
    const itemCarrinhos = [...cart];
    const verificaCarrinho = itemCarrinhos.filter((item) => {
      if (produto.id !== item.id) {
        return item;
      }
      return alert("seu item foi deletado");
      
    });
    setCart(verificaCarrinho);
    localStorage.setItem("cart", JSON.stringify(itemCarrinhos));
  };
  return removeDoCarrinho;
}
