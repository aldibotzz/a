let handler = async m => m.reply(`on
`.trim()) // Tambah sendiri kalo mau
handler.help = ['tes']
handler.tags = ['info']
handler.command = /^tes$/i

module.exports = handler