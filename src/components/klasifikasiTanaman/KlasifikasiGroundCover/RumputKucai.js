import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/GroundCover/Kucai.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Rumput Kucai</div>
                  </div>
                  <p>Rumput kucai mini yang memiliki nama ilmiah Ophiopogon japonicus ini merupakan salah satu tanaman hias. Tanaman ini berasal dari dataran Asia. Rumput kucai mini banyak ditanam karena ia bisa tumbuh di lahan yang tidak terkena sinar matahari cukup, misalnya di bawah pohon atau bagian yang tertutup bayangan gedung yang tinggi. Walaupun begitu, bila diberi sinar matahari yang cukup, rumput kucai mini bisa tumbuh lebih baik.
Rumput kucai mini berwarna hijau gelap dan tingginya maksimal mencapai 4 cm saja. Jika menanam rumput kucai mini, Anda tidak perlu khawatir. Sebab, tanaman ini bisa bertahan dalam berbagai cuaca, baik saat panas atau hujan. Agar tanaman bisa terlihat lebih cantik, Anda bisa memadupadankan tanaman rumput kucai mini dengan bromelia atau jenis bonsai.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Ground Cover</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Ophiopogon japonicus</span>                          
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