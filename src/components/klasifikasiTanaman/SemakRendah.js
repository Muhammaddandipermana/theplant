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
    <img src="/images/SemakRendah/Aglaonema.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
      <Card.Body>
        <Card.Title>Aglaonema</Card.Title>
        <Card.Title><h6>Status : Semak Rendah</h6> </Card.Title>
        <Link to="/Aglaonema">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/SemakRendah/KupingGajah.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Kuping Gajah</Card.Title>
        <Card.Title><h6>Status : Semak Rendah</h6> </Card.Title>
      
        <Link to="/KupingGajah">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/SemakRendah/Keningkir.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Keningkir</Card.Title>
        <Card.Title><h6>Status : Semak Rendah</h6> </Card.Title> 
        <Link to="/Keningkir">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/SemakRendah/TapakDara.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Tapak Dara</Card.Title>
        <Card.Title><h6>Status : Semak Rendah</h6> </Card.Title> 
        <Link to="/TapakDara">
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