import { useContext } from 'react'
import { GlobalContext } from '../Global/GlobalContext';

export default function useRemoveItem() {

    const {cart, setCart} = useContext(GlobalContext)

    const removeDoCarrinho = (produto) => {
        const itemCarrinhos = [...cart];
    
        const verificaCarrinho = itemCarrinhos.find((item) => produto.id === item.id);
        if (verificaCarrinho){
          alert("seu item foi deletado")
          itemCarrinhos.splice(produto,1)
        }
        setCart(itemCarrinhos)
        localStorage.setItem("cart", JSON.stringify(itemCarrinhos))
    }
    return removeDoCarrinho
}
