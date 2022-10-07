let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6285643112659@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `*_WELCOME TO RIFQII STORE🇲🇨_*

*🔰RIFQII STORE MELAYANI🔰*

*-JASA SEWA BOT*
*-JUAL ALL NOKOS*
*-JASA POST AKUN (FREE)*
*-JASA JADI BOT + OWNER*
*-JASA BUKA WA KENON/TERBLOKIR*

*NOTE: LIST NYA DI BAWAH*

*💸PAYMENT💸*
*•GOPAY*
*•DANA*
*•QRIS*

*BOT ON 24 JAM & BISA BUAT PRICELIST*
╭──「 *_SEWA BOT_* 」
│❏  1 MINGGU : IDR 3.000 (3K)
│❏  1 BULAN : IDR 6.000 (6K)
│❏  PERMANEN : IDR 10.000 (10K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  BISA BUAT PRICELIST
│❏  FITUR BANYAK
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME ( OTOMATIS )
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏ https://bit.ly/LinkGrubBotz
╰────
╭─[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
│❏ wa.me/6285643112659?text=sewa+bot
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  PULSA +5k
│❏  QRIS ALL PAYMENT
╰────
*_BOT INI MEMAKAI RDP BUKAN TERMUX_*
*_/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*

╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR 15.000 (15K)
╰────
╭─ [ FASILITAS ]
│❏  CUMA SCAN QR DOANG JADI                
│     BOT + OWNER
│❏  FITUR BOT NYA BANYAK
│❏  BANYAK FITUR LANGKA
│❏  BUKAN BOT WIBUSOFT
│❏  DI SETTING IN SELLER
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
│❏  NAMA BOT, NAMA OWNER, NOMOR.OWNER,
│     DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
│❏ wa.me/6285643112659?text=jadi+bot
╰────


JUAL ALL NOKOS MURAH BY RIFQII STORE

LIST NOKOS:
-NOKOS WA:3K
-NOKOS TELE:6K
-NOKOS GOPAY/OVO/DANA:2K
-NOKOS SHOPEE/LAZADA/TOKPED:3K

*NOKOS APK LAIN? SILAHKAN TANYAKAN SAJA KE NO DI BAWAH*

ORDER?Wa.me/6285643112659?text=buy+nokos



JASA BUKA WA KENON BY RIFQII STORE:3K
SISTEM: SEND WA YG KENON-PROSES-SELESAI-TF

*NOTE: BAGI YG KENON WA NYA PERMANEN TIDAK BISA*

ORDER? wa.me/63275643112659?text=buka+wa+kenon`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5070871692948121'}]}],
  headerImage: { productId: '5070871692948121',
  jpegThumbnail: baper },
  businessOwnerJid: `6285643112659@s.whatsapp.net`
  },
  footerText: '*_RifqiBotz_*',
  }},{})
conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
}
handler.help = ['menur']
handler.tags = ['info']
handler.command = /^(menur)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
