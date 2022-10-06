import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakRendah/KupingGajah.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kuping Gajah</div>
                  </div>
                  <p>Anthurium crystallinum atau yang dikenal dengan nama tanaman kuping gajah adalah tanaman hias dari keluarga Araceae. Dilansir dari Jogja Benih Provinsi Jogja, tanaman kuping gajah memiliki ciri-ciri sebagai berikut:
1.	Batang berdiri tegak
2.	Daunnya tunggal, lebar daun mencapai 15-20 cm
3.	Daun berwarna hijau dan berbentuk lonjong mirip dengan kuping gajah
4.	Tulang daun menyirip dan berwarna keputih-putihan
5.	Bentuk bunga majemuk, berkelopak bulat
6.	Memiliki mahkota berwarna kuning
7.	Akar rhizoma
8.	Tidak tahan dibawah terik matahari
Selain ciri-ciri diatas, khas dari tanaman kuping gajah yaitu warna daun hijau gelap seperti beludru, dengan tulang daun berupa urat-urat hijau muda keputihan yang membentuk pola hiasan berwarna perak.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Semak Rendah</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Anthurium crystallinum</span>                          
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