import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/Rumput/RumputManila.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Rumput Manila</div>
                  </div>
                  <p>Zoysia matrella (L.) Merr., umumnya dikenal sebagai rumput Manila , adalah spesies rumput abadi yang membentuk tikar, asli dari pesisir beriklim Asia tenggara dan Australasia utara , dari Jepang selatan( Kepulauan Ryukyu ), Taiwan , dan Cina selatan( Guangdong , Hainan ) selatan melalui Thailand , Indonesia , Malaysia dan Filipina ke Australia utara ( timur laut Queensland ), dan barat ke Kepulauan Cocosdi bagian timur Samudera Hindia .
Nama umum lainnya termasuk rumput Korea , Manila templegrass , rumput siglap (setelah suatu daerah di Singapura), rumput kuil , rumput Mascarene , harishiba , hierba Manila ( Spanyol ), karpet Jepang , jukut kakawatan hijau ( Sunda ), rebha sekem-sekeman ( Madura ). ) , burikit (di Seram ), rumput siglap ( Melayu ), damong-alat , barit-baritan ( Tagalog), malakuwerdas (Pangasinan), ya-nuannoi (Thai).[3]
Ini membentuk luas, beludru, tikar hijau, menyebar dengan kuat oleh stolon , atau kadang-kadang oleh rimpang , setelah didirikan. Z . matrella tumbuh di elevasi rendah lebih menyukai tanah berpasir di mana rumput lain tumbuh dengan buruk. Batangnya ramping dan bersujud, panjangnya berkisar antara 5–25 cm. Daunnya berselang -seling, diproduksi pada interval 1,5–3 cm di sepanjang batang; mereka ramping, panjang 2–10 cm dan lebar 1-3 mm. Bunganya berwarna kehijauan, diproduksi pada ras yang tegak dengan panjang 6–35 mm dengan bunga tunggal 2-3,5 mm di setiap bulir .
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Rumput</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Zoysia matrella</span>                          
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