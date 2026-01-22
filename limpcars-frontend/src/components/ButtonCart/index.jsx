import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Card, IconGroup, CartBadge, CartTotal } from "./style";

const ButtonCart = ({ total, quantidade, onClick }) => {
  const totalFormatado = Number(total).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Card onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick?.()}>
      <IconGroup>
        <IoBagHandleOutline size={22} />
        <CartBadge>{quantidade}</CartBadge>
      </IconGroup>
      <CartTotal>R$ {totalFormatado}</CartTotal>
    </Card>
  );
};

export default ButtonCart;
