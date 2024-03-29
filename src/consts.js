const SUPPORTED_FIAT = [
  "USD",
  "PLN",
  "EUR",
  "CNY",
  "JPY",
  "AUD",
  "CHF",
  "SEK",
  "GBP",
  "DKK",
  "RUB",
  "SGD",
  "CAD",
  "NZD",
  "THB",
  "SLL",
  "KRW",
  "SVC",
  "VEF",
  "PKR",
  "BRL",
  "CLP",
  "TOP",
  "BOB",
  "DEM",
  "XPD",
  "VND",
  "CHC",
  "MYR",
  "XRE",
  "CRC",
  "NLG",
  "XAU",
  "MAD",
  "ESP",
  "PEN",
  "SDG",
  "GHS",
  "NIC",
  "BAM",
  "CYP",
  "ALL",
  "CZK",
  "HKD",
  "BRE",
  "UAH",
  "MVR",
  "BEC",
  "INR",
  "MXN",
  "BRC",
  "MTL",
  "ATS",
  "PHP",
  "IDR",
  "ARS",
  "NGN",
  "ZAR",
  "GAMECOM",
  "TRY",
  "ILS",
  "NOK",
  "RON",
  "HUF",
  "AED",
  "MUR",
  "HRK",
  "XAG",
  "XPT",
  "BHD",
  "BOP",
  "LTT",
  "ITL",
  "AOA",
  "SCR",
  "CHE",
  "BND",
  "SSP",
  "YUM",
  "TRL",
  "ETB",
  "BHT",
  "ARA",
  "COP",
  "XBC",
  "ADP",
  "AMD",
  "BDT",
  "LVL",
  "ISK",
  "YUN",
  "LKR",
  "MDL",
  "MNT",
  "TWD",
  "HRD",
  "KGS",
  "MRO",
  "MTP",
  "DOP",
  "RSD",
  "GWP",
  "KZT",
  "UYU",
  "PYG",
  "GHC",
  "GEL",
  "BTN",
  "COU",
  "KYD",
  "SLTKN",
  "ANG",
  "BYN",
  "AZN",
  "MGA",
  "ALK",
  "AON",
  "NPR",
  "BMD",
  "CLF",
  "LUL",
  "BBD",
  "SRG",
  "ZAL",
  "ROK",
  "BGL",
  "HNL",
  "DDM",
  "BGN",
  "AWG",
  "BRN",
  "BEL",
  "SHP",
  "ARP",
  "SAR",
  "VUV",
  "BTCMZ",
  "BUK",
  "ERN",
  "WST",
  "GSTC",
  "ROL",
  "KWD",
  "TMM",
  "XBA",
  "BCH3NX",
  "ETH3NX",
  "VNC",
  "XAF",
  "BAD",
  "SDD",
  "SYP",
  "XBB",
  "AFN",
  "GMD",
  "XCD",
  "FRF",
  "USS",
  "KPW",
  "PAB",
  "SOS",
  "STD",
  "HTG",
  "GNS",
  "XDR",
  "CUP",
  "CUC",
  "PTE",
  "LBP",
  "ZWL",
  "SIT",
  "LYD",
  "JOD",
  "CDF",
  "XOF",
  "KHR",
  "NAD",
  "TZS",
  "UGX",
  "FJD",
  "GIP",
  "IQD",
  "JMD",
  "KMF",
  "MZN",
  "UZS",
  "SZL",
  "EGP",
  "XPF",
  "BIF",
  "MKD",
  "ZMW",
  "MOP",
  "DJF",
  "BWP",
  "SRD",
  "BZD",
  "LAK",
  "PGK",
  "TTD",
  "RWF",
  "OMR",
  "GNF",
  "CVE",
  "MWK",
  "GTQ",
  "FKP",
  "LSL",
  "KES",
  "YER",
  "TJS",
  "DZD",
  "MMK",
  "TND",
  "GYD",
  "QAR",
  "LRD",
  "IRR"
]

const COIN_API_KEY = '9C54B2CA-D45E-4592-858C-851FF5DDC8A7'
const COIN_API_BASE_URL = 'https://rest.coinapi.io/v1'

const OPEN_SEA_API_BASE_URL = 'https://api.opensea.io/api'
const OPEN_SEA_API_KEY = '28fbebb50f2942b686b48522a76eb9bd'

const CLOUD_FUNCTIONS_BASE_URL = 'https://us-central1-master-plateau-347914.cloudfunctions.net'
module.exports = {
  SUPPORTED_FIAT, 
  COIN_API_KEY,
  COIN_API_BASE_URL,
  OPEN_SEA_API_BASE_URL,
  OPEN_SEA_API_KEY,
  CLOUD_FUNCTIONS_BASE_URL
}