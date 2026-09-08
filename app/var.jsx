import React from "react";
import { Text, View } from "react-native";

export default function Var() {
    // const nama = "Ilmaan";
    // const angka = 14;

    // console.log(nama);
    // console.log(angka);
    // return(
    // <View>
    //     <Text>Nama siswa: {nama}</Text>
    //     <Text>Angka: {angka}</Text>
    // </View>
    // );
    // TESTING VARIABEL

    // const firstName = "Budi";
    // const lastName = "Santoso";
    // let isAktif = true;

    // console.log(`Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`);

    // return (
    //     <Text>Akun Atas Nama {firstName} {lastName} Status: {isAktif ? "Aktif" : "Tidak Aktif"}</Text>
    // );
    // SOAL NO 1

    // const rawUsername=" admin_smkn10 ";
    // const trimmedUsername = rawUsername.trim();
    // const cleanUsernameLength = trimmedUsername.length;

    // console.log(`Username baru: ${trimmedUsername}`);
    // console.log(`Jumlah Karakter: ${cleanUsernameLength}`);
    // return (
    //  <View>
    //     <Text>Username Asli: "{rawUsername}"</Text> 
    //     <Text>Username Bersih: "{trimmedUsername}"</Text>
    //     <Text>Jumlah Karakter: {cleanUsernameLength}</Text>
    //  </View>
    //);
    // SOAL NO 2

    // let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";

    // const indeksBuruk = komentar.indexOf("buruk");
    // const potonganKomentar = komentar.substring(0, 19);

    // console.log(`Indeks kata "buruk": ${indeksBuruk}`);
    // console.log(`Potongan komentar (0-19): "${potonganKomentar}"`);

    // return (
    //  <View>
    //     <Text>Komentar Asli: "{komentar}"</Text>
    //     <Text>Posisi indeks kata "buruk": {indeksBuruk}</Text>
    //     <Text>Potongan kalimat: "{potonganKomentar}"</Text>
    //  </View>
    // );
    // SOAL NO 3

    // const string1 = "diskon";
    // const string2 = "spesial50";
    // const gabunganString = string1.concat(string2);
    // const kodeKupon = gabunganString.toUpperCase();

    // console.log(`Kode Kupon: ${kodeKupon}`);

    // return (
    // <View>
    //     <Text>Bagian 1: {string1}</Text>
    //     <Text>Bagian 2: {string2}</Text>
    //     <Text>Hasil Kode Kupon: {kodeKupon}</Text>
    // </View>
    // );
    // SOAL NO 4

    // const hargaStr = "150000.50";
    // const stokStr = "25";
    // const hargaAngka = parseFloat(hargaStr);
    // const stokAngka = parseInt(stokStr);
    // const totalHarga = hargaAngka * stokAngka;

    // console.log(`Harga Satuan: ${hargaAngka}`);
    // console.log(`Jumlah Stok: ${stokAngka}`);
    // console.log(`Total Harga: ${totalHarga}`);

    // return (
    //     <View>
    //         <Text>Harga Satuan: {hargaAngka}</Text>
    //         <Text>Jumlah Stok: {stokAngka}</Text>
    //         <Text>Total Pendapatan: {totalHarga}</Text>
    //     </View>
    // );
    // SOAL NO 5

    // let totalBelanja = 250000;
    // totalBelanja -= 50000;

    // const pajak = totalBelanja * 0.1;
    // totalBelanja += pajak;

    // console.log(`Total Pembayaran Akhir: Rp${totalBelanja}`);

    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
    //             Struk Belanja Digital
    //         </Text>
    //         <Text>Belanja Awal: Rp 250.000</Text>
    //         <Text>Kupon Diskon: -Rp 50.000</Text>
    //         <Text>Pajak Layanan (10%): Rp {pajak}</Text>
        
    //         <Text style={{color: 'green'}}>
    //             Total Harus Dibayar: Rp {totalBelanja}
    //         </Text>
    //     </View>
    // );
    // SOAL NO 6

    // const inputUsia = "12";
    // const syaratUsia = 17;
    // const cekStrict = inputUsia === syaratUsia;
    // const cekLebihBesar = inputUsia >= syaratUsia;

    // console.log(`Hasil inputUsia === syaratUsia: ${cekStrict}`);
    // console.log(`Hasil inputUsia >= syaratUsia: ${cekLebihBesar}`);

    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text style={{ fontWeight: 'bold'}}>
    //             Hasil Validasi Usia
    //         </Text>
    //         <Text>Input Usia (String): "{inputUsia}"</Text>
    //         <Text>Syarat Usia (Number): {syaratUsia}</Text>
        
    //         <Text>
    //             Cek Strict (===) : {cekStrict ? "True" : "False"}
    //         </Text>
    //         <Text>
    //             Cek Standar (>=) : {cekLebihBesar ? "True" : "False"}
    //         </Text>
    //     </View>
    // );
    // SOAL NO 7

    // const isPasswordCorrect = true;
    // const isEmailVerified = true;
    // const isTombolAktif = isPasswordCorrect && isEmailVerified;

    // const isPasswordTest = true;
    // const isEmailTest = false;
    // const isTombolAktifTest = isPasswordTest && isEmailTest;

    // console.log(`Skenario 1 (Keduanya True): Tombol Aktif = ${isTombolAktif}`);
    // console.log(`Skenario 2 (Salah Satu False): Tombol Aktif = ${isTombolAktifTest}`);

    // return (
    //     <View>
    //         <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 15 }}>
    //             Sistem Keamanan Login
    //         </Text>

    //     <View>
    //         <Text style={{ fontWeight: 'bold' }}>Skenario 1 (Kondisi Ideal):</Text>
    //         <Text>Password Benar: {isPasswordCorrect ? "Ya" : "Tidak"}</Text>
    //         <Text>Email Terverifikasi: {isEmailVerified ? "Ya" : "Tidak"}</Text>
    //         <Text>
    //             Status Tombol: {isTombolAktif ? "BISA DITEKAN" : "TERKUNCI"}
    //         </Text>
    //     </View>

    //     <View>
    //         <Text style={{ fontWeight: 'bold' }}>Skenario 2 (Uji Coba Gagal):</Text>
    //         <Text>Password Benar: {isPasswordTest ? "Ya" : "Tidak"}</Text>
    //         <Text>Email Terverifikasi: {isEmailTest ? "Ya" : "Tidak"}</Text>
    //         <Text>
    //             Status Tombol: {isTombolAktifTest ? "BISA DITEKAN" : "TERKUNCI"}
    //         </Text>
    //     </View>
    // </View>
    // );
    // SOAL NO 8

    // const isNilaiTinggi = true;
    // const isJuaraLomba = false;

    // const berhakBeasiswa = isNilaiTinggi || isJuaraLomba;

    // console.log(`Nilai Akademik Tinggi: ${isNilaiTinggi}`);
    // console.log(`Juara Lomba Ekskul: ${isJuaraLomba}`);
    // console.log(`Berhak Mendapat Beasiswa: ${berhakBeasiswa}`);

    // return (
    //     <View>
    //         <Text>Kriteria Kelayakan Beasiswa SMK</Text>
    //         <Text>Nilai Akademik Tinggi: {isNilaiTinggi ? "Memenuhi" : "Tidak Memenuhi"}</Text>
    //         <Text>Juara Lomba Ekskul: {isJuaraLomba ? "Memenuhi" : "Tidak Memenuhi"}</Text>
    //         <Text>Status Akhir: {berhakBeasiswa ? "Layak Mendapat Beasiswa" : "Tidak Layak"}</Text>
    //     </View>
    // );
    // SOAL NO 9

    // const member = true;
    // let varBocor;

    // if (member === true) {
    //     let diskonLet = 0.2;
    //     var diskonVar = 0.3;
    
    //   varBocor = diskonVar;
      
    //   console.log (`(Di dalam blok) diskonLet: ${diskonLet}`);
    //   console.log (`(Di dalam blok) diskonVar: ${diskonVar}`);
    // }

    // console.log (`(Di luar blok) diskonVar: ${diskonVar}`);
    // // console.log(`(Di luar blok) diskonLet: ${diskonLet}`); ERROR

    // return (
    //   <View>
    //     <Text>Simulasi Block Scope (Let vs Var)</Text>
    
    //     <Text>1. Tes akses 'var' dari luar blok:</Text>
    //     <Text>Nilai diskonVar: {varBocor} (Berhasil bocor)</Text>
    
    //     <Text>2. Tes akses 'let' dari luar blok:</Text>
    //     <Text>Nilai diskonLet: ReferenceError (Aplikasi akan crash jika dijalankan)</Text>
    
    //     <Text>Kesimpulan: Selalu gunakan let/const agar variabel tidak bocor keluar dari blok if/for.</Text>
    //   </View>
    // );
    // SOAL NO 10
}