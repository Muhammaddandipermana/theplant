import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/GroundCover/kacangkacangan.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kacang-Kacangan</div>
                  </div>
                  <p>Kacang-kacangan adalah sebutan untuk biji yang berukuran relatif lebih besar dibandingkan serealia dan digunakan untuk bahan pangan bagi manusia dan hewan ternak. Kacang-kacangan umumnya didapatkan dari tanaman famili Fabaceae. Namun tanaman kacang-kacangan yang dipanen muda seperti kapri, buncis, dan edamame tidak disebut sebagai kacang-kacangan dalam definisi FAO. 
Kacang-kacangan mengandung sejumlah besar serat pangan dengan satu cangkir kacang yang telah dimasak mengandung 9-13 gram serat.  Serat pangan yang terlarut dapat membantu menurunkan kadar kolesterol darah.  Kacang-kacangan juga mengandung protein, karbohidrat kompleks, folat, dan besi. 
Kacang-kacangan merupakan salah satu jenis tanaman heliotropik; daun mereka akan menghadap ke arah matahari di siang hari. Di malam hari, daun mereka tergulung.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Ground Cover</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Arachis hypogaea</span>                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
    </>
  );
}

export default BasicExample;
