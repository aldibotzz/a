/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FokusDotId (Fokus ID)
 * Github: https://github.com/fokusdotid
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * 
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Uhm.. mana yg mau di hapus?\nContoh:\n*${usedPrefix + command} Key*`;
	let chat = global.db.data.chats[m.chat]
	if (!('store' in chat)) chat.store = []
	let store = chat.store
	if (!store[0]) throw 'belum ada list di grup ini!';
	let where = null;
	let isinya = null;
	await Object.keys(store).forEach(function(isi) {
		if (store[isi].id === m.chat && store[isi].key === text) {
			where = isi
			isinya = store[isi]
		}
	});
	if (where !== null) {
		m.reply(`berhasil menghapus *${isinya.key}* dari daftar list!`)
		.then(() => {
			store.splice(where, 1)
			return !0
		})
	} else {
		throw `Maaf, *${text}* tidak ditemukan di list!\nketik *${usedPrefix}liststore* untuk melihat list nya.`;
	}
}
handler.help = ["dellist"]
handler.tags = ["store"]
handler.command = /^dellist$/i
handler.group = true
handler.admin = true
module.exports = handler