let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, id, isBaileys } = m.quoted
    if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

}
handler.help = ['tesdelete']
handler.tags = ['tools']
handler.command = /^(tesdel|tesdelete|tesdel|td)$/i
handler.limit = true

module.exports = handler
