import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakRendah/Aglaonema.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Aglaonema</div>
                  </div>
                  <p>Aglaonema adalah tanaman hias daun yang berasal dari suku talas-talasan (Araceae). Tanaman ini memiliki akar serabut dengan batang tanpa kambium. Ukuran daun aglaonema termasuk besar, dengan bentuk menyirip dan tersusun dari pembuluh pengangkut yang acak. 
Sebagian orang percaya bahwa merawat aglaonema bisa membawa rezeki. Itu sebabnya tanaman ini dikenal pula dengan sebutan sri rejeki. Ada pula yang menjuluki aglaonema dengan sebutan “Ratu Daun”. Diperkirakan ada sekitar 30 spesies aglaonema yang tumbuh menyebar di berbagai negara. 
Di luar negeri, tanaman aglaonema dikenal dengan istilah Chinese Evergreen. Macam-macam aglaonema memiliki corak, warna, bentuk dan ukuran yang berbeda, tetapi umumnya sama-sama menarik sehingga selalu menjadi primadona tanaman hias. 
Aglaonema dapat ditaruh di bagian rumah apa pun untuk mempercantik ruangan. Bisa di ruang keluarga, ruang makan, kamar tidur, bahkan kamar mandi. Hal yang  terpenting adalah Anda tidak lupa untuk merawat aglaonema agar selalu tumbuh subur.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Semak Rendah</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Araceae</span>                          
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