if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('sw.js')
            .then(function(){
                console.log('Pendaftaran service worker berhasil');
            })
            .catch(function(){
                console.log('Pendaftaran service worker gagal');
            })
    })
} else {
    console.log('Browser tidak mendukung service worker');
}

$(document).ajaxStart(function() { Pace.restart(); });
$('#acak').on('click', (e) => {
    e.preventDefault();
    Pace.restart();
    $('#hasil').show();
    fetch('https://api.banghasan.com/quran/format/json/acak').then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data.surat)
        let html = `
        <div class="card border-warning mb-3">
            <div class="card-header font-weight-bold">QS ${data.surat.nama} : ${data.surat.ayat}</div>
            <div class="card-body">
                <h5 class="card-title text-right">${data.acak.ar.teks}</h5>
               

                <hr>

                <button class="btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#detailSurat" aria-expanded="false" aria-controls="detailSurat">Detail Surat</button>
                
                <div class="collapse mt-3" id="detailSurat">
                    <div class="card card-body">
                        <table style="direction:rtl;text-align:center;" class="table">
                            <tr>
                                <th>اسم السورة</th>
                                <td>${data.surat.nama} / ${data.surat.asma}</td>
                            </tr>
                            <tr>
                                <th>رقم الاية</th>
                                <td>${data.surat.ayat}</td>
                            </tr>
                           
                            <tr>
                                <th>رقم السورة</th>
                                <td>${data.surat.nomor}</td>
                            </tr>
                            <tr>
                                <th>مكان نزول السورة</th>
                                <td>${data.surat.type}</td>
                            </tr>
                        </table>
                       
                    </div>
                </div>
            </div>
        </div>
        `;
        $('#hasil').html(html)
    })
})