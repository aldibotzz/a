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

module.exports = {
	async all(m) {
		if (m.chat.endsWith('broadcast') && m.chat.endsWith('.net')) return !0
		let chat = global.db.data.chats[m.chat]
		if (!('store' in chat)) chat.store = []
		let store = global.db.data.chats[m.chat].store
		if (!store[0]) return !0;
		console.log(m.message?.listResponseMessage?.title)
		let isStore = store.find(v => v.key == (m.text || m.message.listResponseMessage.title))
		
		if (isStore) {
			let isImage = isStore.isImage == true ? isStore.imageUrl : false;
			if (isImage) {
				await this.sendMedia(m.chat, isImage, m, { caption: isStore.response })
			} else {
				await this.reply(m.chat, isStore.response, m)
			}
		}
		return !0
	}
}