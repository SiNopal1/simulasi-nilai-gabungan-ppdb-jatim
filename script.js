const form = document.getElementById('form');

// 0 = Kemendikbud
// 1 = Kemenag

form.addEventListener('submit', (e) => {
    e.preventDefault();
    hitung();
});

function average(){
    pkn = (pkn1 + pkn2 + pkn3 + pkn4 + pkn5)/5
    indo = (indo1 + indo2 + indo3 + indo4 + indo5)/5
    mtk = (mtk1 + mtk2 + mtk3 + mtk4 + mtk5)/5
    ipa = (ipa1 + ipa2 + ipa3 + ipa4 + ipa5)/5
    ips = (ips1 + ips2 + ips3 + ips4 + ips5)/5
    inggris = (inggris1 + inggris2 + inggris3 + inggris4 + inggris5)/5

    rapor = (agama + pkn + indo + mtk + ipa + ips + inggris)/7
    nilaigabungan = (0.5 * rapor) + (0.3 * indeks) + (0.2 * akreditasi)
    document.getElementById("nilai-akhir").innerHTML = nilaigabungan
}

function hitung() {
    indeks = parseInt(document.getElementById("8-1").value)
    akreditasi = parseInt(document.getElementById("8-2").value)

    if (tick == 0) {
        agama1 = parseInt(document.getElementById("1-1").value)
        agama2 = parseInt(document.getElementById("1-2").value)
        agama3 = parseInt(document.getElementById("1-3").value)
        agama4 = parseInt(document.getElementById("1-4").value)
        agama5 = parseInt(document.getElementById("1-5").value)

        pkn1 = parseInt(document.getElementById("2-1").value)
        pkn2 = parseInt(document.getElementById("2-2").value)
        pkn3 = parseInt(document.getElementById("2-3").value)
        pkn4 = parseInt(document.getElementById("2-4").value)
        pkn5 = parseInt(document.getElementById("2-5").value)

        indo1 = parseInt(document.getElementById("3-1").value)
        indo2 = parseInt(document.getElementById("3-2").value)
        indo3 = parseInt(document.getElementById("3-3").value)
        indo4 = parseInt(document.getElementById("3-4").value)
        indo5 = parseInt(document.getElementById("3-5").value)

        mtk1 = parseInt(document.getElementById("4-1").value)
        mtk2 = parseInt(document.getElementById("4-2").value)
        mtk3 = parseInt(document.getElementById("4-3").value)
        mtk4 = parseInt(document.getElementById("4-4").value)
        mtk5 = parseInt(document.getElementById("4-5").value)

        ipa1 = parseInt(document.getElementById("5-1").value)
        ipa2 = parseInt(document.getElementById("5-2").value)
        ipa3 = parseInt(document.getElementById("5-3").value)
        ipa4 = parseInt(document.getElementById("5-4").value)
        ipa5 = parseInt(document.getElementById("5-5").value)

        ips1 = parseInt(document.getElementById("6-1").value)
        ips2 = parseInt(document.getElementById("6-2").value)
        ips3 = parseInt(document.getElementById("6-3").value)
        ips4 = parseInt(document.getElementById("6-4").value)
        ips5 = parseInt(document.getElementById("6-5").value)

        inggris1 = parseInt(document.getElementById("7-1").value)
        inggris2 = parseInt(document.getElementById("7-2").value)
        inggris3 = parseInt(document.getElementById("7-3").value)
        inggris4 = parseInt(document.getElementById("7-4").value)
        inggris5 = parseInt(document.getElementById("7-5").value)

        agama = (agama1 + agama2 + agama3 + agama4 + agama5)/5
        average()
    } else if(tick == 1){
        qurdis1 = parseInt(document.getElementById("1-1-1").value)
        qurdis2 = parseInt(document.getElementById("1-1-2").value)
        qurdis3 = parseInt(document.getElementById("1-1-3").value)
        qurdis4 = parseInt(document.getElementById("1-1-4").value)
        qurdis5 = parseInt(document.getElementById("1-1-5").value)

        akidah1 = parseInt(document.getElementById("1-2-1").value)
        akidah2 = parseInt(document.getElementById("1-2-2").value)
        akidah3 = parseInt(document.getElementById("1-2-3").value)
        akidah4 = parseInt(document.getElementById("1-2-4").value)
        akidah5 = parseInt(document.getElementById("1-2-5").value)

        fikih1 = parseInt(document.getElementById("1-3-1").value)
        fikih2 = parseInt(document.getElementById("1-3-2").value)
        fikih3 = parseInt(document.getElementById("1-3-3").value)
        fikih4 = parseInt(document.getElementById("1-3-4").value)
        fikih5 = parseInt(document.getElementById("1-3-5").value)

        ski1 = parseInt(document.getElementById("1-4-1").value)
        ski2 = parseInt(document.getElementById("1-4-2").value)
        ski3 = parseInt(document.getElementById("1-4-3").value)
        ski4 = parseInt(document.getElementById("1-4-4").value)
        ski5 = parseInt(document.getElementById("1-4-5").value)

        pkn1 = parseInt(document.getElementById("2-1").value)
        pkn2 = parseInt(document.getElementById("2-2").value)
        pkn3 = parseInt(document.getElementById("2-3").value)
        pkn4 = parseInt(document.getElementById("2-4").value)
        pkn5 = parseInt(document.getElementById("2-5").value)

        indo1 = parseInt(document.getElementById("3-1").value)
        indo2 = parseInt(document.getElementById("3-2").value)
        indo3 = parseInt(document.getElementById("3-3").value)
        indo4 = parseInt(document.getElementById("3-4").value)
        indo5 = parseInt(document.getElementById("3-5").value)

        mtk1 = parseInt(document.getElementById("4-1").value)
        mtk2 = parseInt(document.getElementById("4-2").value)
        mtk3 = parseInt(document.getElementById("4-3").value)
        mtk4 = parseInt(document.getElementById("4-4").value)
        mtk5 = parseInt(document.getElementById("4-5").value)

        ipa1 = parseInt(document.getElementById("5-1").value)
        ipa2 = parseInt(document.getElementById("5-2").value)
        ipa3 = parseInt(document.getElementById("5-3").value)
        ipa4 = parseInt(document.getElementById("5-4").value)
        ipa5 = parseInt(document.getElementById("5-5").value)

        ips1 = parseInt(document.getElementById("6-1").value)
        ips2 = parseInt(document.getElementById("6-2").value)
        ips3 = parseInt(document.getElementById("6-3").value)
        ips4 = parseInt(document.getElementById("6-4").value)
        ips5 = parseInt(document.getElementById("6-5").value)

        inggris1 = parseInt(document.getElementById("7-1").value)
        inggris2 = parseInt(document.getElementById("7-2").value)
        inggris3 = parseInt(document.getElementById("7-3").value)
        inggris4 = parseInt(document.getElementById("7-4").value)
        inggris5 = parseInt(document.getElementById("7-5").value)

        qurdis = (qurdis1 + qurdis2 + qurdis3 + qurdis4 + qurdis5)/5
        akidah = (akidah1 + akidah2 + akidah3 + akidah4 + akidah5)/5
        fikih = (fikih1 + fikih2 + fikih3 + fikih4 + fikih5)/5
        ski = (ski1 + ski2 + ski3 + ski4 + ski5)/5

        agama = (qurdis + akidah + fikih + ski)/4
        average()
    }
}

function change() {
    if (tick == 1) {
        window.location.href = "index.html"
    } else if (tick == 0) {
        window.location.href = "madrasah.html"
    }
}
