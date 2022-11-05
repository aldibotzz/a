let handler = async m => m.reply(`ON
`.trim()) // Tambah sendiri kalo mau
handler.help = ['tes']
handler.tags = ['info']
handler.customPrefix = /^(tes|bot)$/i
handler.command = new RegExp

module.exports = handler