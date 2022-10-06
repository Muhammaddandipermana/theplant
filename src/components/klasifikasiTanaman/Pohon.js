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
    <img src="/images/Pohon/saputangan.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
      <Card.Body>
        <Card.Title>Sapu Tangan</Card.Title>
        <Card.Title><h6>Status : Pohon</h6> </Card.Title>
        <Link to="/SapuTangan">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/Pohon/Bungur.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Bungur</Card.Title>
        <Card.Title><h6>Status : Pohon</h6> </Card.Title>
      
        <Link to="/Bungur">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/Pohon/CassisaFistula.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Kayu Raja</Card.Title>
        <Card.Title><h6>Status : Pohon</h6> </Card.Title> 
        <Link to="/CassilaFistula">
        <Button variant="primary">Selengkapnya</Button>
            </Link >
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img     
 src="/images/Pohon/DadapMerah.jpg"
 width={'262px'} height={'196px'}
alt="Third slide"
                />
      <Card.Body>
        <Card.Title>Dadap Merah</Card.Title>
        <Card.Title><h6>Status : Pohon</h6> </Card.Title>
        <Link to="/DadapMerah">
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