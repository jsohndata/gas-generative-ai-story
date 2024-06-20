import { Container, Row, Col } from "../../utils/Bootstrap";
const Footer = () => {

  return (
    <footer>
      <Container>
        <Row>
        <Col>
            <p className="text-center">
              <a href="https://github.com/jsohndata/bocacode-c10-final-project-portfolio" target="_blank" rel="noreferrer" className="text-white">See Code in GitHub</a></p>
              
              <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=19"
                rel="noreferrer"
                title="Click on it and press control-shift.">π</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;