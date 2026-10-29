const PORTFOLIO_DATA = {
  /* ──────────── Personal Info ──────────── */
  personal: {
    name: "Astifa Deswanti Talosi",
    title: "Data Analyst",
    email: "astifadest@gmail.com",
    phone: "+62 812 7696 1345",
    location: "Depok, Jawa Barat, Indonesia",
    education: "S1 Sistem Informasi, Universitas Bina Sarana Informatika",
    photo: "image/astifa3.jpg",
    cvFile: "https://drive.google.com/file/d/1i5W-b4ppZePC-EWNLVKmspzbCqM48-cs/view?usp=drive_link",
    bio: [
      `Lulusan baru S1 Sistem Informasi dengan pengalaman sebagai Data Analyst. Memiliki ketertarikan pada pengolahan data, analisis, serta visualisasi data untuk mendukung berbagai kebutuhan profesional.`,
      `Terampil menggunakan Microsoft Excel untuk pengolahan data, administrasi, dan penyusunan laporan, serta SQL untuk mengolah data dari database PostgreSQL melalui DBeaver. Berpengalaman mengembangkan dashboard untuk memantau kinerja bisnis dan aktivitas operasional menggunakan Microsoft Excel, Power BI, Tableau, Data Studio, dan Grafana. Selain itu, berpengalaman mengimplementasikan proses ETL menggunakan Pentaho Data Integration (PDI) untuk membangun data warehouse dan data mart.`,
      `Memiliki sertifikasi kompetensi serta telah menyelesaikan berbagai pelatihan profesional di bidang analisis data, visualisasi data, dan teknologi terkait untuk terus mengembangkan kompetensi di bidang data.`,

    ],
    social: {
      github: "https://github.com/astifadest",
      linkedin: "http://linkedin.com/in/astifadeswantitalosi",
      instagram: "https://www.instagram.com/astifadest?xtok=MTV0aWhpOHAxcWN3eQ==",
    },
  },

  /* ──────────── Navigation ──────────── */
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],

  /* ──────────── Experience ────────────
     Satu array untuk semua pengalaman, dibedakan lewat `category`
     (id harus sama dengan id di experienceCategories).
     `org` opsional: hapus barisnya kalau cuma mau role + tahun. */
  experienceCategories: [
    { id: "work", label: "Magang" },
    { id: "organization", label: "Organisasi" },
  ],

  experience: [
    {
      org: "PT Mega Kreasi Tech",
      role: "Data Analyst – Magang",
      year: "Agustus 2025 – Oktober 2025",
      category: "work",
    },
    {
      org: "Himpunan Mahasiswa Sistem Informasi UBSI",
      role: "Anggota Divisi Pendidikan",
      year: "Maret 2024 – Maret 2025",
      category: "organization",
    },
    {
      org: "PT Mitra Talenta Grup (Celerates)",
      role: "Data Analyst & Business Intelligence – Studi Independen",
      year: "Agustus 2024 – Desember 2024",
      category: "work",
    },
    {
      org: "Lembaga Penelitian dan Pengabdian Masyarakat UBSI",
      role: "Tim Tutor",
      year: "Oktober 2022",
      category: "organization",
    },
  ],

  /* ──────────── Technical Skills ──────────── */
  skillCategories: [
    { id: "all", label: "All" },
    { id: "analysis", label: "Data Analysis & Visualization" },
    { id: "query", label: "Query Language" },
    { id: "dbms", label: "Database Management Systems" },
    { id: "dbtool", label: "Database Management Tools" },
    { id: "etl", label: "ETL Tools" },
  ],

  skills: [
    // Data Analysis & Visualization Tools
    { name: "Microsoft Excel", icon: "", gradient: "from-emerald-500 to-green-700", category: "analysis", imgSrc: "https://api.iconify.design/mdi/microsoft-excel.svg?color=%23ffffff" },
    { name: "Power BI", icon: "", gradient: "from-gray-700 to-gray-900", category: "analysis", imgSrc: "https://api.iconify.design/logos/microsoft-power-bi.svg" },
    { name: "Tableau", icon: "", gradient: "from-orange-500 to-red-600", category: "analysis", imgSrc: "https://api.iconify.design/cib/tableau.svg?color=%23ffffff" },
    { name: "Data Studio", icon: "", gradient: "from-blue-900 to-slate-900", category: "analysis", imgSrc: "/image/ic_data_studio.svg" },
    { name: "Grafana", icon: "", gradient: "from-orange-900 to-stone-900", category: "analysis", imgSrc: "https://api.iconify.design/logos/grafana.svg" },

    // Query Language
    { name: "SQL", icon: "fa-solid fa-database", gradient: "from-sky-500 to-blue-700", category: "query", isFA: true },

    // Database Management Systems
    { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark", gradient: "from-blue-600 to-indigo-800", category: "dbms" },

    // Database Management Tools
    { name: "DBeaver", icon: "", gradient: "from-amber-700 to-orange-900", category: "dbtool", imgSrc: "https://api.iconify.design/simple-icons/dbeaver.svg?color=%23ffffff" },

    // Data Warehouse & ETL Tools
    { name: "Pentaho Data Integration", icon: "fa-solid fa-diagram-project", gradient: "from-red-500 to-red-700", category: "etl", isFA: true },
  ],

  /* ──────────── Projects ──────────── */
  projects: [
    {
      title: "Dashboard HR Analytics",
      // description: "This website is designed to make it easier for customers to order photobooth services in a practical and organized manner. Through this system, the process of ordering and managing photobooth services becomes more efficient.",
      image: "image/Dashboard HR Analytics.png",
      badge: { text: "Dashboard", color: "#8AC9A7" },
      tags: [
        { label: "Power BI", gradient: "from-yellow-400 to-amber-600" },
        // { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        // { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        // { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
      ],
      view: "https://drive.google.com/file/d/1RlW2LbHUWiGG0m-rhUhmZkgM0Zhd9rgD/view?usp=sharing",
    },
    {
      title: "Coffe Shop Analytics Dashboard",
      // description: "This website is designed to make it easier for customers to order electronic device repair services online. The system simplifies the ordering and service process, making communication between customers and service providers more efficient and coordinated.",
      image: "image/Coffe Shop Analytics Dashboard.png",
      badge: { text: "Dashboard", color: "#8AC9A7" },
      tags: [
        { label: "Excel", gradient: "from-emerald-600 to-green-700" },
        // { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        // { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        // { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
        // { label: "CodeIgniter", gradient: "from-red-600 to-orange-400" },
      ],
      view: "https://drive.google.com/file/d/1eej2W3C79p_ztGxUHt48f5EiMVgKS8Kp/view?usp=drive_link",
    },
    {
      title: "Dashboard E-Commerce",
      // description: "A web-based POS application designed to simplify the administrative and operational processes of car repair shops. This system replaces conventional record-keeping using Excel files with an integrated, efficient, and easily accessible system, thereby improving data accuracy and the effectiveness of repair shop operations.",
      image: "image/Dashboard E-Commerce.png",
      badge: { text: "Dashboard", color: "#8AC9A7" },
      tags: [
        { label: "Data Studio", gradient: "from-sky-500 to-blue-700" },
        // { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        // { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        // { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
      ],
      view: "https://datastudio.google.com/u/0/reporting/76715caa-3182-4cf9-95bf-6d194c15a899/page/6fsBG",
    },
    {
      title: "Dashboard Complaint Customer",
      // description: "This website is designed to help users manage and organize their to-do lists efficiently. The system makes it easier for users to plan their daily activities in a more structured, monitored, and productive manner.",
      image: "image/Dashboard Complaint Customer.png",
      badge: { text: "Dashboard", color: "#8AC9A7" },
      tags: [
        { label: "SQL", gradient: "from-red-500 to-orange-600" },
        { label: "PostgreSQL", gradient: "from-indigo-700 to-slate-900" },
        { label: "DBeaver", gradient: "from-amber-700 to-stone-800" },
        { label: "Tableau", gradient: "from-rose-500 to-purple-700" },
        // { label: "Express.js", gradient: "from-gray-700 to-gray-900" },
      ],
      view: "https://drive.google.com/file/d/178UeRMqIDHkDnY3oWlsa00Yj4Cir-6EP/view?usp=sharing",
    },
  ],

  /* ──────────── Certificates ──────────── */
  certificateCategories: [
    { id: "all", label: "All" },
    { id: "bnsp", label: "BNSP" },
    { id: "lbu", label: "Lembaga Bahasa UBSI" },
    { id: "myskill", label: "MySkill" },
    { id: "pt", label: "PT Sumihai Teknologi Indonesia" },
    { id: "dqlab", label: "DQLab" },
    { id: "hplife", label: "HP Life" },
    { id: "iaii", label: "Ikatan Ahli Informatika Indonesia" },
  ],

  certificates: [
    { title: "Analis Program", category: "bnsp", year: "2026", issuerLabel: "BNSP", issuerColor: "#8DB5E8", image: "image/Analis Program.png", link: "https://drive.google.com/file/d/18NWJrSf0M4UCrurDz0C-cPVmtvCspyY-/view?usp=sharing" },
    { title: "TOEFL Prediction Test", category: "lbu", year: "2026", issuerLabel: "Lembaga Bahasa UBSI", issuerColor: "#E99A91", image: "image/TOEFL.png", link: "https://drive.google.com/file/d/1N3n6MPQfqqmfFQPE8s1jzAzuaXLtet5J/view?usp=sharing" },
    { title: "Exploring Microsoft Excel Home Tab", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/EXPLORING MICROSOFT EXCEL HOME TAB.png", link: "https://drive.google.com/file/d/1zhccyKtIzZ-Tot1d3t2qOPwB6_9tsZCq/view?usp=sharing" },
    { title: "Microsoft Excel Features", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MICROSOFT EXCEL FEATURES.png", link: "https://drive.google.com/file/d/1w48nnkdEZZePDLg0tDWh3dGRZZifBi_X/view?usp=sharing" },
    { title: "Worksheet And Workbook In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/WORKSHEET AND WORKBOOK IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1aRYBFIrH5xZMqhipBRh6JYC58wTR59qE/view?usp=sharing" },
    { title: "Basic Formula In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/BASIC FORMULA IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1Qix1hQhw9afKMnc8GcPRRuH2IU-h9L0q/view?usp=sharing" },
    { title: "Data Cleansing, Sort & Filter In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA CLEANSING, SORT & FILTER IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1YhkWBzoiE6h1CG4rDjs-gvtQEBb0A8Vs/view?usp=sharing" },
    { title: "Data Formatting In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA FORMATTING IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1r9MfsTpTIjOolkb4sli139Y1NNAeWfpW/view?usp=sharing" },
    { title: "Agregate Data In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/AGREGATE DATA IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/13LcZcoLU_XBTwzjgu6RvWP1mwU-HCNUX/view?usp=sharing" },
    { title: "Conditional If-Else In Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/CONDITIONAL IF-ELSE IN MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1NqELDdl987z31YHMc35rG70JfCQ_W0OQ/view?usp=sharing" },
    { title: "Microsoft Excel Basic", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MICROSOFT EXCEL BASIC.png", link: "https://drive.google.com/file/d/1eyDaMdPxr-D4P5yj8p4IJMiMzgyC8OY9/view?usp=sharing" },
    { title: "Lookup And Index Match", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/LOOKUP AND INDEX MATCH.png", link: "https://drive.google.com/file/d/1xUJdvqe5ZSLVzQDEuItoirgQAOxLsqsK/view?usp=sharing" },
    { title: "Data Formatting", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA FORMATTING.png", link: "https://drive.google.com/file/d/1zvWtQwT5XSiip9gvbkOi4KTrFpLx_O6Y/view?usp=sharing" },
    { title: "Data Visualization", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA VISUALIZATION.png", link: "https://drive.google.com/file/d/10tFH3K5kErfckODxYM1FgBH70LmTjYuM/view?usp=sharing" },
    { title: "Chart With Microsoft Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/CHART WITH MICROSOFT EXCEL.png", link: "https://drive.google.com/file/d/1iWlazFRPA_hlLYLfEvNhIjlSTH2rOdki/view?usp=sharing" },
    { title: "Pivot Table #1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/PIVOT TABLE 1.png", link: "https://drive.google.com/file/d/1w4KdpkFc1Wi1tlHtAL2xiBTOcHGElCVe/view?usp=sharing" },
    { title: "Pivot Table #2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/PIVOT TABLE 2.png", link: "https://drive.google.com/file/d/1xTP0uIU5K4RGtlFD7tRCZhwfydwFd6Pn/view?usp=sharing" },
    { title: "Pivot Table #3", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/PIVOT TABLE 3.png", link: "https://drive.google.com/file/d/1-lFBzBU7ulKPMBWwnmiGO2_nwNW6OYJk/view?usp=sharing" },
    { title: "Pivot Table #4", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/PIVOT TABLE 4.png", link: "https://drive.google.com/file/d/1hWaxBMLpupizIIkw1n0Pq50y0W1nGnec/view?usp=sharing" },
    { title: "Intermediate Math Function 1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/INTERMEDIATE MATH FUNCTION 1.png", link: "https://drive.google.com/file/d/14NWiHQJJh-R5IWkd4ZIbOY_IyP4RtQa7/view?usp=sharing" },
    { title: "Intermediate Math Function 2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/INTERMEDIATE MATH FUNCTION 2.png", link: "https://drive.google.com/file/d/17-y7OedpQ7Sn93irmtq3H2y3od-el8xp/view?usp=sharing" },
    { title: "Error Handling", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/ERROR HANDLING.png", link: "https://drive.google.com/file/d/1mWKun2tqq-S4iY8clFFrBRM1TfK8fX7I/view?usp=sharing" },
    { title: "Table Features", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/TABLE FEATURES.png", link: "https://drive.google.com/file/d/15clINZrLt21T8deWLACyfupVAhdFfqc3/view?usp=sharing" },
    { title: "Date And Time Manipulation", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATE AND TIME MANIPULATION.png", link: "https://drive.google.com/file/d/1s-1T3q9PUyNVeKaUFLWUo3XuP09x0M41/view?usp=sharing" },
    { title: "Logical And Information Functions", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/LOGICAL AND INFORMATION FUNCTION.png", link: "https://drive.google.com/file/d/1XkvfUap7y862MYkWIdjHYHIB2Qkmo6ZI/view?usp=sharing" },
    { title: "Dynamic Array Formulas", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DYNAMIC ARRAY FORMULAS.png", link: "https://drive.google.com/file/d/1BzWYYulIQnwwrQmwBvmqlpYjPmqkKLsP/view?usp=sharing" },
    { title: "Printing And Page Setup", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/PRINTING AND PAGE SETUP.png", link: "https://drive.google.com/file/d/1EinjgQ6cGW-VQF-YeMVxQAmerWmzkklU/view?usp=sharing" },
    { title: "Referencing Cell And Text Formulas", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/REFERENCING CELL AND TEXT FORMULAS.png", link: "https://drive.google.com/file/d/197KUa2inc-EtyQUJcsUiCLX2ST_jqNFX/view?usp=sharing" },
    { title: "Interactive Charts", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/INTERACTIVE CHARTS.png", link: "https://drive.google.com/file/d/15eOboaWIFpODO7O-61yRTgmO85RpijJu/view?usp=drive_link" },
    { title: "Data Visualization Best Practices", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA VISUALIZATION BEST PRACTICES.png", link: "https://drive.google.com/file/d/1gSbnId3fWIDaP8IfqomZJk-HH3S0jjbO/view?usp=sharing" },
    { title: "Microsoft Excel Intermediate", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MICROSOFT EXCEL INTERMEDIATE.png", link: "https://drive.google.com/file/d/15wZ-CbxFgUrS-e4OBa9qRl_EFruBcGF4/view?usp=sharing" },
    { title: "Power Pivot #1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/POWER PIVOT 1.png", link: "https://drive.google.com/file/d/15MRORNpJ0DmWE-VoMCZTE6i9zIccp-rW/view?usp=sharing" },
    { title: "Power Pivot #2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/POWER PIVOT 2.png", link: "https://drive.google.com/file/d/1iJWhy6Jowdq7nn37WEFBr4D_a78wutOx/view?usp=sharing" },
    { title: "Power Pivot #3", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/POWER PIVOT 3.png", link: "https://drive.google.com/file/d/1mms7wPKlE5kC3HmZpvKeVvysaRrvskkT/view?usp=sharing" },
    { title: "What If Analysis #1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/WHAT IF ANALYSIS 1.png", link: "https://drive.google.com/file/d/1pz4S7AMyrJvgO1f8LogrStuTaIenQg6E/view?usp=sharing" },
    { title: "What If Analysis #2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/WHAT IF ANALYSIS 2.png", link: "https://drive.google.com/file/d/1UXFM-T3DO2DdXORi3d7O91d2Ma3R7b5x/view?usp=sharing" },
    { title: "Macro VBA #1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MACRO VBA 1.png", link: "https://drive.google.com/file/d/1Hnt6wUCL5ph7gJXdDKUsmjd2p9XHsByK/view?usp=sharing" },
    { title: "Macro VBA #2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MACRO VBA 2.png", link: "https://drive.google.com/file/d/1ixQAG78LLwcS10BOstidIPt2RGYjDLVQ/view?usp=sharing" },
    { title: "Macro VBA #3", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MACRO VBA 3.png", link: "https://drive.google.com/file/d/1ixQAG78LLwcS10BOstidIPt2RGYjDLVQ/view?usp=sharing" },
    { title: "Advanced Charting Techniques", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/ADVANCED CHARTING TECHNIQUES.png", link: "https://drive.google.com/file/d/11htXwYUixXpqEg2Oo5S7CdrfAesPHQh0/view?usp=sharing" },
    { title: "Microsoft Excel Advanced", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/MICROSOFT EXCEL ADVANCED.png", link: "https://drive.google.com/file/d/1fjU9y7zfIkDhxX_FGmLy4y0OeT4eyJkM/view?usp=sharing" },
    { title: "Excel Functions For Data Manipulation #1", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/EXCEL FUNCTIONS FOR DATA MANIPULATION 1.png", link: "https://drive.google.com/file/d/1zUsSEbrMQ8_r1BGqxzNHoCOfJYD_H4_Q/view?usp=sharing" },
    { title: "Excel Functions For Data Manipulation #2", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/EXCEL FUNCTIONS FOR DATA MANIPULATION 2.png", link: "https://drive.google.com/file/d/15sJgE1kZrEVECqA9hn92z1Y1hSzZRnq7/view?usp=sharing" },
    { title: "Advanced Function In Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/ADVANCED FUNCTION IN EXCEL.png", link: "https://drive.google.com/file/d/1tq1X_1DKy25AoaYOiQ5riqON-6OZu_fk/view?usp=sharing" },
    { title: "Array Formula (Data Manipulation)", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/ARRAY FORMULA (DATA MANIPULATION).png", link: "https://drive.google.com/file/d/1TqcTWCiG8LRnvTSFT3d5YIWovz4HbC5r/view?usp=sharing" },
    { title: "Data Cleaning And Preprocessing", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA CLEANING AND PREPROCESSING.png", link: "https://drive.google.com/file/d/1k6kY3Bid05maHRmUID_HSazM9B5RHBkr/view?usp=sharing" },
    { title: "Advanced Data Manipulation", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/ADVANCED DATA MANIPULATION.png", link: "https://drive.google.com/file/d/1pt2EOrKED6afHy-pGQMt0s4B9jDs-lgf/view?usp=sharing" },
    { title: "Data Manipulation", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DATA MANIPULATION.png", link: "https://drive.google.com/file/d/1auQ536_Gz59S5OiHsdpdWr6Q4DLDV4V3/view?usp=sharing" },
    { title: "Time Series Analysis", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/TIME SERIES ANALYSIS.png", link: "https://drive.google.com/file/d/1ppEogdBKS10Qi8UyGN_LB5hEWRKbZOOK/view?usp=sharing" },
    { title: "Linear Regression", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/LINEAR REGRESSION.png", link: "https://drive.google.com/file/d/1kAj5tWgXpcGxYJ2HQsRTvajSx2E1B6bW/view?usp=sharing" },
    { title: "Forecasting Time Series", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/FORECASTING TIME SERIES.png", link: "https://drive.google.com/file/d/12QPuOHHYZHgS4PySnaO4GWbnh2y5RTrh/view?usp=sharing" },
    { title: "Introduction To Statistics", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/INTRODUCTION TO STATISTIC.png", link: "https://drive.google.com/file/d/1-9tY2qqsYBfMQjtbfoEvn6VNgIoVs2Vp/view?usp=sharing" },
    { title: "Descriptive Statistic In Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/DESCRIPTIVE STATISTIC IN EXCEL.png", link: "https://drive.google.com/file/d/1Hka8RbEPiALVomNUN6dVOTm3jgBwYqtu/view?usp=sharing" },
    { title: "Forecasting, Regression And Statistic In Excel", category: "myskill", year: "2026", issuerLabel: "My Skill", issuerColor: "#B5A0E3", image: "image/FORECASTING, REGRESSION AND STATISTIC IN EXCEL.png", link: "https://drive.google.com/file/d/13qn0v3yC0745pkdOZ_2caF4QN_3cQ995/view?usp=sharing" },
    { title: "Enterprise Resource Planning", category: "pt", year: "2026", issuerLabel: "PT Sumihai Teknologi Indonesia", issuerColor: "#E5D17A", image: "image/Enterprise Resource Planning.png", link: "https://drive.google.com/file/d/1akkjL3O5g1dYTc2TFvjlDGQz2VfVMi2u/view?usp=sharing" },
    { title: "Mengolah Data Teks Unstructured dengan REGEX pada SQL", category: "dqlab", year: "2026", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Mengolah Data Teks Unstructured dengan REGEX pada SQL.png", link: "https://drive.google.com/file/d/1xcBSmI6IK3BcW3lqXIzZwdBob2pG39Fq/view?usp=sharing" },
    { title: "Fundamental SQL Group By And Having", category: "dqlab", year: "2026", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Fundamental SQL Group By and Having.png", link: "https://drive.google.com/file/d/1ARqBUEsvsHgWiYOOO-bfkViTWHkGr50l/view?usp=drive_link" },
    { title: "Fundamental SQL Using INNER JOIN and UNION", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Fundamental SQL Using INNER JOIN and UNION.png", link: "https://drive.google.com/file/d/1_e_UaNUOPSxkhI4D3U4s8eAqEk1DvEEB/view?usp=sharing" },
    { title: "Fundamental SQL Using FUNCTION and GROUP BY", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Fundamental SQL Using FUNCTION and GROUP BY.png", link: "https://drive.google.com/file/d/1A_MBd_LHMQEWh4BAfdsoWrpdppMw1hjA/view?usp=sharing" },
    { title: "Fundamental SQL Using SELECT Statement", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Fundamental SQL Using SELECT Statement.png", link: "https://drive.google.com/file/d/14tewyUI6Z6AnOX3WqbMQdnn382witEiK/view?usp=sharing" },
    { title: "Python for Data Professional Beginner - Part 3", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Python for Data Professional Beginner - Part 3.png", link: "https://drive.google.com/file/d/1sZMB0FFKFZDcjKqK6gMJ2HPFw6umD8S3/view?usp=sharing" },  
    { title: "Python for Data Professional Beginner - Part 2", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Python for Data Professional Beginner - Part 2.png", link: "https://drive.google.com/file/d/1UYMkAgqBFDBZSrUOxjsVX-89racGunlj/view?usp=sharing" },
    { title: "Python for Data Professional Beginner - Part 1", category: "dqlab", year: "2025", issuerLabel: "DQLab", issuerColor: "#83CED4", image: "image/Python for Data Professional Beginner - Part 1.png", link: "https://drive.google.com/file/d/1hO1BnTg1DvtvZOJlpHvq7WLq5M38KoiX/view?usp=sharing" },
    { title: "Data Science & Analytics", category: "hplife", year: "2025", issuerLabel: "HP Life", issuerColor: "#F2C6A8", image: "image/Data Science & Analytics.png", link: "https://drive.google.com/file/d/1QL-fRPXO-Pnx15EnSU5uikgyBpejmx_I/view?usp=drive_link" },
    { title: "Presenting Data", category: "hplife", year: "2025", issuerLabel: "HP Life", issuerColor: "#F2C6A8", image: "image/Presenting Data.png", link: "https://drive.google.com/file/d/1pMHAHOpU6kQ8INlySC_Rs5LX0odTFnH2/view?usp=sharing" },
    { title: "Database Systems", category: "iaii", year: "2023", issuerLabel: "IAII", issuerColor: "#D49AB8", image: "image/Database Systems.png", link: "https://drive.google.com/file/d/1IP3zzCH-cvIyrCare5gfroE4h3mWFtPm/view?usp=sharing  " },
  ],

  /* ──────────── EmailJS Config ──────────── */
  emailjs: {
    publicKey: "LX1ujvp0LSIYcDMnR",
    serviceId: "service_g6ihbbf",
    templateId: "template_dru6k7g",
  },
}