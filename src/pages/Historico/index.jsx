import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoricoDePedidos = () => {
    const [pedidos, setPedidos] = useState([])

    const token = localStorage.getItem('token')
    const headers = {headers: {
        auth: token
     }}

     const getHistory = () => {
         axios.get('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/orders/history', headers)
         .then((response) => {
            setPedidos(response.data.orders)
         })
         .catch((error) => {
             alert(error.response)
         })
     }

     useEffect(() => {
       getHistory();
       // eslint-disable-next-line
     }, [])

     const listaDePedidos = pedidos.map((pedido) => {
         return <p key = {pedido.createdAt}>{pedido.restaurantName}</p>
     }) 

    return <div>
        {listaDePedidos}
    </div>
}

export default HistoricoDePedidos