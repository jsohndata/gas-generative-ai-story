import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";


const Home = () => {

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
      <Container fluid className="visual-board">
        <Row className="g-0">
          <Col lg={5}>
            <Image src={imageUri + "city-vertical.jpg"} />
          </Col>

          <Col lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "cafe-two-people.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={6}><Image src={imageUri + "female-thinking.jpg"} /></Col>
                <Col lg={6}><Image src={imageUri + "male-laughing.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "male-wrist-watch.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + "female-looking-out.jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>  

        <Row className="g-0">
          <Col>
            <Image src={imageUri + "male-motorycycle-riding-2.webp"} />
          </Col>
          <Col>
            <Image src={imageUri + "male-motorcycle-revving.webp"} />
          </Col>
          <Col>
            <Image src={imageUri + "male-motorcycle-standing.webp"} />
          </Col>
        </Row>    
      </Container>
      </section>
    </AppLayout>
  );
}

export default Home;