let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, text, command }) => {
  if (!args[0]) throw `masukkan teks`
  let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=berkahbot&text=${encodeURIComponent(text)}`)
  if (!res.ok) throw 'error'
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.result)
}
handler.help = ['ai']
handler.tags = ['fun']
handler.command = /^((open)?ai)$/i
module.exports = handler
