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
	if (!text) throw `uhm.. mau menambahkan apa?\n\n*Contoh:* ${usedPrefix + command} FREE FIRE@HARGA`;
	if (text && !text.includes('@')) throw `*Contoh:* ${usedPrefix + command} EP EP@harga nya `;
	if (!('store' in global.db.data.chats[m.chat])) global.db.data.chats[m.chat].store = []
	let store = global.db.data.chats[m.chat].store
	let [key, response] = text.split('@')
	let valid = await store.find(v => v.id == m.chat && v.key == key)
	if (valid) throw `Maaf, *${key}* sudah terdaftar di list!`;
	try {
		let q = m.quoted ? m.quoted : m;
		let mime = (q.msg || q).mimetype || q.mediaType || ''
		let Image = mime ? await q.download() : false
		let image = Image ? await upload(Image) : null
		let obj = {
			id: m.chat,
			key: key,
			response: response,
			isImage: mime ? true : false,
			imageUrl: image,
		}
		store.push(obj)
		m.reply(`Sukses menambahkan ${key} ke daftar store`)
	} catch(e) {
		throw e;
		console.error(e)
	}
}
handler.help = ["addlist"]
handler.tags = ["store"]
handler.command = /^add(list|store)$/i

handler.admin = true
handler.group = true
module.exports = handler