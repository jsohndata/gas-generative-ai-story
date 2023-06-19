import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";


const Home = () => {

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
            <Image />
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
}

export default Home;