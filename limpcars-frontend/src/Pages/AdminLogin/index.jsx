import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { loginAdmin } from "../../../services/auth";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #020203;
  color: #ffffff;
`;

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  background: #050608;
  border-radius: 16px;
  border: 1px solid #111218;
  padding: 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  color: #b0b0b0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #1b1d26;
  background: #080a10;
  color: #ffffff;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #00e0ff;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: none;
  background: #00e0ff;
  color: #000;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #00c4e0;
  }
`;

const ErrorText = styled.p`
  margin-top: 4px;
  color: #ff4d4f;
  font-size: 0.85rem;
`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const response = await loginAdmin(email, senha);
      
      if (response.data?.success) {
        localStorage.setItem("adminAutenticado", "true");
        const redirectTo = location.state?.from?.pathname || "/admin";
        navigate(redirectTo, { replace: true });
      } else {
        setErro("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErro(
        error.response?.data?.message || 
        "Erro ao fazer login. Tente novamente."
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Wrapper>
      <Card>
        <div>
          <Title>Área Administrativa</Title>
          <Subtitle>Faça login para gerenciar os agendamentos.</Subtitle>
        </div>

        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <Button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </Button>

          {erro && <ErrorText>{erro}</ErrorText>}
        </Form>
      </Card>
    </Wrapper>
  );
};

export default AdminLogin;

