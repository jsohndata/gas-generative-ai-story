import { useState } from 'react';
import { ShareFill, InfoLg} from 'react-bootstrap-icons';
import { Col, Card, Image, Button, Tooltip, OverlayTrigger } from '../../utils/Bootstrap.jsx';
import Dialog from './Dialog.jsx';


export default function Panel( {data: {projectName, projectInfo, name, former, content, projectImage, linkProject, linkGitHub, linkLinedin, photo}} ) {

  const [showModal, setShowModal] = useState(false);
  const toggleModalShow = () => setShowModal(!showModal);

  const imageUri = process.env.PUBLIC_URL + '/images/';

  const toolTipLaunch = (props) => (      
    <Tooltip className="button-tooltip" {...props}>
      Launch Project
    </Tooltip>
  );

  return (
    <Col md={6} lg={4}>
      <Card>          
        <a href={linkProject} target='_blank' rel="noreferrer"><Image 
          src={imageUri + projectImage} fluid /></a> 
                   
          <Card.Body className="px-4 my-2">
            <h3 className='text-center'>{projectName}</h3>
            <p className='text-center cursor-pointer'
              onClick={toggleModalShow}><strong>{name}</strong></p>
            <p>{projectInfo}</p> 

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 250 }}
              overlay={toolTipLaunch}
              koko="hihi">

              <Button variant="outline-info">
                <a href={linkProject} target='_blank' rel="noreferrer"><ShareFill color="info" size={20} /></a>
              </Button>
            </OverlayTrigger>

            <Button variant="outline-info" className="mx-2" onClick={toggleModalShow}>
              <InfoLg color="info" size={20} />
            </Button>
            
        </Card.Body>
      </Card>  

      <Dialog 
        name={name}
        former={former}
        content={content}
        linkGitHub={linkGitHub}
        linkLinedin={linkLinedin}
        photo={photo}    
        showModal={showModal}
        toggleModalShow={toggleModalShow} />
    </Col>
  );
}