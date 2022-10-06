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
                    <div className="product-name">Sapu Tangan</div>
                  </div>
                  <p>Pohon saputangan (Maniltoa grandiflora) adalah jenis tumbuhan yang termasuk dalam genus Maniltoa dan famili Fabaceae.Tumbuhan ini memiliki nama sinonim Maniltoa brawneodes. Tumbuhan ini berupa pohon dengan tinggi 5 hingga 15 meter. Batang tegak, bulat, percabangan simpodial, dan berwarna cokelat. Daun berupa daun majemuk, pertulangan daun menyirip, lonjong, tepi rata, ujung dan pangkal daun runcing. Panjang daun 7 sampai 14 cm, lebar 3–8 cm dengan panjang tangkai antara 1-1,5 cm serta berwarna hijau. Memiliki bunga majemuk berbentuk malai dan terletak di ketiak daun dan ujung cabang pohon. Bentuk tangkai bunga bulat, panjag 1–2 cm dan berwarna hijau. Kelopak bunga berbentuk cawan, seludang bunga lonjong, mahkota bunga lepas dan berwarna kuning. Buah tanaman ini termasuk buah polong. Biji berbentuk ginjal, berwarna hitam, dan berukuran kecil. Jenis akarnya termasuk akar tunggang, dan berwarna putih kecokelatan. Tumbuhan ini memiliki manfaat untuk obat gangguan pencernaan. Daun, buah, dan kulit batang mengandung saponin, flavonoid, dan polifenol.</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Maniltoa grandiflora</span>                          
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