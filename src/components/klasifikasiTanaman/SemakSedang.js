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
    <img src="/images/SemakSedang/mawar.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
      <Card.Body>
        <Card.Title>Mawar</Card.Title>
        <Card.Title><h6>Status : Semak Sedang</h6> </Card.Title>
        <Link to="/Mawar">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/SemakSedang/melati.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Melati</Card.Title>
        <Card.Title><h6>Status : Semak Sedang</h6> </Card.Title>
      
        <Link to="/Melati">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/SemakSedang/kemuning.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Kemuning</Card.Title>
        <Card.Title><h6>Status : Semak Sedang</h6> </Card.Title> 
        <Link to="/Kemuning">
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
