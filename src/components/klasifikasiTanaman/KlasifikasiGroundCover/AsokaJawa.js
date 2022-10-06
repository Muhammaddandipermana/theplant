import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/GroundCover/AsokaJawa.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Asoka Jawa</div>
                  </div>
                  <p>Bunga asoka Jawa memiliki nama latin Ixora javanica.
Berasal dari Pulau Jawa, bunga asoka dapat hidup di daerah yang beriklim tropis.
Jenis bunga asoka ini terdiri dari beberapa bagian yakni kelopak bunga, mahkota, benang sari, kepala sari, dan tangkai bunga.
Soal warna, bagian bunganya memiliki warna merah dengan bagian ujung berwarna oranye.
Bagian kelopak biasanya akan berkumpul menjadi satu pada bagian pucuk tanaman.
Di sisi lain, bagian mahkota pada tanaman asoka memiliki sebuah ruang kecil yang di dalamnya terdapat cairan manis seperti madu.
Jika kamu tertarik menanam bunga asoka ini, pastikan tanaman bunganya terkena sinar matahari langsung dan pengairan yang cukup.
Ini dilakukan agar tanamannya bisa tumbuh dengan baik.
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Ground Cover</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>latin Ixora javanica</span>                          
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