import ListaDePosts from "./containers/listaDePosts";
import NovoPost from "./containers/novoPost";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NovoPost />
        </Col>
        <Col>
          <ListaDePosts />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
