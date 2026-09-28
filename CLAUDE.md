# Project Guidelines: Anti-Slop & Poolapack Care Standards

Panduan ini diadopsi dari aturan [anti-slop](https://github.com/miqdadbadjuber/anti-slop) oleh Miqdad Badjuber, disesuaikan khusus untuk repository **Poolapack Care (Nuxt 3 + Tailwind CSS + Vue 3)**.

---

## 1. Anti-Slop: Prinsip UI & Desain (No AI Aesthetic)

Hindari pola visual klise dan generik yang sering dihasilkan oleh AI:

- **No Generic Purple/Indigo Neon Gradients**:
  - Jangan gunakan gradien ungu/indigo/violet ala template AI SaaS generik.
  - Gunakan palet resmi Poolapack: Amber/Kuning (`#F8C031`, `#F5B400`, `bg-[#FFFBEB]`), neutral/slate bersih, dan aksen fungsional.
- **No Unnecessary Glow & Blurs**:
  - Jangan menambahkan ornamen seperti `blur-3xl`, `bg-purple-500/20`, atau lingkaran glow neon di latar belakang tanpa alasan desain yang jelas.
- **No Overused Glassmorphism**:
  - Hindari `backdrop-blur-md bg-white/10` pada setiap elemen secara berlebihan.
  - Gunakan permukaan solid yang bersih, kartu dengan border kontras yang jelas (`border-neutral-200`), dan soft shadow yang natural.
- **Hierarki Border Radius yang Masuk Akal**:
  - Hindari memberikan `rounded-3xl` pada semua elemen tanpa hierarki.
  - Gunakan radius yang proporsional (misal: `rounded-lg` atau `rounded-xl` untuk kartu, `rounded-md` untuk tombol/input kecil).
- **No Decorative Sparkles / Emojis**:
  - Jangan menambahkan emoji kilauan (✨, 🚀, 🔥) atau badge kosong seperti "AI Powered ✨" di header atau tombol.
- **Copywriting Nyata & Natural (No AI Marketing Buzzwords)**:
  - Jangan gunakan kata-kata klise AI: *"Revolutionize"*, *"Seamless"*, *"Delve"*, *"Elevate"*, *"Cutting-edge"*, *"Game-changer"*, *"Tapestry"*, *"Testament"*.
  - Gunakan Bahasa Indonesia yang lugas, manusiawi, ramah, dan jelas sesuai konteks marketplace Poolapack.
- **Aksesibilitas & Responsif Nyata**:
  - Kontras teks harus memenuhi standar (WCAG AA).
  - Setiap elemen interaktif wajib memiliki state yang jelas (`hover`, `active`, `focus-visible`).
  - Desain harus benar-benar responsif (mobile-first), bukan sekadar mengecilkan tampilan desktop.

---

## 2. Anti-Slop: Prinsip Kode & Arsitektur (No Code Slop)

- **Minimal Diffs & Surgical Edits**:
  - Hanya ubah baris kode yang relevan dengan tugas yang diminta.
  - Jangan menulis ulang satu file penuh jika perubahannya hanya 5 baris.
  - Jangan memformat ulang spasi/indentasi file lain yang tidak diminta.
- **No Obvious / Useless Comments**:
  - Hapus komentar yang hanya mengulang apa yang dilakukan kode (contoh buruk: `// import Vue`, `// function to handle click`, `// return data`).
  - Hanya tulis komentar jika ada alasan bisnis non-obvious atau workaround teknis yang butuh penjelasan ("why", bukan "what").
- **KISS & YAGNI (No Over-Engineering)**:
  - Jangan membuat 4 layer abstraksi, factory pattern, generic wrapper, atau utility helper berlebihan untuk fitur sederhana.
  - Tulis kode langsung, sederhana, dan mudah dibaca.
- **No Unnecessary Packages**:
  - Jangan menginstal dependensi npm baru jika bisa diselesaikan dengan native JavaScript/Web APIs atau dependensi yang sudah ada di `package.json`.
- **Nuxt 3 & Vue 3 Idiomatic**:
  - Gunakan Vue 3 `<script setup lang="ts">` dan Composition API.
  - Manfaatkan auto-imports bawaan Nuxt 3 (`ref`, `computed`, `useRoute`, `useRouter`, dll.).
  - Gunakan Tailwind CSS utility classes secara konsisten dengan palet yang sudah ada di `tailwind.config.ts`.
- **Penanganan Error yang Nyata**:
  - Hindari `try-catch` kosong yang menelan error diam-diam.
  - Berikan umpan balik (feedback UI/pesan error) yang informatif kepada pengguna jika request atau proses gagal.

---

## 3. Gaya Komunikasi AI (No Sycophancy / Basa-Basi)

- Jawab langsung ke inti masalah tanpa pembuka berlebihan (*"Tentu saja! Saya akan dengan senang hati membantu Anda..."*).
- Berikan penjelasan ringkas dan tunjukkan hasil nyata.
- Jika ada pendekatan yang lebih baik atau potensi masalah pada kode/desain, sampaikan secara objektif dan jujur.
