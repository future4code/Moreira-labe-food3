import React from "react";
import useForm from "../../hook/useForm";
import usePutChangeAddress from "../../hook/usePutChangeAddress";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container, H3, ContainerBut, ContainerBack, Form, Input, Button, ButtonBack } from "./styled";
import useProtectedPage from "../../hook/useProtectedPage ";


const Address = () => {
  useProtectedPage()
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/feed");
  };
  const goBack = () => {
    navigate(-1);
  };
  const { form, onChangeForm, clearForm } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const onAddAddress = (e) => {
    e.preventDefault();
    clearForm();
    putAddAddress();
  };
  const { putAddAddress } = usePutChangeAddress(
    "rappi4A/address",
    form,
    goTo,
    goBack
  );
  return (
    <>
      <Header />
      <Container>
        <H3>Meu endereço</H3>
        <Form onSubmit={onAddAddress}>
          <Input
            type="text"
            name={"street"}
            value={form.street}
            onChange={onChangeForm}
            placeholder="Logradouro ou Rua"
            required
          />
          <Input
            type="number"
            name={"number"}
            value={form.number}
            onChange={onChangeForm}
            placeholder="Número"
            required
          />
          <Input
            type="text"
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChangeForm}
            placeholder="Bairro"
            required
          />
          <Input
            type="text"
            name={"city"}
            value={form.city}
            onChange={onChangeForm}
            placeholder="Cidade"
            required
          />
          <Input
            type="text"
            name={"state"}
            value={form.state}
            onChange={onChangeForm}
            placeholder="Estado"
            required
          />
          <Input
            type="text"
            name={"complement"}
            value={form.complement}
            onChange={onChangeForm}
            placeholder="Complemento"
          />
          <ContainerBut>
            <Button type="submit">Salvar</Button>
          </ContainerBut>
        </Form>
        <ContainerBack>
          <ButtonBack onClick={() => navigate(-1)}>Voltar</ButtonBack>
        </ContainerBack>
      </Container>
    </>
  );
};

export default Address;
