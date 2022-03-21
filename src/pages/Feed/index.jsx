import React, { useContext, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../../Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { HeaderPage } from "../../components/Header/HeaderPage";
import useProtectedPage from "../../hook/useProtectedPage ";
import useForm from "../../hook/useForm";
import { Img, Main, Container, Description, Inputs, FormSearch, Time, Category, Data } from './styled'

const Feed = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const { restaurants, setRestaurants } = useContext(GlobalContext);

  const { form, onChangeForm, clearForm } = useForm({
    pesquisar: "",
    category: "",
  });

  const GetRestaurants = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetRestaurants();
    // eslint-disable-next-line
  }, []);

  const pesquisar = (event) => {
    event.preventDefault();
    clearForm();
  };
  const filterRests = () =>
    restaurants
      .filter((rest) => {
        return rest.name.toLowerCase().includes(form.pesquisar.toLowerCase());
      })
      .filter((rest) => {
        return rest.category
          .toLowerCase()
          .replace("á", "a")
          .includes(form.category.toLowerCase());
      })
      .map(({ id, name, category, address, deliveryTime, logoUrl }) => {
        return (
          <Container key={id}>
            <Main onClick={() => navigate(`/menu/${id}`)}>
              <Img src={logoUrl} />
              <Description>
                <h2>{name}</h2>
                <p>{address}</p>
                <Data>
                  <Category>{category}</Category>
                  <Time>{deliveryTime} min</Time>
                </Data>
              </Description>
            </Main>
          </Container>
        );
      });
  return (
    <div>
      <HeaderPage />
      <FormSearch onSubmit={pesquisar}>
        <Inputs
          name="pesquisar"
          value={form.pesquisar}
          onChange={onChangeForm}
          placeholder={"Pesquisar por nome"}
        />
        <Inputs
          name="category"
          value={form.category}
          onChange={onChangeForm}
          placeholder={"Pesquisar por categoria"}
        />
      </FormSearch>
      {filterRests()}
      {/* {restaurante ? <p>Restaurante não encontrado.</p> : filterRests()} */}
      </div>
      );
    };
    
    export default Feed;

