import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Pendahuluan",
    href: "/pendahuluan",
    items : [
      {
        title: "Deskripsi Project",
        href: "/deskripsiproject",
      },
      {
        title: "Teknologi yang Digunakan",
        href: "/teknologi",
      },
    ]
  },
  {
    spacer: true,
  },
  // {
  //   title: "Navigation",
  //   href: "/navigation",
  //   heading: "Documents",
  // },
  {
    title: "Analisis dan Desain Perangkat Lunak",
    href: "/analisisDesain",
    items : [
      {
        title: "Analisis Kebutuhan",
        href: "/analisisKebutuhan",
      },
      {
        title: "Diagram",
        href: "/diagram",
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Perancangan Desain Antarmuka",
    href: "/perancangan",
    items : [
      {
        title: "Dokumen Desain",
        href: "/dokumenDesain",
        items : [
          {
            title: "Sketsa Awal",
            href: "/sketsa",
          },
          {
            title: "Wireframe",
            href: "/wireframe",
          },
          {
            title: "Userflow",
            href: "/userflow",
          },
          {
            title: "Prototype",
            href: "/prototype",
          },
        ]
      },
      {
        title: "Implementasi Desain",
        href: "/implementasiDesain",
        items : [
          {
            title: "User",
            href: "/user",
          },
          {
            title: "Admin",
            href: "/admin",
          },
          {
            title: "Mobile User",
            href: "/mUser",
          },
          {
            title: "Mobile Admin",
            href: "/mAdmin",
          },
        ]
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Pengembangan Aplikasi",
    href: "/pengembanganAplikasi",
    items : [
      {
        title: "Fitur Utama",
        href: "/fiturUtama",
        items : [
          {
            title: "Operasi Crud",
            href: "/operasiCrud",
          },
          {
            title: "Fitur Login dan Registerasi",
            href: "/loginregis",
          },
          {
            title: "Fitur Interaktif",
            href: "/finter",
          },
        ]
      },
      {
        title: "Struktur Basis Data",
        href: "/strukturBasisData",
        items : [
          {
            title: "MYSQL",
            href: "/mysql",
          },
        ]
      },
      {
        title: "Metode SDLC",
        href: "/metodeSDLC",
        items : [
          {
            title: "Analisis Kebutuhan",
            href: "/analisiskebutuhan",
          },
          {
            title: "Pembuatan Diagram UML",
            href: "/pembuatandiagaram",
          },
          {
            title: "Pengembangan Kode dan Basis Data",
            href: "/pengembangankode",
          },
          {
            title: "Pengujian",
            href: "/pengujian",
          },
          {
            title: "Deploy",
            href: "/deploy",
          },
        ]
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/dokumentasiPenggunaan",
    items : [
      {
        title: "Panduan Pengguna",
        href: "/panduanpenggunaan",
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Metode Pengembangan Perangkat Lunak",
    href: "/metodepengembangan",
    items : [
      {
        title: "Penjelasan metode",
        href: "/penjelasanmetode",
      },
      {
        title: "Alasan pemilihan metode",
        href: "/alasanpemilihan",
      },
      {
        title: "Implementasi metode",
        href: "/implementasimetode",
      },
    ]
  },
  {
    spacer: true,
  },
  {
    title: "Kesimpulan dan Saran",
    href: "/kesimpulandanSaran",
  },
  // {
  //   title: "Structure",
  //   href: "/structure",
  //   items: [
  //     {
  //       title: "Deeper",
  //       href: "/deeper",
  //       items : [
  //         {
  //           title: "Even deeper",
  //           href: "/even-deeper",
  //         },
  //       ]
  //     },
  //   ],
  // },
//   {
//     spacer: true,
//   },
//   {
//     title: "Markup",
//     href: "/markup",
//     heading: "Components",
//     items: [
//       {
//         title: "Cards",
//         href: "/cards",
//       },
//       {
//         title: "Diagrams",
//         href: "/diagrams",
//       },
//       {
//         title: "Filetree",
//         href: "/filetree",
//       },
//       {
//         title: "Lists",
//         href: "/lists",
//       },
//       {
//         title: "Maths",
//         href: "/maths",
//       },
//       {
//         title: "Notes",
//         href: "/notes",
//       },
//       {
//         title: "Steps",
//         href: "/steps",
//       },
//       {
//         title: "Table",
//         href: "/table",
//       },
//       {
//         title: "Tabs",
//         href: "/tabs",
//       },
//     ],
//   },
];