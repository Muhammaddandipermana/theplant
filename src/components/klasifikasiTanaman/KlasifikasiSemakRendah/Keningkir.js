import Header from "../../Header";


function BasicExample() {
  return (
    <>
    <Header />
    <div className="container single-product">
    <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                <img src="/images/SemakRendah/Keningkir.jpg" width={'262px'} height={'196px'} alt="Third slide "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">Keningkir</div>
                  </div>
                  <p>Kenikir (Cosmos) adalah tumbuhan tropis anggota suku kenikir-kenikiran (Asteraceae) yang berasal dari Amerika Latin dan Amerika Tengah,  tetapi tumbuh liar dan mudah didapati di Florida, Amerika Serikat, serta di negara-negara Asia Tenggara dan Asia Selatan. Spesies ini dibawa ke Asia Tenggara melalui Filipina oleh penjelajah Spanyol di abad ke-16.  Tumbuhan dengan bunga berwarna ungu ini dijadikan sebagai sayuran lalap yang populer di Indonesia. Di Malaysia daun mudanya dimakan mentah bersama nasi, atau dicacah dan dicampur dengan budu, sambal terasi, tempoyak, serta cincalok. Spesies ini disebut ulam raja di Malaysia yang berarti salad raja. 
Kenikir adalah tumbuhan tahunan yang berbatang pipa dengan garis-garis yang membujur. Tingginya dapat mencapai 1 m dan daunnya bertangkai panjang dan duduk daunnya berhadapan, sehingga terbagi menyirip menjadi 2-3 tangkai.  Baunya seperti damar apabila diremas. Bunganya tersusun pada bongkol yang banyak terdapat di ujung batang dan pada ketiak daun-daun teratas, berwarna merah  berbintik-bintik kuning di tengah-tengahnya, dan bijinya berbentuk paruh. 
</p>
                  <div className="product-count col-lg-7 ">                   
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6> 
                        <span>Semak Rendah</span>  
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nama Latin</h6>                    
                        <span>Cosmos</span>                          
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