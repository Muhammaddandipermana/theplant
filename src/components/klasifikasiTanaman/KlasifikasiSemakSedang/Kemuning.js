import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakSedang/Kemuning.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Kemuning</div>
                  </div>
                  <p>Kemuning (Murraya paniculata) adalah tumbuhan yang berasal dari famili Rutaceae. Perdu yang masih bersaudara dengan daun kari ini memiliki nama daerah seperti; kemuning (Jw., Btw.), kamuning (Sd.), kajeni, kemuning, kemoning (Bl.), kamonèng (Mdr.), kemiuning (Smb.), kamuni (Bm.), sukik (Rt.), kamuning (Mnd., Mksr.), kamoni (Pmn.), palopo (Bgs.). eseki (Wtr.), tanasa (Aru), kamone (Br.), kamoni (Amb.)   
Kemuning biasa tumbuh liar menyemak belukar, di tepi hutan, atau ditanam sebagai tanaman hias dan tanaman pagar. Ia tumbuh hingga 12 meter, tetapi biasanya ia ditemui tumbuh berkisar 2 hingga 3 meter.  Ia berbunga sepanjang tahun. Berbentuk semak atau pohon kecil, bercabang banyak, batangnya keras dan beralur.  Helaian anak daun bertangkai berseling, bentuk bulat telur sungsang atau jorong, ujung dan pangkal runcing, tepi rata atau agak beringgit, panjang 2-7 cm, lebar 1-3 cm, permukaan licin mengkilap, warnanya hijau.  
Perbungaan terminal, majemuk, dan harum semerbak. Kelopak memiliki panjang 12-18 mm, berwarna putih.  Kelima kelopak bunga berbentuk bulat telur sampai lanset dengan panjang hingga 2 mm. Buahnya berdaging, bulat telur, berwarna merah sampai oranye,  dan berukuran hingga 1 inci panjangnya. 
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Semak Sedang</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Murraya paniculata</span>                          
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