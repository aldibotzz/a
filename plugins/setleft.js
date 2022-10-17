let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if ((isOwner || isAdmin)) conn.bye = text
    global.db.data.chats[m.chat].sLeft = text
    m.reply('left berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `Teksnya mana?\n\ncontoh:\n${usedPrefix + command} dadah @user`
}
handler.help = ['setleft <teks>']
handler.tags = ['group']
handler.command = /^setleft$/i
handler.group = true

module.exports = handler
