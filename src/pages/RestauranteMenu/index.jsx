import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalContext";
import AllCard from "./AllCard";
import { Link } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const restaurantId = useParams();

  const { restaurantsDetails, setRestaurantsDetails } =
    useContext(GlobalContext);

  const GetRestaurantDetail = (id) => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${restaurantId.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRestaurantsDetails(res.data.restaurant.products);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    GetRestaurantDetail();
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <Link to="/cart">
        <button>Carrinho</button>
      </Link>
      {restaurantsDetails?.map(
        ({ id, category, description, name, price, photoUrl }) => {
          return (
            <AllCard
              key={id}
              id={id}
              category={category}
              description={description}
              name={name}
              price={price}
              photoUrl={photoUrl}
            />
          );
        }
      )}
    </div>
  );
};

export default Menu;
