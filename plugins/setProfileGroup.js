let { webp2png } =  require('../lib/webp2mp4.js')
let { URL_REGEX } =  require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
    let url = await webp2png(await q.download())
    await conn.updateProfilePicture(m.chat, { url }).then(_ => m.reply('Sudah Diganti Kak Profilenya '))
  } else if (args[0] && args[0].match(URL_REGEX)) {
    await conn.updateProfilePicture(m.chat, { url: args[0] }).then(_ => m.reply('Sudah Diganti Kak Profilenya'))
  } else throw 'Imagenya Mana?'
}
handler.help = ['setppgrup']
handler.tags = ['group']
handler.command = /^setpp(gc|grup|group)$/i
handler.group = handler.admin = handler.botAdmin = true

module.exports = handler