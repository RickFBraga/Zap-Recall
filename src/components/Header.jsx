import Logo from "../assets/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>
        <img src={Logo} alt="" />
        <h1>ZapRecall</h1>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 51px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    color: #fff;
    font-family: Righteous;
    font-weight: 400;
  }

  img {
    height: 60px;
  }
`;
