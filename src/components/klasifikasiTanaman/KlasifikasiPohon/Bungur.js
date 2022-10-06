import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/Pohon/Bungur.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Bungur</div>
                  </div>
                  <p>Bungur (Lagerstroemia, /ˌleɪɡərˈstriːmiə/ ) adalah sejenis tumbuhan berwujud pohon atau perdu yang dikenal sebagai pohon peneduh jalan atau pekarangan. Bunganya berwarna merah jambu, bila mekar bersama-sama akan tampak indah. Perbanyakan anakannya berasal dari biji yang keluar setelah proses pembungaan selesai. Bijinya berbentuk bulat berwarna coklat sebesar kelereng. Selain itu bisa juga diperbanyak dengan pencangkokan.
Ada dua jenis bungur yang populer sebagai tanaman hias pekarangan: bungur biasa/besar/kebo (L. speciosa), pohon besar mencapai 8 m, dan bungur jepang (L. faurieri, L. indica, dan hibrida keduanya) yang lebih kecil, berbentuk perdu. Bungur besar dulu juga banyak ditanam di pekuburan. Kini selain ditanam sengaja di pinggir jalan raya dan halaman rumah, juga banyak tumbuh liar di tepian sungai.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Lagerstroemia</span>                          
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