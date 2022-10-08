/**let fetch = require('node-fetch')
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
  description: ` *BOT ON 24 JAM & BISA BUAT PRICELIST*
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
*_BOT INI MEMAKAI RDP BUKAN TERMUX*
*_/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*\n\n╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR 30.000 (30K)
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
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5054578677954458'}]}],
  headerImage: { productId: '5054578677954458',
  jpegThumbnail: baper },
  businessOwnerJid: `6285643112659@s.whatsapp.net`
  },
  footerText: 'Sewabotnya Kakack',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}**/
let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
m.reply(`*BOT ON 24 JAM*
SEWA BOT 1 BULAN 10K`)
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

/**function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }**/
