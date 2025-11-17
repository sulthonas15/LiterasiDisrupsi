# LiterasiDisrupsi 🛡️

![Project Status](https://img.shields.io/badge/Status-Beta_v2.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> **Platform Intelijen Digital & Anti-Hoaks**
> 
> Sebuah inisiatif web interaktif untuk memberdayakan pemuda Indonesia dalam melawan gelombang misinformasi melalui pendekatan gamifikasi dan analisis data.

---

## 📖 Tentang Proyek

**LiterasiDisrupsi** bukan sekadar portal berita, melainkan *tools* edukasi. Website ini dirancang untuk melatih logika kritis pengguna (User) dalam membedakan fakta dan manipulasi digital.

Mengusung tema "Intelijen Digital", pengguna diajak berperan sebagai agen yang harus menyelesaikan misi verifikasi, mempelajari teknik investigasi digital (OSINT), dan memantau tren hoaks terkini.

## ✨ Fitur Utama

### 1. 🕵️ Simulasi Cek Fakta (AI Simulation)
Antarmuka simulasi untuk memverifikasi tautan atau teks mencurigakan. Memberikan pengalaman visual bagaimana sistem AI menganalisis pola bahasa provokatif.

### 2. 🎮 Gamifikasi Literasi (XP & Leveling)
Belajar tanpa bosan. Pengguna mendapatkan *Experience Points* (XP) setiap kali menyelesaikan modul atau kuis.
- **Level System:** Naikkan pangkat dari *Novice* ke *Elite Agent*.
- **Progress Tracking:** Bar visual untuk memantau kemajuan belajar.

### 3. 🧠 Kuis Interaktif & Logika
Tantangan studi kasus nyata (Real-world cases):
- Analisis Judul Clickbait vs Fakta.
- Identifikasi Visual Forensik (Deepfake vs Foto Asli).
- Timer hitung mundur untuk melatih pengambilan keputusan cepat.

### 4. 📊 Dashboard Tren Data
Visualisasi data berbasis grafik untuk memantau penyebaran isu hoaks berdasarkan kategori (Kesehatan, Politik, SARA) secara *real-time* (simulasi).

### 5. 📚 Modul Pembelajaran (OSINT Dasar)
Materi teknis yang dikemas ringan mengenai:
- *Reverse Image Search*
- Deteksi Deepfake
- Geolocation Dasar

---

## 🛠️ Teknologi

Proyek ini dibangun menggunakan teknologi web modern yang ringan dan performa tinggi:

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core** | HTML5 | Semantic Markup |
| **Styling** | Tailwind CSS | Utility-first framework (via CDN) |
| **Logic** | JavaScript (ES6+) | Vanilla JS (Tanpa framework berat) |
| **Visual** | Chart.js | Library visualisasi data interaktif |
| **Icons** | FontAwesome 6 | Ikon vektor |
| **Fonts** | Google Fonts | Space Grotesk (Headings) & Inter (Body) |

---

## 📂 Struktur Direktori

Agar mudah dikelola, proyek ini menggunakan struktur standar:

```text
literasi-disrupsi/
├── assets/
│   ├── css/
│   │   └── style.css       # Kustomisasi animasi & efek visual
│   ├── js/
│   │   └── script.js       # Logika gamifikasi & interaksi DOM
│   └── images/             # Aset gambar (jika ada)
├── index.html              # Landing Page & Dashboard
├── quiz.html               # Halaman Kuis Interaktif
├── module.html             # Halaman Materi Belajar
├── auth.html               # Halaman Login/Register
└── README.md               # Dokumentasi Proyek
