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

let upload = require('../lib/uploadImage');
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Uhm.. apa yng mau di update?\n\nContoh\n*${usedPrefix + command} Sempak*`;
	let chat = global.db.data.chats[m.chat]
	if (!('store' in chat)) chat.store = [];
	let store = chat.store;
	if (!store[0]) throw `Belum ada list di grup ini!\nuntuk menambahkan nya ketik *${usedPrefix}addlist*`;
	let [key, response] = text.split('@')
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || '';
	let Image = mime ? await q.download() : false;
	let image = Image ? await upload(Image) : null;
	
	let where = null;
	let isinya = null;
	await Object.keys(store).forEach(function(isi) {
		conn.logger.info({
			chat: m.chat,
			key: key,
			isinya: isi,
			storenya: store[isi]
		})
		if (store[isi].id === m.chat && store[isi].key === key) {
			where = isi;
			isinya = store[isi]
		}
	});
	if (where !== null && isinya !== null) {
   conn.logger.info({ isiStore: isinya })
		m.reply(`Berhasil update *${isinya.key}* dari daftar list!`).then(() => {
			isinya.key = key;
			isinya.response = response;
			isinya.isImage = mime ? true : false;
			isinya.imageUrl = image;
			return !0
		})
	} else if (isinya !== null) {
		throw isinya
	} else {
		throw `Maaf, *${text}* tidak ditemukan di list!\nketik *${usedPrefix}liststore* untuk melihat list nya.`;
	}
}
handler.help = ["updatelist"]
handler.tags = ["store"]
handler.command = /^up(date)?list$/i
handler.group = true;
handler.admin = true;
module.exports = handler