import { ShareFill, Github, Linkedin } from 'react-bootstrap-icons';
import { Container, Row, Col, Modal, Image, Button } from '../../utils/Bootstrap.jsx';

export default function Dialog ({ name, photo, former, content, linkGitHub, linkLinedin, showModal, toggleModalShow }) {
  
  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
      <Modal 
        show={showModal} 
        onHide={toggleModalShow} 
        size="xl"
        className="backdrop-effect">
        <Container className="m-0 p-0">
          <Row>
            <Col xs={12} lg={6}>
              <Image src={imageUri + photo} fluid />
            </Col>

            <Col xs={12} lg={6} className="px-5 pb-5 position-relative">
              
                <Button variant="outline-secondary"
                  size="sm"
                  className="close-dialog"
                  onClick={toggleModalShow}>Esc X</Button>
              

              <h3 className="mt-3">{name}</h3>
              <h4>{former}</h4>
              <p className="my-4">{content}</p>
              <a href={linkGitHub} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><Github color="white" size={25} /></Button></a>

              <a href={linkLinedin} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><Linkedin color="white" size={25} /></Button></a>

              <a href={linkLinedin} target='_blank' rel="noreferrer"><Button
              variant="info" className="me-2"><ShareFill color="white" size={25} /></Button></a>
            </Col>
          </Row>
        </Container>
      </Modal>
  );
}