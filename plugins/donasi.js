let handler = async m => m.reply(`
╭──「 *_Donasi Via All Payment_* 」
│❏   HARAP TF SESUAI NOM
╰────
╭─ [ Gopay ]
│❏  Qr : tinyurl.com/paymentgopay
│❏  An : Rifqii Store
╰────
╭─ [ Ovo ]
│❏  Nomor : 088238487765
│❏  An : Rifqii Store
╰────
╭─[ Dana ]
│❏  Nomor : 088238487765
│❏  Qr : tinyurl.com/paymentdana 
│❏  An : Zamroni
╰─────
╭─[ Qris All Payment ]
│❏  Qr : tinyurl.com/paymentqris2
│❏  An : Rifqii Store
╰─────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler