/**
 * Malaysia State → IPD Mapping
 * GRK Permit Generator
 */

export const malaysiaIPD = {
  Johor: [
    "IPD Johor Bahru Selatan",
    "IPD Johor Bahru Utara",
    "IPD Iskandar Puteri",
    "IPD Kulai",
    "IPD Kota Tinggi",
    "IPD Kluang",
    "IPD Batu Pahat",
    "IPD Muar",
    "IPD Segamat",
    "IPD Tangkak",
    "IPD Pontian",
    "IPD Mersing"
  ],

  Kedah: [
    "IPD Kota Setar",
    "IPD Kubang Pasu",
    "IPD Padang Terap",
    "IPD Pendang",
    "IPD Kuala Muda",
    "IPD Kulim",
    "IPD Bandar Baharu",
    "IPD Baling",
    "IPD Sik",
    "IPD Langkawi",
    "IPD Yan"
  ],

  Kelantan: [
    "IPD Kota Bharu",
    "IPD Pasir Mas",
    "IPD Tumpat",
    "IPD Pasir Puteh",
    "IPD Machang",
    "IPD Tanah Merah",
    "IPD Kuala Krai",
    "IPD Jeli",
    "IPD Gua Musang",
    "IPD Bachok"
  ],

  Melaka: [
    "IPD Melaka Tengah",
    "IPD Alor Gajah",
    "IPD Jasin"
  ],

  "Negeri Sembilan": [
    "IPD Seremban",
    "IPD Port Dickson",
    "IPD Nilai",
    "IPD Kuala Pilah",
    "IPD Tampin",
    "IPD Jelebu",
    "IPD Rembau"
  ],

  Pahang: [
    "IPD Kuantan",
    "IPD Pekan",
    "IPD Rompin",
    "IPD Temerloh",
    "IPD Bentong",
    "IPD Raub",
    "IPD Jerantut",
    "IPD Maran",
    "IPD Lipis",
    "IPD Cameron Highlands",
    "IPD Bera"
  ],

  Perak: [
    "IPD Ipoh",
    "IPD Taiping",
    "IPD Manjung",
    "IPD Teluk Intan",
    "IPD Sungai Siput",
    "IPD Kuala Kangsar",
    "IPD Parit Buntar",
    "IPD Tapah",
    "IPD Kampar",
    "IPD Gerik",
    "IPD Seri Iskandar"
  ],

  Perlis: [
    "IPD Kangar"
  ],

  "Pulau Pinang": [
    "IPD Timur Laut",
    "IPD Barat Daya",
    "IPD Seberang Perai Tengah",
    "IPD Seberang Perai Utara",
    "IPD Seberang Perai Selatan"
  ],

  Sabah: [
    "IPD Kota Kinabalu",
    "IPD Penampang",
    "IPD Tuaran",
    "IPD Kudat",
    "IPD Sandakan",
    "IPD Tawau",
    "IPD Lahad Datu",
    "IPD Semporna",
    "IPD Beaufort",
    "IPD Keningau",
    "IPD Ranau"
  ],

  Sarawak: [
    "IPD Kuching",
    "IPD Padawan",
    "IPD Kota Samarahan",
    "IPD Serian",
    "IPD Sri Aman",
    "IPD Sibu",
    "IPD Bintulu",
    "IPD Miri",
    "IPD Limbang",
    "IPD Kapit"
  ],

  Selangor: [
    "IPD Shah Alam",
    "IPD Klang Selatan",
    "IPD Klang Utara",
    "IPD Kajang",
    "IPD Petaling Jaya",
    "IPD Subang Jaya",
    "IPD Ampang Jaya",
    "IPD Gombak",
    "IPD Hulu Selangor",
    "IPD Kuala Selangor",
    "IPD Kuala Langat",
    "IPD Sabak Bernam",
    "IPD Sepang"
  ],

  Terengganu: [
    "IPD Kuala Terengganu",
    "IPD Kuala Nerus",
    "IPD Besut",
    "IPD Setiu",
    "IPD Marang",
    "IPD Hulu Terengganu",
    "IPD Dungun",
    "IPD Kemaman"
  ],

  "Wilayah Persekutuan Kuala Lumpur": [
    "IPD Dang Wangi",
    "IPD Sentul",
    "IPD Brickfields",
    "IPD Wangsa Maju",
    "IPD Cheras"
  ],

  "Wilayah Persekutuan Labuan": [
    "IPD Labuan"
  ],

  "Wilayah Persekutuan Putrajaya": [
    "IPD Putrajaya"
  ]
};

export const stateList = Object.keys(malaysiaIPD).sort();

export function getIPDByState(state) {
  return malaysiaIPD[state] || [];
}