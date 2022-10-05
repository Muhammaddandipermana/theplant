import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/Pohon/saputangan.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kayu Raja</div>
                  </div>
                  <p>Tengguli,    trengguli atau kayu raja (Cassia fistula) adalah tumbuhan di dalam keluarga Fabaceae, anak suku Caesalpinioidea. Berbunga kuning cerah dan indah, tengguli banyak ditanam sebagai pohon hias dan juga tanaman obat tradisional. Tanaman ini tumbuh secara alami di Asia Selatan dan Asia Tenggara, tetapi kini menyebar luas ke pelbagai negeri tropis. Bunganya merupakan bunga nasional Thailand.
Pohon yang menggugurkan daun, tinggi 10 hingga 20 m   dengan batang bebas cabang sekitar 5 m. Tajuk melebar menyebar. Pepagan berwarna abu-abu pucat dan halus ketika muda, menjadi cokelat gelap dan kasar ketika menua.  
Daun-daun tersusun berseling, majemuk menyirip genap, panjang 30-40 cm. Anak daun 3-8 pasang, bundar telur memanjang, berambut pendek, sisi bawahnya hijau biru 6–20 cm × 3,5–9 cm. Perbungaan berupa tandan terminal yang menggantung, 15–40 cm panjangnya, berbunga banyak, tidak rapat. Bunga-bunga berbau enak; kelopaknya berbagi-5 dalam; mahkota 2-3,5 cm panjangnya, kuning cerah. Tiga tangkai sari yang terbawah berbentuk-S, lebih panjang daripada yang lainnya. 
Buah polong bulat torak, 20–45 cm × 1,5 cm, menggantung, hitam dan tidak memecah ketika tua, dalamnya terbagi oleh sekat-sekat menjadi ruang-ruang berbiji-1.  Biji pipih kecokelatan, terletak melintang dalam ruang, 25-100 butir per polong, di antarai oleh sekat dan sejenis daging buah yang lengket berwarna cokelat kehitaman.   
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Cassia fistula</span>                          
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