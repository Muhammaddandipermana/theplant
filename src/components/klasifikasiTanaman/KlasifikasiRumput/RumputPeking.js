import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/Rumput/RumputPeking.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Rumput Peking</div>
                  </div>
                  <p>Agrostis stolonifera stoloniferous dan dapat membentuk tikar atau jumbai. Batang bersujud dari spesies ini tumbuh hingga panjang 0,4–1,0 meter (1 kaki 4 inci – 3 kaki 3 inci) dengan bilah daun sepanjang 2–10 sentimeter (0,79–3,94 inci) dan malai mencapai hingga 40 cm (16 inci) . ) di ketinggian.
Ligulanya runcing dan panjangnya mencapai 5 milimeter (0,20 in) . Ini berbeda dari bengkok biasa, Agrostis capillaris , yang pendek dan tidak sampai pada suatu titik.
Daunnya meruncing, seringkali dengan warna biru-abu-abu. Rerumputan tidak berumbai dan bulir- bulir berwarna merah dan tertutup rapat di dalam malai . [5] Ini berbunga pada bulan Juli dan Agustus.
Jenis rumput yang satu ini hampir mirip dengan rumput Jepang. Yang berbeda, helai daunnya tumbuh lebih jarang dan teksturnya lebih lembut. Tampilannya yang rapi dan terkesan mewah membuat harganya relatif mahal. Soal perawatan, rumput Peking memiliki ketahanan cuaca yang baik di musim hujan. Rumput ini sempat menjadi idola sebelum tahun 2000.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Rumput</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Agrostis stolonifera stoloniferous</span>                          
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