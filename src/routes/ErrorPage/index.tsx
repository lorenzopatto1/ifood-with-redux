import { CaretLeft, MaskSad } from "@phosphor-icons/react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Container>
      <Link to="/"><CaretLeft size={32} /></Link>
      <p>ROTA NÃO CRIADA!</p>
      <MaskSad fill="#000" size={64} />
    </Container>
  );
}

