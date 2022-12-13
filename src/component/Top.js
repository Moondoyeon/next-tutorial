import Image from "next/image";
import styled from "styled-components";

export default function Top() {
  return (
    <Container>
      <Image src="/images/logo.png" alt="logo" width={60} height={60} className="logo" />
      <h1>Art Coding</h1>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 15px;
  .logo {
    margin: 5px;
    border-radius: 50%;
  }
  display: flex;
  align-items: flex-end;
`;
