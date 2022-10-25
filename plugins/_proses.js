let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let petik = '```'
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    
let handler = async (m, { conn, usedPrefix: _p, args, command, text }) => {
	    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Reply pesannya`
m.reply(`「 TRANSAKSI PENDING」
${petik}
📆 TANGGAL : ${week}, ${date}
⌚ JAM     : ${time} WIB
✨ STATUS  : Pending

Pesanan @${m.quoted.sender.split('@')[0]} sedang di proses!${petik}`)
//if (!m.quoted.sender[0]) throw `reply cht`
}
handler.help = ['p <reply cht nya>']
handler.tags = ['store']
handler.customPrefix = /^(proses|p)$/i
handler.group = true
handler.command = new RegExp

module.exports = handler