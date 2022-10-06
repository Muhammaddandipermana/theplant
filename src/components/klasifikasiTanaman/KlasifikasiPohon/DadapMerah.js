import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/Pohon/DadapMerah.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Dadap Merah</div>
                  </div>
                  <p>Dadap atau cangkring adalah sejenis pohon anggota suku Fabaceae (=Leguminosae). Tanaman yang kerap digunakan sebagai pagar hidup dan peneduh ini memiliki banyak sebutan yang lain. Di antaranya dadap ayam, dadap laut (Jw.; dadap blendung (Sd.); theutheuk (Md.); dalungdung (Bal.); deris (Timor); galala itam (Maluku) dan lain-lain.
Juga dapdap, andorogat (Fil.); th'ong banz (Laos (Sino-Tibetan)); thong baan, thong laang laai, thong phueak (Thai); penglay-kathit (Burma); Indian coral tree, variegated coral tree, tiger's claw (Ingg.); arbre au corail, arbre immortel (Fr.) dan lain-lain. 
Pohon yang berukuran sedang, mencapai tinggi 15–20 m dan gemang 50–60 cm. Bagian kulit batang yang masih muda dan halus bergaris-garis vertikal hijau, abu-abu, coklat muda atau keputihan; batang biasanya dengan duri-duri tempel kecil (1–2 mm) yang berwarna hitam.   Tajuknya serupa payung atau membulat renggang, menggugurkan daun di musim kemarau.
Daun-daun dadap
Daun majemuk beranak daun tiga, hijau hingga hijau muda, poros daun dengan tangkai panjang 10–40 cm. Anak daun bundar telur terbalik, segitiga, hingga bentuk belah ketupat dengan ujung tumpul; anak daun ujung yang terbesar ukurannya, 9-25 × 10–30 cm.   
Bunga-bunga tersusun dalam tandan berbentuk kerucut, di samping atau di ujung ranting yang gundul, biasanya muncul tatkala daun berguguran, menarik banyak burung berdatangan untuk menyerbukinya. Mahkota berwarna merah jingga hingga merah gelap; benderanya 5,5-8 × 8 cm, berkuku pendek, tidak bergaris putih.    Polong tebal dan berwarna gelap, menyempit di antara biji-biji, 15–20 cm × 1.5–2 cm, berisi 5-10 butir biji berbentuk telur, coklat, merah atau ungu mengkilap. 

</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Pohon</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Leguminosae</span>                          
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