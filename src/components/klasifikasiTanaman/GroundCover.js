import Header from "../../components/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from "react-router-dom";

function BasicExample() {
  return (
    <>
    <Header />
    <div className="container">     
        <div className="section">
          <div className="row">          
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row justify-content-center">
    

    
    
    <Card style={{ width: '18rem' }}>
    <img src="/images/GroundCover/kacangkacangan.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
      <Card.Body>
        <Card.Title>Kacang-Kacangan</Card.Title>
        <Card.Title><h6>Status : Ground Cover</h6> </Card.Title>
        <Link to="/KacangKacangan">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/GroundCover/kucai.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Rumput Kucai</Card.Title>
        <Card.Title><h6>Status : Ground Cover</h6> </Card.Title>
      
        <Link to="/RumputKucai">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/GroundCover/AsokaJawa.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Asoka Jawa</Card.Title>
        <Card.Title><h6>Status : Ground Cover</h6> </Card.Title> 
        <Link to="/AsokaJawa">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
