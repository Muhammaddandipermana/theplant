import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakRendah/TapakDara.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Tapak Dara</div>
                  </div>
                  <p>Tapak dara adalah perdu tahunan yang berasal dari Madagaskar, tetapi telah menyebar ke berbagai daerah tropika lainnya. Nama ilmiahnya Catharanthus roseus (L.) Don. Di Indonesia tumbuhan hias pekarangan ini dikenal dengan bermacam-macam nama, seperti di disebut sindapor (Sulawesi), kembang tembaga (bahasa Sunda), dan kembang tapak dårå (bahasa Jawa). Orang Malaysia lebih mengenalnya sebagai kemunting cina, pokok rumput alang, pokok kembang sari cina, atau pokok rose pantai. Di Filipina ia dikenal sebagai Tsitsirika, di Vietnam sebagai hoa hai dang, di Cina dikenal sebagai Chang chun Hua, di Inggris sebagai Rose Periwinkle, dan di Belanda sebagai soldaten bloem.
Perdu kecil tahunan, berasal dari [Madagaskar]. Tumbuh baik mulai dari dataran rendah sampai ketinggian 800 meter di atas permukaan laut. Tumbuhan ini menyukai tempat-tempat yang terbuka, tetapi tak menutup kemungkinan bisa tumbuh di tempat yang agak terlindung pula. Habitus perdu tumbuh menyamping, Tinggi tanaman bisa mencapai 0,2-1 meter. Daunnya berbentuk bulat telur, berwarna hijau, tersusun menyirip berselingan. Panjang daun sekitar 2-6 cm, lebar 1-3 cm, dan tangkai daunnya sangat pendek. Batang dan daunnya mengandung lateks berwarna putih.
Bunganya aksial (muncul dari ketiak daun). Kelopak bunga kecil, berbentuk paku. Mahkota bunga berbentuk terompet, ujungnya melebar, berwarna putih, biru, merah jambu atau ungu tergantung kultivarnya. Buahnya berbentuk gilig (silinder), ujung lancip, berambut, panjang sekitar 1,5 - 2,5 cm, dan memiliki banyak biji.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Semak Rendah</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Catharanthus roseus</span>                          
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