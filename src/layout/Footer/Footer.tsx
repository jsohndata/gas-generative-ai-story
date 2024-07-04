import { Container, Row, Col } from "../../utils/Bootstrap";
const Footer = () => {

  return (
    <footer>
      <Container>
        <Row>
        <Col>
            <p className="text-center">
              <a href="https://github.com/jsohndata/gas-generative-ai-story" target="_blank" rel="noreferrer" className="text-white">See Code in GitHub</a></p>
              
              <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=gasai"
                rel="noreferrer"
                title="Click on it and press control-shift.">π</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;