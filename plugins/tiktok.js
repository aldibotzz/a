/**let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(`Proses`)
let res = await fetch(`https://danzzapi.xyz/api/downloader/ttmp4?url=${args[0]}&apikey=danzz`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', `
\n💌 *Deskripsi*: *${description}*
\n\n📛 *Username*: *${username}*
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)$/i
handler.limit = true
module.exports = handler**/



/**const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper')
const fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
  let bearr = 'danzz'
  let sayang = await fetch(`https://saipulanuar.ga/api/download/tiktokview?apikey=${bearr}&url=${args[0]}`)
  let json = await sayang.json()
    if (sayang.status !== 200) throw await sayang.text()
    if (!json.status) throw json  
  const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendHydrated(m.chat, `${htki}   ${htka}`, `  ${nickname}${description ? `\n  : ${json.result.createdAt}\n   ${json.result.shareCount} \n  : ${json.result.likesCount}\n  : ${json.result.commentCount}\n  : ${json.result.playCount}  \n s:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        url, ' s     ', null, null, [
        ['', `.donasi`],
        ['', `.tiktokaudio ${args}`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

module.exports = handler**/



let axios = require('axios');
let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(`https://malesin.xyz/tiktok?url=${args[0]}&apikey=DonasiDong`)).data
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
   // conn.sendButtonVid(m.chat, res.video, `*Judul:* ${res.title}\n${res.author ? `*Pembuat Video:* ${res.author}` : '\n' }`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', 'menu', usedPrefix + 'menu', m)
    await conn.sendFile(m.chat, res.video, 'video.mp4', `
*Judul:* ${res.title}\n${res.author}
*Pembuat Video:* ${res.author}
//`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i

handler.limit = true

module.exports = handler