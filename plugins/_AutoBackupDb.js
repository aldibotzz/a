/**
 * Dilarang Keras Untuk Menghapus atau Mengganti ini.
 *
 * Buatan @FokusDotId (Fokus ID)
 *
 * Script ini tidak untuk diperjualbelikan.
 * Script ini dibuat khusus buat pengguna panel PANELKU / MALESIN.
 * 
 * Saya hanya memudahkan kalian untuk mem-backup database agar tidak kereset, 
 * jika panel sedang Down / Mati.
 *
 * Terimakasih telah berlangganan Hosting di PANELKU / MALESIN.
 * Jangan lupa SHARE ke temen-temen kalian ya gays untuk membeli Hosting nya
 *
 * Thanks Smart Buyer 🙏
 *
 * @FokusDotId (Fokus ID)
 * WA: 6285157436653
 * WA2: 6281320170984
 *
 * Open juga jasa pembuatan Fitur / Script.
 */


// CJS Only
// for ESM? chat wa diatas!

/*
Tambahin di handler

if (!('backup' in setting) settings.backup = true
if (!isNumber(setting.backupTime)) setting.backupTime = 0

*/
const fs = require('fs');
let handler = m => m
handler.before = async function (m) {
	
	let setting = global.db.data.settings[this.user.jid];
	let backup = setting.backup; // Database nya on apa off?
	let backupTime = setting.backupTime

	let Owner = global.owner[0] + '@s.whatsapp.net';
	let fileName = 'database.json';
	
	if (!backup) return !0;
	
	if (new Date() * 1 - backupTime > 1000 * 60 * 60) {
		let d = new Date;
		let date = d.toLocaleString('id', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
		try {
			let data = await fs.readFileSync(`./${fileName}`);
			let reply = await this.reply(Owner, `Database: ${date}`, null);
			await this.sendMessage(Owner, { document: data, fileName, mimetype: 'application/json' }, { quoted: reply });
			setting.backupTime = new Date() * 1;
		} catch (e) {
			console.error(e)
			throw false;
		}
	};
	return !0;
};
module.exports = handler;

/**
 * Dilarang Keras Untuk Menghapus atau Mengganti ini.
 *
 * Buatan @FokusDotId (Fokus ID)
 *
 * Script ini tidak untuk diperjualbelikan.
 * Script ini dibuat khusus buat pengguna panel PANELKU / MALESIN.
 * 
 * Saya hanya memudahkan kalian untuk mem-backup database agar tidak kereset, 
 * jika panel sedang Down / Mati.
 *
 * Terimakasih telah berlangganan Hosting di PANELKU / MALESIN.
 * Jangan lupa SHARE ke temen-temen kalian ya gays untuk membeli Hosting nya
 *
 * Thanks Smart Buyer 🙏
 *
 * @FokusDotId (Fokus ID)
 * WA: 6285157436653
 * WA2: 6281320170984
 *
 * Open juga jasa pembuatan Fitur / Script.
 */