import React from "react";
import { Text, View } from "react-native";

export default function Arr() {
    // const gudang = [101, 102, 103, 104, 105];

    // console.log(gudang[4]);

    // return (
    //     <View>
    //         <Text>Manajemen Stok Gudang</Text>
    //         <Text>Daftar Kode Barang: {gudang.join(', ')}</Text>
    //         <Text>Barang pada Indeks ke-4: {gudang[4]}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 1

    // const nilaiUjian = [78, 90, 65, 88, 92, 70];
    // const nilaiUrut = [...nilaiUjian].sort((a, b) => a - b);

    // console.log("Nilai Acak: ", nilaiUjian);
    // console.log("Nilai Urut: ", nilaiUrut);

    // return (
    //     <View>
    //         <Text>Daftar Nilai Sebelum Diurutkan: {nilaiUjian.join(', ')}</Text>
    //         <Text>Daftar Nilai Terurut (Kecil ke Besar): {nilaiUrut.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 2

    // let antreanVaksin = [];
    // antreanVaksin.push("Andi", "Budi", "Siti");
    // const antreanSetelahPush = [...antreanVaksin];
    // const pesertaKeluar = antreanVaksin.pop();

    // console.log("Kondisi Akhir Antrean: ", antreanVaksin);

    // return (
    //     <View>
    //         <Text>Antrean Setelah Pendaftaran: {antreanSetelahPush.join(', ')}</Text>
    //         <Text>Peserta yang Dikeluarkan (Pop): {pesertaKeluar}</Text>
    //         <Text>Sisa Kondisi Akhir Antrean: {antreanVaksin.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 3

    // let darurat = ["Kebakarang", "Kecelakaan"];
    // const antreanAwal = [...darurat];
    // darurat.unshift("Medis Darurat");
    // const setelahUnshift = [...darurat];
    // const laporanDiproses = darurat.shift();

    // console.log("Hasil Akhir: ", darurat);

    // return (
    //     <View>
    //         <Text>Antrean Awal: {antreanAwal.join(', ')}</Text>
    //         <Text>Setelah Tambah Prioritas: {setelahUnshift.join(', ')}</Text>
    //         <Text>Laporan Diproses: {laporanDiproses}</Text>
    //         <Text>Hasil Akhir Antrean: {darurat.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 4

    // let transaksi = [1000, 2500, 3200, 4100, 5000];
    // const sampelData = transaksi.slice(1, 4);

    // console.log("Data Master Asli: ", transaksi);
    // console.log("Hasil Sampel Data: ", sampelData);

    // return (
    //     <View>
    //         <Text>Data Transaksi Master: {transaksi.join(', ')}</Text>
    //         <Text>Hasil Irisan Data: {sampelData.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 5

    // let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];
    // const menuAwal = [...menu];
    // menu.splice(2, 1, "Spaghetti", "Salad");

    // console.log("Daftar Menu Baru: ", menu);

    // return (
    //     <View>
    //         <Text>Menu Awal: {menuAwal.join(', ')}</Text>
    //         <Text>Menu Setelah Diperbarui: {menu.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 6

    // let judul = "belajar pemrograman perangkat bergerak smk";
    // const arrayKata = judul.split(" ");
    // const slugUrl = arrayKata.join("-");

    // console.log("Array Kata: ", arrayKata);
    // console.log("Slug URL: ", slugUrl);

    // return (
    //     <View>
    //         <Text>Judul Asli: {judul}</Text>
    //         <Text>Hasil Split menjadi Array: {JSON.stringify(arrayKata)}</Text>
    //         <Text>Bentuk Slug URL Akhir: {slugUrl}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 7

    // let skorSiswa = [98, 85, 90, 75, 80];
    // const [juaraSatu, juaraDua, juaraTiga] = skorSiswa;

    // console.log("Juara 1: ", juaraSatu);
    // console.log("Juara 2: ", juaraDua);
    // console.log("Juara 3: ", juaraTiga);

    // return (
    //     <View>
    //         <Text>Skor Seluruh Siswa: {skorSiswa.join(', ')}</Text>
    //         <Text>Juara 1: {juaraSatu}</Text>
    //         <Text>Juara 2: {juaraDua}</Text>
    //         <Text>Juara 3: {juaraTiga}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 8

    // let semuaNilai = [95, 88, 90, 85, 78, 82];
    // const [nilaiUtama, ...sisaNilai] = semuaNilai;

    // console.log("Nilai Utama: ", nilaiUtama);
    // console.log("Sisa Nilai: ", sisaNilai);

    // return (
    //     <View>
    //         <Text>Semua Nilai Awal: {semuaNilai.join(', ')}</Text>
    //         <Text>Nilai Utama: {nilaiUtama}</Text>
    //         <Text>Sisa Nilai: {sisaNilai.join(', ')}</Text>
    //     </View>
    // );
    // SOAL ARRAY NO 9

    // let keranjangA = ["Sepatu", "Baju"];
    // let keranjangB = ["Tas", "Topi"];
    // const keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];

    // console.log("Keranjang Utama: ", keranjangUtama);

    // return (
    //     <View>
    //         <Text>Isi Keranjang A: {keranjangA.join(', ')}</Text>
    //         <Text>Isi Keranjang B: {keranjangB.join(', ')}</Text>
    //         <Text>Keranjang Utama Gabungan: {keranjangUtama.join(', ')}</Text>
    //     </View>
    // );
}