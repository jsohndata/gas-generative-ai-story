import { Container, Row, Col } from "../utils/Bootstrap";
import ImageSwap from "../components/ImageSwap";
import AppLayout from "../layout/AppLayout";

const imageUri = process.env.PUBLIC_URL + '/images';

const Motion = () => {
  return (
    <AppLayout>
      <Container fluid id="motion">
        <Row className="g-4">
          <Col md={6} xl={4}>
            <ImageSwap 
              imageFile={imageUri+'/motion-cyber-female.webp'}
              motionFile={imageUri+'/motion-cyber-female-motion.webp'} />
          </Col>

          <Col md={6} xl={4}>
            <ImageSwap 
              imageFile={imageUri+'/motion-cyber-male.png'}
              motionFile={imageUri+'/motion-cyber-male-motion.webp'} />              
          </Col>

          <Col md={6} xl={4}>
            <ImageSwap 
              imageFile={imageUri+'/motion-cybernet-robot.png'}
              motionFile={imageUri+'/motion-cybernet-robot-motion.webp'} />              
          </Col>

        </Row>
      </Container>
    </AppLayout>
  );
}

export default Motion;

/* 
  // const [isVideoPlaying2, setIsVideoPlaying2] = useState(false);
  // const [isVideoPlaying3, setIsVideoPlaying3] = useState(false);
  // const [isVideoPlaying4, setIsVideoPlaying4] = useState(false);
  // const [isVideoPlaying6, setIsVideoPlaying6] = useState(false);
  // const [isVideoPlaying7, setIsVideoPlaying7] = useState(false);

const imageFile2 = imageUri+'/motion-cyberpunk-city.jpg';
const videoFile2 = imageUri+'/motion-cyberpunk-city.mp4';

const imageFile4 = imageUri+'/motion-cyber-female-2.png';
const videoFile4 = imageUri+'/motion-cyber-female-2.webp';

const imageFile7 = imageUri+'/motion-twins.png';
const videoFile7 = imageUri+'/motion-twins.mp4';


          

          

          <Col md={6} xl={4}>
          <div className="motion-container">
              {!isVideoPlaying4 ? (
                <Image 
                  fluid                   
                  src={imageFile4} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying4)} />
              ) : (
                <Image 
                  fluid                   
                  src={videoFile4} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying4)} />
              )}
            </div>
          </Col>

          <Col className="d-flex align-items-center">
          <div className="motion-container">
              {!isVideoPlaying6 ? (
                <Image 
                  fluid                   
                  src={imageFile6} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying6)} />
              ) : (
                <Image 
                  fluid                   
                  src={videoFile6} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying6)} />
              )}
            </div>
          </Col>

          <Col className="d-flex align-items-end">
          <div className="motion-container">
              {!isVideoPlaying7 ? (
                <Image 
                  fluid                   
                  src={imageFile7} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying7)}
                  />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile7} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>
*/
