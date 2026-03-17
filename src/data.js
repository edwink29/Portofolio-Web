import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Educate1 from "/assets/educate/smp.jpeg";
import Educate2 from "/assets/educate/smk.jpeg";
import Educate3 from "/assets/educate/poltek.png";

export const listEducate = [
  {
    id: 1,
    gambar: Educate1,
    nama: "SMP Negeri 1 Jember",
    ket: "2017-2020",
    dad: "100",
  },
  {
    id: 2,
    gambar: Educate2,
    nama: "SMK Negeri 5 Jember - TKJ",
    ket: "2020-2023",
    dad: "300",
  },
  {
    id: 3,
    gambar: Educate3,
    nama: "Politeknik Negeri Jember",
    ket: "2023-Now",
    dad: "500",
  },
]

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/figma.png";
import Tools9 from "/assets/tools/arduino.png";
import Tools10 from "/assets/tools/html.png";
import Tools11 from "/assets/tools/css.jpeg";
import Tools12 from "/assets/tools/laravel.jpeg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "HTML",
    ket: "Lenguage",
    dad: "200",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "CSS",
    ket: "Lenguage",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Arduio IDE",
    ket: "Code Editor",
    dad: "1200",
  },
];

import Exper1 from "/assets/experience/experience1.jpeg"
import Exper2 from "/assets/experience/experience2.jpg"

export const listExperience = [
  {
    id: 1,
    gambar: Exper1,
    nama: "Internship IT Support at CV. Prakarsa Komputer Com",
    ket: "April 2022 - September 2022",
    dad: "600",
  },
  {
    id: 2,
    gambar: Exper2,
    nama: "Head of PSDA Robotics Student Activity Unit",
    ket: "January 2025 - September 2025",
    dad: "800",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Freelance Frontend Website POS Barokah Tani Dampit",
    ket: "January 2026 - March 2026",
    dad: "1000",
  },
]

import Achiv1 from "/assets/achievement/achiv1.png"
import Achiv2 from "/assets/achievement/achiv2.jpeg"
import Achiv3 from "/assets/achievement/achiv3.png"
import Achiv4 from "/assets/achievement/achiv4.png"

export const listAchievement = [
  {
    id: 1,
    gambar: Achiv4,
    nama: `Second Place in the "Best Application" Category at the 2023 TIF Exhibition`,
    ket: "2023",
    dad: "700",
  },
  {
    id: 2,
    gambar: Achiv3,
    nama: `First Place in the "Best Application" Category at the 2024 TIF Exhibition`,
    ket: "2024",
    dad: "900",
  },
  {
    id: 3,
    gambar: Achiv2,
    nama: `Second Place in the "Internet Of Things" Category at the Expo Pekan Mahasiswa TI 2025`,
    ket: "2025",
    dad: "1100",
  },
  {
    id: 4,
    gambar: Achiv1,
    nama: `Participants in the 2025 ABU Indonesia Robot Contest (KRAI) - Passed the National Selection`,
    ket: "2025",
    dad: "1300",
  },
]

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "RFID-based attendance website",
    desk: "Modern attendance system integrated with RFID technology for accurate and efficient real-time attendance recording.",
    tools: ["CSS", "Javascript", "Alpine", "Tailwind", "Laravel"],
    dad: "200",
    link: "https://pameran-jti.polije.ac.id/product/161/stipres-sistem-manajemen-presensi-stikes-panti-waluya-malang-berbasis-web-dan-android-menggunakan-rfid",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website-based patient queue system",
    desk: "A patient queue system designed to optimize the flow of healthcare services in a transparent and organized manner.",
    tools: ["CSS", "Javascript", "Alpine", "Tailwind", "Laravel"],
    dad: "300",
    link: "https://pameran-jti.polije.ac.id/product/466/implementasi-deep-learning-menggunakan-metode-convolutional-neural-network-cnn-untuk-klasifikasi-penyakit-kulit-manusia-akibat-infeksi-jamur",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Point of Sale - Barokah Tani Dampit",
    desk: "The cashier application (POS) is designed for transaction processes and stock management and transaction reports.",
    tools: ["CSS", "Javascript", "Alpine", "Tailwind", "Laravel"],
    dad: "400",
    link: "https://github.com/DiegaSyahputra/smilingshop",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "RossyWinjaya Grocery Store Cashier Application",
    desk: "This cashier desktop application has transaction features, sales and purchase reports.",
    tools: ["Java", "JasperReports", "Swing"],
    dad: "500",
    link: "https://pameran-jti.polije.ac.id/x23241/product/56/aplikasi-kasir-toko-kelontong-rossywinjaya-berbasis-dekstop",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Portfolio",
    desk: "This portfolio website was built as a learning medium for me to learn the react js framework.",
    tools: ["React", "Tailwind"],
    dad: "600",
    link: "",
  }
];
