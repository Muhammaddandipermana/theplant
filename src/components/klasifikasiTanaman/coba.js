import Header from "../../components/Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container">     
        <div className="section">
          <div className="row">          
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                
               
                  <div className="mb-5">
                
                  </div>
                
                  <>
                    
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        
                      >
                        <div className="border-product">
                        

                          <div className="shoptext">
                            542                         
                          </div>
                          <div className="flex-box d-flex align-items-center">
                      <h6>Status :</h6>
                      
                        <span>Tanaman Langka</span>
                      
                        <span>unavailable</span>
                
                      
                    </div>
                        </div>
                      </div>
                    
                  </>
           

                {/* Pagination */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default BasicExample;