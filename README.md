# AC-Monitoring-Web-UI-ver-1
Program AC Monitoring (React - Firestore). Kasus aplikasi versi ini: hardware level 0 AC Monitoring<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Software
1. Clone (atau download zip)
2. Dengan terminal Powershell yang terdapat di dalam VSCode, pada direktori root (yang ada README.md nya - seharusnya tidak perlu diubah bila folder ini yang dibuka di VSCode), ketik ```npm install```
3. Tunggu proses install selesai, lalu run React App pada localhost dengan  ```npm start```
6. Cek di browser, http://localhost:3000 untuk UI React.<br />
    Sementara ini, program dibuat untuk single user. Login dengan username "admin" dan password "labindi".
    
## Menu yang Tersedia
1. Home <br /> Dashboard yang memuat kontrol serta data-data AC saat ini.
2. Event <br /> WIP
3. Parameter <br /> WIP
4. Status <br /> WIP
5. History <br /> WIP

## Link Router yang Digunakan
1. [AC Monitoring](http://localhost:3000), sebagai aplikasi UI utama.
2. [Firestore DB](https://test-db-4aa92.firebaseio.com), sebagai sumber data dashboard

## Changelog
Lihat CHANGELOG.md.

## Useful Sources: 
Silakan cek file DAFPUS.md untuk mengetahui sumber di balik trik-trik pemrograman yang telah dipelajari. Catatan : file ini dilanjut dari battery-monitoring.