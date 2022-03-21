import { useNavigate } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hook/useLogout";
export const HeaderPage = () => {
  const logout= useLogout()
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label="Navegar para o feed"
          onClick={() => navigate("/feed")}
        >
          🏡
        </span>
        <span
          role="img"
          aria-label="Navegar para o perfil"
          onClick={() => navigate("/profile")}
        >
          🤹
        </span>
        <span
          role="img"
          aria-label="Navegar para o carrinho"
          onClick={() => navigate("/cart")}
        >
          🛒
        </span>
        <span
          role="img"
          aria-label="Navegar para o pedido"
          onClick={() => navigate("/pedido")}
        >
          🧾
        </span>
        <span
          role="img"
          aria-label="Fazer logout"
          onClick={logout}
        >
          X
        </span>
      </div>
    </div>
  );
};
