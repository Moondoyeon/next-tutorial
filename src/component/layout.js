import { Container } from "semantic-ui-react";
import Footer from "./Footer";

import Gnb from "./Gnb";
import Top from "./Top";

export default function Layout({ children }) {
  return (
    <Container>
      <Top />
      <Gnb />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
