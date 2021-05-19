//╔═╦═══• •✠•❀•✠ • •════╗
//║✧ུ║        「 INFO CREATOR」                     
//║✧ུ║ུNama : *Arya Manik*
//║✧ུ║ུNamaBot : *ManikBot*             
//║✧ུ║ུSC ORI : *MHANKBARBAR*             
//║✧ུ║ུTQTO : *ALL CREATOR BOT*             
//║✧ུ║ུTQTO : *PENYEDIA APIKEY DISINI*
//║✧ུ║ུYT : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
//╚═╩═══• •✠•❀•✠ • •════╝
//                    StayHalalNoBully
//SC ORI BY MBB
//RECODE BY MANIK
//MAU RECODE? BOLE BROK KITA SAMA" COMOT":V
//TAPI JAN LUPA ISI NAMA KITA" Y :)
//GANTI TAMPILAN MENU DI SRC/HELP.JS ATAU SIMPEL.JS YA
//GANTI FAKE/APIKEY DI SRC/SETTING.JSON ATAU MAKE COMMAND YA
//DISINI APIKEY LOLHUMAN, VHTEAR, XTEAM, FREE YA, TAPI GADA DI manikganz.JS, KALO MAU GANTI PAKE COMMAND AJA YA:V
//MAKASIH BUAT YG UDA MAKE SC GW 
/* =================================================================================================================*/    
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')

/*[-- Require setting --]*/
const FormData = require('form-data')
const chalk = require('chalk')
const qrcode = require("qrcode-terminal")
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { simpel, plem, sticker, game, seting, owner, tod, islam, downlod, movie, searching, randomtxt, animanga, ingfo, entert, chnger, creat, primbon, stalk, texpro, potoxy, epoto, film, searc, randomtext, berita, detek, nsftw, anime, randomimg, soviet, storage, entah, basenc, asup, shortl, detor, anti, edit, serti, nulis, sound } = require('./src/simpel')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const manikganz = JSON.parse(fs.readFileSync('./src/settings.json')) //GAUSAH DIGANTI NTAR EMROR NANGES!!
_registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
 prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const { ind } = require('./ManikBot')
const tebakgambar = JSON.parse(fs.readFileSync('./tebakgambar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const antifirtex2 = JSON.parse(fs.readFileSync('./database/group/antifirtex2.json'))
const antifirtex3 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
const antifirtex4 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))
const antifirtex5 = JSON.parse(fs.readFileSync('./database/group/antifirtex5.json'))
const antifirtex6 = JSON.parse(fs.readFileSync('./database/group/antifirtex6.json'))
const antifirtex7 = JSON.parse(fs.readFileSync('./database/group/antifirtex7.json'))
 premium = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const rekap = JSON.parse(fs.readFileSync('./src/rekapvir.json'))
const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const iron = JSON.parse(fs.readFileSync('./database/user/iron.json'))
const diamond = JSON.parse(fs.readFileSync('./database/user/diamond.json'))

/********** SET IMAGE **********/
const imageh = fs.readFileSync('./lib/♡.jpeg')

/********** SWITCH PUBLIC TO SELF **********/
public = false

/*[-- Apikey setting2 --]*/
const leyskey = manikganz.leyskey 
const mbbkey = manikganz.mbbKey 

/*[-- Load setting --]*/
prefix = manikganz.prefix
memberlimit = manikganz.memberlimit
limitawal = manikganz.limitawal
NamaBot = manikganz.namabot
NamaOwner = manikganz.NamaOwner
fakedoc = manikganz.fakedoc
fakereply = manikganz.fakereply
faketoko = manikganz.faketoko
imgibb = manikganz.imgibb

/*[-- ULTAH --]*/
kapan = "2021-12-06" //SET TANGGAL ULTAH KLEAN:V

/*[-- Blablabla --]*/
battre = 100
btre = 'Sisa Energi:\n[BELOM DETECT]'
numbernye = 0
blocked = []
hitt = []

/*[-- Apikey setting --]*/
 var _0x5ba0=['171879VsZBCF','137634inWHpD','368206kHmFhT','2JbpRex','711419ciLdcf','305897JQbgKC','dihmasapi','785965lNhMcz','741653CdVwFI'];var _0x3283fe=_0x3146;function _0x3146(_0x277926,_0x1e36a0){_0x277926=_0x277926-0x159;var _0x5ba037=_0x5ba0[_0x277926];return _0x5ba037;}(function(_0x180e9a,_0x493ae2){var _0x220fcf=_0x3146;while(!![]){try{var _0x28b2f1=parseInt(_0x220fcf(0x160))+parseInt(_0x220fcf(0x15e))+parseInt(_0x220fcf(0x15b))*parseInt(_0x220fcf(0x159))+-parseInt(_0x220fcf(0x15d))+parseInt(_0x220fcf(0x15f))+parseInt(_0x220fcf(0x161))+-parseInt(_0x220fcf(0x15a));if(_0x28b2f1===_0x493ae2)break;else _0x180e9a['push'](_0x180e9a['shift']());}catch(_0x3f3988){_0x180e9a['push'](_0x180e9a['shift']());}}}(_0x5ba0,0x82516),(lolkey=_0x3283fe(0x15c),xteamkey=_0x3283fe(0x15c),vhkey=_0x3283fe(0x15c)));

/********** FUNCTION **********/
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
	} catch (err) {
		console.log(err)
		reject(`Saya tidak tau ini anime apa`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://secureapp.simsimi.com/v1/simsimi/talkset?uid=297971048&av=6.9.3.4&lc=id&cc=ID&tz=Asia%2FJakarta&os=a&ak=quS%2FxiW%2Bb8ys5agzpljUdoPdLH8%3D&message_sentence=${text}&normalProb=8&isFilter=1&talkCnt=1&talkCntTotal=1&reqFilter=1&session=nSt8PSSmKRbcR7quUkfhXYpmDYgErtBefVbkkri9CrGSVjm4Cj2e2zBFjvdxSijp56WjyK6g2EWTj3KxKz65DL22&triggerKeywords=%5B%5D`, {method: 'GET'})
		const res = await sami.json()
		return res.simsimi_talk_set.answers[0].sentence
	} catch {
		return 'Simi ga tau kak'
	}
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('MANIK BOT|LOVE IT'), {
    font: 'block',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 3
  });
  

/********** REGISTER **********/
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
/********** FUNCTION LEVELING **********/
 getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
         getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
         getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
         addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
         addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
         addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
         getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
        
/********** FUNCTION GAME IRON **********/
        const addIdIron = (sender) => {
        	const obj = {id: sender, iron : 0}
            iron.push(obj)
            fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
        }
        const addIronUser = (sender, amount) => {
            let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                iron[position].iron += amount
                fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
            }
        }
        const checkIronUser = (sender) => {
        	let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return iron[position].iron
            }
        }
        const ambilIron = (sender, amount) => {
        	let position = false
            Object.keys(iron).forEach((i) => {
                if (iron[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                irom[position].iron -= amount
                fs.writeFileSync('./database/user/iron.json', JSON.stringify(iron))
            }
        }
     
     /********** PREMIUM **********/
     const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
/********** ATM **********/
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
/********** LIMIT **********/
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
/********** LIMIT **********/
const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    Manik.sendMessage(from, ind.limitend(pushname), text, {quoted: Arya})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

/********** LIMIT **********/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return Manik.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: Arya})
                            Manik.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : Arya})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        Manik.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : Arya})
                    }
				}

/********** TIME **********/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
/**HARI**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: pada = "Malem"; break;
                case 1: pada = "Malem"; break;
                case 2: pada = "Malem"; break;
                case 3: pada = "Pagi"; break;
                case 4: pada = "Pagi"; break;
                case 5: pada = "Pagi"; break;
                case 6: pada = "Pagi"; break;
                case 7: pada = "Pagi"; break;
                case 8: pada = "Pagi"; break;
                case 9: pada = "Pagi"; break;
                case 10: pada = "Pagi"; break;
                case 11: pada = "Siang"; break;
                case 12: pada = "Siang"; break;
                case 13: pada = "Siang"; break;
                case 14: pada = "Siang"; break;
                case 15: pada = "Sore"; break;
                case 16: pada = "Sore"; break;
                case 17: pada = "Sore"; break;
                case 18: pada = "Malem"; break;
                case 19: pada = "Malem"; break;
                case 20: pada = "Malem"; break;
                case 21: pada = "Malem"; break;
                case 22: pada = "Malem"; break;
                case 23: pada = "Malem"; break;
            }
 tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
 tampilWaktu =  jams + ":" + menit + ":" + detik;
 tampilHari = pada;

/********** CONNECTION **********/
async function starts() {
	console.log(color('Hai Manik!','red'))
	const Manik = new WAConnection()
	Manik.logger.level = 'warn'
	console.log(banner.string)
	Manik.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Subscribe「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」'))
	})
	var _0x26f8=['782085UBpvZP','║✧ུ║ུTQTO\x20:\x20PENYEDIA\x20APIKEY\x20DISINI','loadAuthInfo','197247ipYsWK','809352snNfmI','333HNAelh','stringify','writeFileSync','existsSync','57378gbmiEZ','470CHifKw','open','758399JwCSQI','1580699ZoghRe','2QEHcam','connecting','║✧ུ║ུTQTO\x20:\x20ALL\x20CREATOR\x20BOT\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','1hcciGw','║✧ུ║ུSC\x20ORI\x20:\x20MHANKBARBAR\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','base64EncodedAuthInfo','log','╔═╦═══•\x20•✠•❀•✠\x20•\x20•════╗','./ManikQr.json','║✧ུ║ུNama\x20:\x20Arya\x20Manik','║✧ུ║ུNamaBot\x20:\x20ManikBot-V10\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'];var _0x2beccc=_0x41e7;function _0x41e7(_0xabe7f1,_0x1dab81){_0xabe7f1=_0xabe7f1-0x18a;var _0x26f891=_0x26f8[_0xabe7f1];return _0x26f891;}(function(_0x3acc9a,_0x127ca0){var _0x473160=_0x41e7;while(!![]){try{var _0x3ee3bb=-parseInt(_0x473160(0x19d))+parseInt(_0x473160(0x18e))*-parseInt(_0x473160(0x19c))+-parseInt(_0x473160(0x1a2))+parseInt(_0x473160(0x18c))+-parseInt(_0x473160(0x19e))*-parseInt(_0x473160(0x18a))+-parseInt(_0x473160(0x199))+-parseInt(_0x473160(0x191))*-parseInt(_0x473160(0x18d));if(_0x3ee3bb===_0x127ca0)break;else _0x3acc9a['push'](_0x3acc9a['shift']());}catch(_0x10199c){_0x3acc9a['push'](_0x3acc9a['shift']());}}}(_0x26f8,0x6e6cb),Manik['on']('credentials-updated',()=>{var _0x4c04d3=_0x41e7;fs[_0x4c04d3(0x1a0)](_0x4c04d3(0x196),JSON[_0x4c04d3(0x19f)](Manik[_0x4c04d3(0x193)](),null,'\x09')),info('2','Login\x20Info\x20Updated');}),fs[_0x2beccc(0x1a1)]('./ManikQr.json')&&Manik[_0x2beccc(0x19b)](_0x2beccc(0x196)),Manik['on'](_0x2beccc(0x18f),()=>{start('2','Connecting...');}),Manik['on'](_0x2beccc(0x18b),()=>{var _0xf03823=_0x2beccc;success('2','Connected'),console[_0xf03823(0x194)](color('SUKSES\x20TERSAMBUNG\x20TUANKU!','red')),console[_0xf03823(0x194)](color(_0xf03823(0x195))),console[_0xf03823(0x194)](color('║✧ུ║\x20「\x20INFO\x20CREATOR」\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')),console[_0xf03823(0x194)](color(_0xf03823(0x197))),console[_0xf03823(0x194)](color(_0xf03823(0x198))),console[_0xf03823(0x194)](color(_0xf03823(0x192))),console[_0xf03823(0x194)](color(_0xf03823(0x190))),console[_0xf03823(0x194)](color(_0xf03823(0x19a))),console[_0xf03823(0x194)](color('║✧ུ║ུYT\x20:\x20「\x20ᴍᴀɴɪᴋ\x20ᴏғғɪᴄɪᴀʟツ\x20」')),console['log'](color('╚═╩═══•\x20•✠•❀•✠\x20•\x20•════╝'));}));
	var _0x3dbc=['1ezWikv','547902XFAwIZ','connect','1785899yJEvaO','ownerNumber','147149duqRpM','@s.whatsapp.net','sendMessage','1168393kfVoof','👋\x0aBot\x20Telah\x20Sukses\x20Tersambung\x20Pada\x20Nomor\x20Ini,\x20Prefix\x20Saat\x20Ini:\x20','Hai\x20Owner\x20','378006nKlFqw','615639mChzKi','948408fqaTvj','extendedText'];var _0x30fe20=_0xa21b;function _0xa21b(_0xba3aa5,_0x185b42){_0xba3aa5=_0xba3aa5-0xcc;var _0x3dbc24=_0x3dbc[_0xba3aa5];return _0x3dbc24;}(function(_0x225674,_0x40d3e1){var _0x2362ce=_0xa21b;while(!![]){try{var _0x194919=parseInt(_0x2362ce(0xda))+-parseInt(_0x2362ce(0xd2))+parseInt(_0x2362ce(0xd9))+parseInt(_0x2362ce(0xd8))+parseInt(_0x2362ce(0xd5))+-parseInt(_0x2362ce(0xce))*parseInt(_0x2362ce(0xcd))+-parseInt(_0x2362ce(0xd0));if(_0x194919===_0x40d3e1)break;else _0x225674['push'](_0x225674['shift']());}catch(_0x371599){_0x225674['push'](_0x225674['shift']());}}}(_0x3dbc,0x99af8),await Manik[_0x30fe20(0xcf)]({'timeoutMs':0x1e*0x3e8}),Manik[_0x30fe20(0xd4)](manikganz[_0x30fe20(0xd1)]+_0x30fe20(0xd3),_0x30fe20(0xd7)+NamaOwner+_0x30fe20(0xd6)+prefix,MessageType[_0x30fe20(0xcc)]));
	/********** SET ACTION **********/
const _0x26a1=['&bg=','messages','blocklist','\x0a║┣❥\x20Group\x20:\x20','participants','subject','&pp=','B391837A58338BA8186C47E51FFDFD4A','Kntl','group-participants-update','Hai\x20Bang\x20Owner,\x20Battery\x20Sisa\x20','\x0a╔═══\x20❰\x20「\x20*PROMOTED*\x20」❱\x20════\x0a║\x20*@','Sisa\x20Energi:\x0a','127382sLKOOG','\x20SELAMAT🥳*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20','66RmEAWW','contextInfo','pop','%[█████▒▒▒▒▒]','groupMetadata','push','%[█▒▒▒▒▒▒▒▒▒]','user','\x0a║┣❥\x20Pada\x20:\x20','getProfilePicture','CB:action,,battery','%[████▒▒▒▒▒▒]','Auto\x20block\x20system,\x20dont\x20call\x20please','sendMessage','%[████████▒▒]','text','&descriminator=','get','s.whatsapp.net','%[███▒▒▒▒▒▒▒]','%[███████▒▒▒]','_Welcome_','replace','remove','split','\x20intro*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20\x0a║┣❥\x20Umur\x20:\x0a║┣❥\x20Askot\x20:\x0a║┣❥\x20Cewe/Cowo?\x0a║┣❥\x20Tanggal\x20:\x20','\x0a╔═══\x20❰\x20「\x20*DEMOTED*\x20」❱\x20════\x0a║\x20*@','222359oddCBh','\x0a║┣❥\x20Date\x20:\x20','3eOVUyH','3GlzsvE','fromMe','%[██████▒▒▒▒]','*\x20⸩\x20═════','@c.us','http://hadi-api.herokuapp.com/api/card/welcome?nama=','image','Energi\x20Penuh:\x0a','1TjEIsX','jid','unshift','CB:action,,call','PENDING','_events','CB:action,add:relay,message','316891UHtuhq','chats','key','participant','1614069378','application/octet-stream','%[█████████▒]','protocolMessage','717933mmarCb','message','log','relayWAMessage','remoteJid','extendedText','action','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','add','CB:Blocklist','1136713OohpCh','\x0a╔═══\x20❰\x20「\x20*DELETE\x20DETECTED*\x20」❱\x20════\x0a║\x20*@','2qPdZuM','%[██▒▒▒▒▒▒▒▒]','\x0a║┣❥\x20*Your\x20Welcome🥳*\x0a╚════\x20⸨\x20*','contacts','value','promote','keys','includes','length','\x20JIAHAHA*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Nama\x20:\x20','4LAwWWK','\x20HAPUS\x20APAAN?*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a║┣❥\x20Pada\x20:\x20','68vEcNni','demote','100','21606fqrkCQ','Error\x20:\x20%s','&gcname=','dict','c.us','\x0a*Kalo\x20Balik\x20Bawain\x20Gorengan\x20Ya️*','PROMOTE'];const _0x2c68d7=_0x1950;(function(_0x2d6039,_0x28a19b){const _0x3ecd1b=_0x1950;while(!![]){try{const _0x204681=parseInt(_0x3ecd1b(0x1fa))*parseInt(_0x3ecd1b(0x213))+-parseInt(_0x3ecd1b(0x1cb))*parseInt(_0x3ecd1b(0x1da))+parseInt(_0x3ecd1b(0x1fd))*-parseInt(_0x3ecd1b(0x1f8))+-parseInt(_0x3ecd1b(0x1ee))*-parseInt(_0x3ecd1b(0x1c8))+parseInt(_0x3ecd1b(0x1ec))*parseInt(_0x3ecd1b(0x1d3))+parseInt(_0x3ecd1b(0x1e2))+parseInt(_0x3ecd1b(0x1ca))*-parseInt(_0x3ecd1b(0x211));if(_0x204681===_0x28a19b)break;else _0x2d6039['push'](_0x2d6039['shift']());}catch(_0x2f93ce){_0x2d6039['push'](_0x2d6039['shift']());}}}(_0x26a1,0xd7f81),Manik['on'](_0x2c68d7(0x20d),async _0x5e2bd1=>{const _0x7517b7=_0x2c68d7;if(!welkom[_0x7517b7(0x1f5)](_0x5e2bd1[_0x7517b7(0x1d4)]))return;try{mem=_0x5e2bd1[_0x7517b7(0x208)][0x0];try{var _0x47f2ab=await Manik[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0]['split']('@')[0x0]+_0x7517b7(0x1cf));}catch(_0x4ca682){var _0x47f2ab='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1ea)){let _0xc56c4e=await Manik['groupMetadata'](_0x5e2bd1[_0x7517b7(0x1d4)]);memeg=_0xc56c4e['participants'][_0x7517b7(0x1f6)],num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=Manik['contacts'][mem],teks='\x0a╔═══\x20❰\x20「\x20*WELCOME*\x20」❱\x20════\x0a║\x20*@'+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1c6)+tampilTanggal+'\x0a║┣❥\x20Jam\x20:\x20'+wita+_0x7517b7(0x1b5)+tampilHari+'\x0a╚════\x20⸨\x20*'+NamaBot+_0x7517b7(0x1ce);let _0x2cc59e=await getBuffer(_0x7517b7(0x1d0)+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1bd)+memeg+'&memcount='+memeg+'&gcname='+encodeURI(_0xc56c4e[_0x7517b7(0x209)])+_0x7517b7(0x20a)+_0x47f2ab+'&bg='+imgibb);Manik[_0x7517b7(0x1ba)](_0xc56c4e['id'],_0x2cc59e,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]}});}if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1c4)){let _0x5ec028=await Manik['groupMetadata'](_0x5e2bd1['jid']);num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=Manik['contacts'][mem],memeg=_0x5ec028[_0x7517b7(0x208)][_0x7517b7(0x1f6)],out='*Babay*\x20@'+num[_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x202);let _0x9835c=await getBuffer('http://hadi-api.herokuapp.com/api/card/goodbye?nama='+anu_user['notify']+_0x7517b7(0x1bd)+memeg+'&memcount='+memeg+_0x7517b7(0x1ff)+encodeURI(_0x5ec028[_0x7517b7(0x209)])+'&pp='+_0x47f2ab+_0x7517b7(0x204)+imgibb);Manik[_0x7517b7(0x1ba)](_0x5ec028['id'],_0x9835c,MessageType['image'],{'caption':out,'contextInfo':{'mentionedJid':[num]}});}else{if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1f3)){const _0x5f16c5=await Manik[_0x7517b7(0x217)](_0x5e2bd1[_0x7517b7(0x1d4)]);num=_0x5e2bd1['participants'][0x0],anu_user=Manik[_0x7517b7(0x1f1)][mem],memeg=_0x5f16c5[_0x7517b7(0x208)]['length'];try{ppimg=await Manik[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0][_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1cf));}catch{ppimg=_0x7517b7(0x1e9);}let _0x386767=await getBuffer(ppimg);teks=_0x7517b7(0x20f)+num['split']('@')[0x0]+_0x7517b7(0x212)+anu_user['notify']+_0x7517b7(0x1c9)+tampilTanggal+_0x7517b7(0x207)+_0x5f16c5['subject']+_0x7517b7(0x1f0)+NamaBot+'*\x20⸩\x20═════',Manik['sendMessage'](_0x5f16c5['id'],_0x386767,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]},'quoted':{'key':{'participant':''+numbernye,'remoteJid':'Kntl','fromMe':![],'id':_0x7517b7(0x20b)},'message':{'documentMessage':{'jpegThumbnail':_0x386767,'mimetype':'application/octet-stream','title':_0x7517b7(0x203),'fileLength':'36','pageCount':0x0,'fileName':'_Welcome_'}},'messageTimestamp':_0x7517b7(0x1de),'status':_0x7517b7(0x1d7)}});}else{if(_0x5e2bd1[_0x7517b7(0x1e8)]==_0x7517b7(0x1fb)){let _0x3dbe30=await Manik[_0x7517b7(0x217)](_0x5e2bd1[_0x7517b7(0x1d4)]);num=_0x5e2bd1[_0x7517b7(0x208)][0x0],anu_user=Manik[_0x7517b7(0x1f1)][mem],memeg=_0x3dbe30[_0x7517b7(0x208)][_0x7517b7(0x1f6)];try{ppimg=await Manik[_0x7517b7(0x1b6)](_0x5e2bd1['participants'][0x0][_0x7517b7(0x1c5)]('@')[0x0]+_0x7517b7(0x1cf));}catch{ppimg=_0x7517b7(0x1e9);}let _0x34b9c3=await getBuffer(ppimg);teks=_0x7517b7(0x1c7)+num['split']('@')[0x0]+_0x7517b7(0x1f7)+anu_user['notify']+_0x7517b7(0x1c9)+tampilTanggal+_0x7517b7(0x207)+_0x3dbe30[_0x7517b7(0x209)]+'\x0a║┣❥\x20*kasihaan\x20di\x20demote🤣*\x0a╚════\x20⸨\x20*'+NamaBot+_0x7517b7(0x1ce),Manik[_0x7517b7(0x1ba)](_0x3dbe30['id'],_0x34b9c3,MessageType[_0x7517b7(0x1d1)],{'caption':teks,'contextInfo':{'mentionedJid':[num]},'quoted':{'key':{'participant':''+numbernye,'remoteJid':_0x7517b7(0x20c),'fromMe':![],'id':'B391837A58338BA8186C47E51FFDFD4A'},'message':{'documentMessage':{'jpegThumbnail':_0x34b9c3,'mimetype':_0x7517b7(0x1df),'title':'PROMOTE','fileLength':'36','pageCount':0x0,'fileName':_0x7517b7(0x1c2)}},'messageTimestamp':_0x7517b7(0x1de),'status':_0x7517b7(0x1d7)}});}}}}catch(_0x3b2088){console[_0x7517b7(0x1e4)](_0x7517b7(0x1fe),color(e,'red'));}}),(unvoke=!![],unvokeMe=![]));function _0x1950(_0x440753,_0x35eba9){_0x440753=_0x440753-0x1b4;let _0x26a1ff=_0x26a1[_0x440753];return _0x26a1ff;}if(!Array['isArray'](Manik[_0x2c68d7(0x1d8)]['CB:action,add:relay,message']))Manik[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)]=[Manik[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)]];else Manik['_events'][_0x2c68d7(0x1d9)]=[Manik['_events'][_0x2c68d7(0x1d9)][_0x2c68d7(0x215)]()];Manik[_0x2c68d7(0x1d8)][_0x2c68d7(0x1d9)][_0x2c68d7(0x1d5)](async _0x5d09c2=>{const _0x4e1c06=_0x2c68d7;try{if(!unvoke)return;let _0x107e98=_0x5d09c2[0x2][0x0][0x2];if(_0x107e98['message']&&_0x107e98['message'][_0x4e1c06(0x1e1)]&&_0x107e98[_0x4e1c06(0x1e3)][_0x4e1c06(0x1e1)]['type']==0x0){let _0x5c93fd=_0x107e98[_0x4e1c06(0x1e3)][_0x4e1c06(0x1e1)][_0x4e1c06(0x1dc)];if(_0x5c93fd[_0x4e1c06(0x1cc)]&&!unvokeMe)return;let _0x42d3d1=Manik[_0x4e1c06(0x1db)][_0x4e1c06(0x1be)](_0x5c93fd[_0x4e1c06(0x1e6)]),_0x51b093=_0x42d3d1[_0x4e1c06(0x205)][_0x4e1c06(0x200)][_0x5c93fd['id']+'|'+(_0x5c93fd['fromMe']?0x1:0x0)],_0x229e7f=_0x5c93fd[_0x4e1c06(0x1cc)]?Manik[_0x4e1c06(0x1b4)]['jid']:_0x51b093[_0x4e1c06(0x1dd)]?_0x51b093[_0x4e1c06(0x1dd)]:_0x5c93fd[_0x4e1c06(0x1e6)];Manik[_0x4e1c06(0x1ba)](_0x5c93fd[_0x4e1c06(0x1e6)],_0x4e1c06(0x1ed)+_0x229e7f[_0x4e1c06(0x1c5)]('@')[0x0]+_0x4e1c06(0x1f9)+tampilHari+'\x20Hari\x0a║┣❥\x20Jam\x20:\x20'+wita+'\x0a║┣❥\x20Tanggal\x20:\x20'+tampilTanggal+'\x0a╚════\x20⸨\x20*'+NamaBot+_0x4e1c06(0x1ce),MessageType[_0x4e1c06(0x1e7)],{'contextInfo':{'mentionedJid':[_0x229e7f],'quotedMessage':_0x51b093[_0x4e1c06(0x1e3)]}});let _0x1cfc83=Manik['generateForwardMessageContent'](_0x51b093,![]),_0x2f7452=Object[_0x4e1c06(0x1f4)](_0x1cfc83)[0x0],_0x562feb=Object[_0x4e1c06(0x1f4)](_0x51b093['message'])[0x0],_0x160be5={};if(_0x562feb!=MessageType[_0x4e1c06(0x1bc)])_0x160be5=_0x51b093['message'][_0x562feb]['contextInfo'];_0x1cfc83[_0x2f7452][_0x4e1c06(0x214)]={..._0x160be5,..._0x1cfc83[_0x2f7452][_0x4e1c06(0x214)]};const _0x183d97=Manik['prepareMessageFromContent'](_0x5c93fd[_0x4e1c06(0x1e6)],_0x1cfc83,{});await Manik[_0x4e1c06(0x1e5)](_0x183d97);}}catch(_0x47000b){console['log'](_0x47000b);}}),Manik['on'](_0x2c68d7(0x1eb),_0x10ff6a=>{const _0x22cece=_0x2c68d7;if(blocked[_0x22cece(0x1f6)]>0x2)return;for(let _0x516c54 of _0x10ff6a[0x1][_0x22cece(0x206)]){blocked[_0x22cece(0x218)](_0x516c54[_0x22cece(0x1c3)](_0x22cece(0x201),_0x22cece(0x1bf)));}}),Manik['on'](_0x2c68d7(0x1d6),async _0x95ba68=>{const _0x62d7f9=_0x2c68d7,_0x547d94=_0x95ba68[0x2][0x0][0x1]['from'];console['log']('call\x20dari\x20'+_0x547d94),Manik[_0x62d7f9(0x1ba)](_0x547d94,_0x62d7f9(0x1b9),MessageType[_0x62d7f9(0x1bc)]),await sleep(0xfa0),await Manik['blockUser'](_0x547d94,_0x62d7f9(0x1ea));}),Manik['on'](_0x2c68d7(0x1b7),_0x1ab36f=>{const _0x1d2e14=_0x2c68d7,_0x52f3bd=_0x1ab36f[0x2][0x0][0x1][_0x1d2e14(0x1f2)],_0x576b38=parseInt(_0x52f3bd);battre=_0x576b38,console[_0x1d2e14(0x1e4)](_0x1d2e14(0x20e)+_0x576b38+'\x20Jangan\x20Maksain\x20Yah');if(_0x576b38=='1')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='2')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='3')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x219);else{if(_0x576b38=='4')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='5')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='6')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='7')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='8')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='9')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='10')btre='Sisa\x20Energi:\x0a'+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='11')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='12')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='13')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='14')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='15')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='16')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='17')btre=_0x1d2e14(0x210)+battre+'%[█▒▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='18')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x219);else{if(_0x576b38=='19')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x219);else{if(_0x576b38=='20')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='21')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='22')btre='Energi\x20Penuh:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='23')btre='Sisa\x20Energi:\x0a'+battre+'%[██▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='24')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='25')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='26')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='27')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='28')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1ef);else{if(_0x576b38=='29')btre=_0x1d2e14(0x210)+battre+'%[██▒▒▒▒▒▒▒▒]';else{if(_0x576b38=='30')btre='Sisa\x20Energi:\x0a'+battre+'%[███▒▒▒▒▒▒▒]';else{if(_0x576b38=='31')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='32')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='33')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='34')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='35')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='36')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='37')btre=_0x1d2e14(0x210)+battre+'%[███▒▒▒▒▒▒▒]';else{if(_0x576b38=='38')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='39')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c0);else{if(_0x576b38=='40')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='41')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='42')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='43')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='44')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='45')btre='Sisa\x20Energi:\x0a'+battre+'%[████▒▒▒▒▒▒]';else{if(_0x576b38=='46')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='46')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='48')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='49')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1b8);else{if(_0x576b38=='50')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='51')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='52')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='53')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x216);else{if(_0x576b38=='54')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='55')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='56')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x216);else{if(_0x576b38=='57')btre='Sisa\x20Energi:\x0a'+battre+'%[█████▒▒▒▒▒]';else{if(_0x576b38=='58')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x216);else{if(_0x576b38=='59')btre='Sisa\x20Energi:\x0a'+battre+'%[█████▒▒▒▒▒]';else{if(_0x576b38=='60')btre=_0x1d2e14(0x210)+battre+'%[██████▒▒▒▒]';else{if(_0x576b38=='61')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='62')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='63')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='64')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='65')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='66')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='67')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='68')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='69')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1cd);else{if(_0x576b38=='70')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='71')btre='Energi\x20Penuh:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='72')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='73')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='74')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='75')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='76')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='77')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='78')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='79')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1c1);else{if(_0x576b38=='80')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='81')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='82')btre=_0x1d2e14(0x1d2)+battre+'%[████████▒▒]';else{if(_0x576b38=='83')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='84')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='85')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='85')btre=_0x1d2e14(0x210)+battre+'%[████████▒▒]';else{if(_0x576b38=='87')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='88')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='89')btre='Sisa\x20Energi:\x0a'+battre+'%[████████▒▒]';else{if(_0x576b38=='90')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1bb);else{if(_0x576b38=='91')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='92')btre=_0x1d2e14(0x1d2)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='93')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='94')btre=_0x1d2e14(0x210)+battre+'%[█████████▒]';else{if(_0x576b38=='95')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='96')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='97')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='98')btre='Sisa\x20Energi:\x0a'+battre+_0x1d2e14(0x1e0);else{if(_0x576b38=='99')btre=_0x1d2e14(0x210)+battre+_0x1d2e14(0x1e0);else _0x576b38==_0x1d2e14(0x1fc)&&(btre=_0x1d2e14(0x210)+battre+'%[██████████]');}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}_0x576b38=='50'&&console[_0x1d2e14(0x1e4)]('Jangan\x20Memaksakan\x20Yah,\x20Lihat\x20Battery\x20Mu!?');});
			 
/*====================================================[ CHAT UPDATE ]==============================================================*/                    	 
	        Manik.on('chat-update', async (Arya) => {
		    try {
            if (!Arya.hasNewMessage) return
            Arya = Arya.messages.all()[0]
            if (!Arya.message) return
	        Arya.message = (Object.keys(Arya.message)[0] === 'ephemeralMessage') ? Arya.message.ephemeralMessage.message : Arya.message
			if (!Arya.message) return
			if (Arya.key && Arya.key.remoteJid == 'status@broadcast') return
			global.prefix
			global.blocked
			const content = JSON.stringify(Arya.message)
			const from = Arya.key.remoteJid
			const type = Object.keys(Arya.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && Arya.message.conversation.startsWith(prefix)) ? Arya.message.conversation : (type == 'imageMessage') && Arya.message.imageMessage.caption.startsWith(prefix) ? Arya.message.imageMessage.caption : (type == 'videoMessage') && Arya.message.videoMessage.caption.startsWith(prefix) ? Arya.message.videoMessage.caption : (type == 'extendedTextMessage') && Arya.message.extendedTextMessage.text.startsWith(prefix) ? Arya.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? Arya.message.conversation : (type === 'extendedTextMessage') ? Arya.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			mess = {	
			wait: '*「 ⌛ 」Sedang di proses...*\n\nsilahkan tunggu ± 1 min! Jika Tidak Muncul\nKemungkinan ERROR Mohon Jangan Spam.',
			asik: '*「 ⌛ 」Sedang di proses...*\n\nsilahkan tunggu ± 1 min! Jika Tidak Muncul\nKemungkinan ERROR Mohon Jangan Spam.',
			success: '*「 ☑️ 」Berhasil!*',
			levelon: '*「 ☑️ 」Sukses Mengaktifkan Fitur Leveling!*',
			leveloff: '*「 ☑️ 」Sukses Menonaktifkan Fitur Leveling!*',
			levelnoton: '*「 ❗ 」Fitur Leveling Tidak Aktif, Segera Hubungi Owner Untuk Mengaktifkan Fitur Tersebut.*   \n\n*Nomor owner https://wa.me/6281375026190*',
			levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
			},
			error = {
			stick: '*「 ❌ 」Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker.*',
			Iv: '*「 ❌ 」Link yang anda kirim tidak valid.*'
			},
			only = {
			group: '*「 ❗ 」Perintah ini hanya bisa di gunakan dalam group.*',
			premium: '*「 ❗ 」Fitur Ini Hanya Untuk Penggunaan Premium.*',
			mod: '*「 ❗ 」Fitur Ini Hanya Untuk Penggunaan Mods ManikBot',
			benned: `*「 USER BANNED DETECTED 」* \nAnda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda`,
			ownerG: '*「 ❗ 」Fitur Ini Khusus Owner.*',
			ownerB: '*「 ❗ 」Fitur Ini Khusus Owner.*',
			daftarB: `*「 NOT REGISTERED DETECTED 」* \nHalo Human, Yuk Daftar Dulu Soalnya Anda Belum Terdaftar Dalam Database ManikBot\n\n *──Segera Registrasi Data Diri Anda──* \n\nKetik : ${prefix}register nama|umur\nContoh : ${prefix}register Manik|16`,
			admin: '*「 ❗ 」*  Perintah ini hanya bisa di gunakan oleh admin group.',
			Badmin: ' *「 ❗ 」*  Perintah ini hanya bisa di gunakan ketika bot menjadi admin.',
			publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
			donator: '*Fitur ini khusus donator*',
			Theif: '*Maaf Sidik Wajah Anda Tidak Terdaftar di dalam Database Bot*',
			}
			const botNumber = Manik.user.jid
			const ownerNumber = [`${manikganz.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			sender = isGroup ? Arya.participant : Arya.key.remoteJid
			pushname = Manik.contacts[sender] != undefined ? Manik.contacts[sender].vname || Manik.contacts[sender].notify : undefined
			const senderNumber = sender.split("@")[0] 
			const mentionUser = type == "extendedTextMessage" ? Arya.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? Arya.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            hitt.push(command)
            const q = args.join(' ')
            const hour_now = moment().format('HH:mm:ss')
			const groupMetadata = isGroup ? await Manik.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isPrem = prem.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
            const isAntiFirtex2 = isGroup ? antifirtex2.includes(from) : false
            const isAntiFirtex3 = isGroup ? antifirtex3.includes(from) : false
            const isAntiFirtex4 = isGroup ? antifirtex4.includes(from) : false
            const isAntiFirtex5 = isGroup ? antifirtex5.includes(from) : false
            const isAntiFirtex6 = isGroup ? antifirtex6.includes(from) : false
            const isAntiFirtex7 = isGroup ? antifirtex7.includes(from) : false
            const isRekvir = isGroup ? rekap.includes(from) : false
			totalchat = await Manik.chats.all()
			const isBanned = ban.includes(sender)
			const fkon = { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: { "contactMessage": { "displayName": `${NamaOwner}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${NamaOwner},;;;\nFN:${NamaBot},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./lib/◇.jpeg')}}}
			const fdoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakedoc, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')}}}
            const forwd = { forwardingScore: 1000, isForwarded: true }
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
			const btrai = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": btre, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./lib/♡.jpeg`)}, "title": faketoko, "description": "ManikGanz", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "ManikGanz", "productImageCount": 1}, "businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const fakethumb = (teks, yes) => {
            Manik.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/♡.jpeg'),quoted:Arya,caption:yes})
           }
			const reply = (teks) => {
				Manik.sendMessage(from, teks, text, {quoted:Arya})
			}
			const sendMess = (hehe, teks) => {
				Manik.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Manik.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Manik.sendMessage(from, teks.trim(), extendedText, {quoted: Arya, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			 //detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Manik.contacts[from] != undefined ? Manik.contacts[from].vname || Manik.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
		    isRegistered = checkRegisteredUser (sender)
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			    }
/*====================================================[ GAME ]==============================================================*/                    	 
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
/*====================================================[ ROLE LEVELING ]==============================================================*/                    	  
 ManikRole = getLevelingLevel(sender)
   	     role = 'Newbie ㋡'
        if (ManikRole <= 2) {
            role = 'Newbie ㋡'
        } else if (ManikRole <= 4) {
            role = 'Beginner Tier1 ⚊¹'
        } else if (ManikRole <= 6) {
            role = 'Beginner Tier2 ⚊²'
        } else if (ManikRole <= 8) {
            role = 'Beginner Tier3 ⚊³'
        } else if (ManikRole <= 10) {
            role = 'Beginner Tier4 ⚊⁴'
        } else if (ManikRole <= 12) {
            role = 'Private Tier1 ⚌¹'
        } else if (ManikRole <= 14) {
            role = 'Private Tier2 ⚌²'
        } else if (ManikRole <= 16) {
            role = 'Private Tier3 ⚌³'
        } else if (ManikRole <= 18) {
            role = 'Private Tier4 ⚌⁴'
        } else if (ManikRole <= 20) {
            role = 'Private Tier5 ⚌⁵'
        } else if (ManikRole <= 22) {
            role = 'Corporal Tier1 ☰¹'
        } else if (ManikRole <= 24) {
            role = 'Corporal Tier2 ☰²'
        } else if (ManikRole <= 26) {
            role = 'Corporal Tier3 ☰³'
        } else if (ManikRole <= 28) {
            role = 'Corporal Tier4 ☰⁴'
        } else if (ManikRole <= 30) {
            role = 'Corporal Tier5 ☰⁵'
        } else if (ManikRole <= 32) {
            role = 'Sergeant Tier1 ≣¹'
        } else if (ManikRole <= 34) {
            role = 'Sergeant Tier2 ≣²'
        } else if (ManikRole <= 36) {
            role = 'Sergeant Tier3 ≣³'
        } else if (ManikRole <= 38) {
            role = 'Sergeant Tier4 ≣⁴'
        } else if (ManikRole <= 40) {
            role = 'Sergeant Tier5 ≣⁵'
        } else if (ManikRole <= 42) {
            role = 'Staff Tier1 ﹀¹'
        } else if (ManikRole <= 44) {
            role = 'Staff Tier2 ﹀²'
        } else if (ManikRole <= 46) {
            role = 'Staff Tier3 ﹀³'
        } else if (ManikRole <= 48) {
            role = 'Staff Tier4 ﹀⁴'
        } else if (ManikRole <= 50) {
            role = 'Staff Tier5 ﹀⁵'
        } else if (ManikRole <= 52) {
            role = 'Sergeant Tier1 ︾¹'
        } else if (ManikRole <= 54) {
            role = 'Sergeant Tier2 ︾²'
        } else if (ManikRole <= 56) {
            role = 'Sergeant Tier3 ︾³'
        } else if (ManikRole <= 58) {
            role = 'Sergeant Tier4 ︾⁴'
        } else if (ManikRole <= 60) {
            role = 'Sergeant Tier5 ︾⁵'
        } else if (ManikRole <= 62) {
            role = '2nd Lt. Tier1 ♢¹ '
        } else if (ManikRole <= 64) {
            role = '2nd Lt. Tier2 ♢²'
        } else if (ManikRole <= 66) {
            role = '2nd Lt. Tier3 ♢³'
        } else if (ManikRole <= 68) {
            role = '2nd Lt. Tier4 ♢⁴'
        } else if (ManikRole <= 70) {
            role = '2nd Lt. Tier5 ♢⁵'
        } else if (ManikRole <= 72) {
            role = '1st Lt. Tier1 ♢♢¹'
        } else if (ManikRole <= 74) {
            role = '1st Lt. Tier2 ♢♢²'
        } else if (ManikRole <= 76) {
            role = '1st Lt. Tier3 ♢♢³'
        } else if (ManikRole <= 78) {
            role = '1st Lt. Tier4 ♢♢⁴'
        } else if (ManikRole <= 80) {
            role = '1st Lt. Tier5 ♢♢⁵'
        } else if (ManikRole <= 82) {
            role = 'Major Tier1 ✷¹'
        } else if (ManikRole <= 84) {
            role = 'Major Tier2 ✷²'
        } else if (ManikRole <= 86) {
            role = 'Major Tier3 ✷³'
        } else if (ManikRole <= 88) {
            role = 'Major Tier4 ✷⁴'
        } else if (ManikRole <= 90) {
            role = 'Major Tier5 ✷⁵'
        } else if (ManikRole <= 92) {
            role = 'Colonel Tier1 ✷✷¹'
        } else if (ManikRole <= 94) {
            role = 'Colonel Tier2 ✷✷²'
        } else if (ManikRole <= 96) {
            role = 'Colonel Tier3 ✷✷³'
        } else if (ManikRole <= 98) {
            role = 'Colonel Tier4 ✷✷⁴'
        } else if (ManikRole <= 100) {
            role = 'Colonel Tier5 ✷✷⁵'
        } else if (ManikRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (ManikRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (ManikRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (ManikRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (ManikRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (ManikRole <= 112) {
            role = 'Major General Early ✰'
        } else if (ManikRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (ManikRole <= 116) {
            role = 'Major General gold ✯'
        } else if (ManikRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (ManikRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (ManikRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (ManikRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (ManikRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (ManikRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (ManikRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (ManikRole <= 132) {
            role = 'General Early ✰'
        } else if (ManikRole <= 134) {
            role = 'General Silver ✩'
        } else if (ManikRole <= 136) {
            role = 'General gold ✯'
        } else if (ManikRole <= 138) {
            role = 'General Platinum ✬'
        } else if (ManikRole <= 140) {
            role = 'General Diamond ✪'
        } else if (ManikRole <= 142) {
            role = 'Commander Early ★'
        } else if (ManikRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (ManikRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (ManikRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (ManikRole <= 152) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 154) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 156) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 158) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 160) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 162) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 164) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 166) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 168) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 170) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 172) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 174) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 176) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 178) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 180) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 182) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 184) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 186) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 188) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 190) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 192) {
            role = 'Legends I 忍'
        } else if (ManikRole <= 194) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 196) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 198) {
            role = 'Legends II 忍'
        } else if (ManikRole <= 200) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 210) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 220) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 230) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 240) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 250) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 260) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 270) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 280) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 290) {
            role = 'Legends III 忍'
        } else if (ManikRole <= 300) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 310) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 320) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 330) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 340) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 350) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 360) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 370) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 380) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 390) {
            role = 'Legends IV 忍'
        } else if (ManikRole <= 400) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 410) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 420) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 430) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 440) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 450) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 460) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 470) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 480) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 490) {
            role = 'Legends V 忍'
        } else if (ManikRole <= 500) {
            role = 'Legends VI 忍'
        } else if (ManikRole <= 600) {
            role = 'Legends VII 忍'
        } else if (ManikRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (ManikRole <= 800) {
            role = 'Legends IX 忍'
        } else if (ManikRole <= 900) {
            role = 'Legends X 忍'
        } else if (ManikRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (ManikRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (ManikRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (ManikRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (ManikRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (ManikRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (ManikRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (ManikRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (ManikRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (ManikRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (ManikRole <= 99999999999) {
   	         role = 'End level 程度❗'
        }
        /********** TINGKAT - LEVELING **********/
 ManikBars = getLevelingLevel(sender)
			 bars = `[▒▒▒▒▒▒▒▒▒]`
			if (ManikBars <= 10) {
				bars = `[█▒▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 20) {
				bars = `[██▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 30) {
				bars = `[███▒▒▒▒▒▒]`
			} else if (ManikBars <= 40) {
				bars = `[████▒▒▒▒▒]`
			} else if (ManikBars <= 50) {
				bars = `[█████▒▒▒▒]`
			} else if (ManikBars <= 60) {
				bars = `[██████▒▒▒]`
			} else if (ManikBars <= 70) {
				bars = `[███████▒▒]`
			} else if (ManikBars <= 80) {
				bars = `[████████▒]`
			} else if (ManikBars <= 90) {
				bars = `[█████████]`
			} else if (ManikBars <= 100) {
				bars = `[█████████]`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+1*`
			} else if (ManikBars <= 120) {
				bars = `[█████████]+2*`
			} else if (ManikBars <= 130) {
				bars = `[█████████]+3*`
			} else if (ManikBars <= 140) {
				bars = `[█████████]+4*`
			} else if (ManikBars <= 150) {
				bars = `[█████████]+5*`
			} else if (ManikBars <= 160) {
				bars = `[█████████]+6*`
			} else if (ManikBars <= 170) {
				bars = `[█████████]+7*`
			} else if (ManikBars <= 180) {
				bars = `[█████████]+8*`
			} else if (ManikBars <= 190) {
				bars = `[█████████]+9*`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+10*`
			} else if (ManikBars <= 99999999999999) {
				bars = `[█████████]+上帝*`
            }
            
            if (!Arya.message) return
		if (Arya.key && Arya.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(Arya.message)[0]
		budo = (typei === 'conversation') ? Arya.message.conversation : (typei === 'extendedTextMessage') ? Arya.message.extendedTextMessage.text : ''
			if(Arya.key.fromMe){
			if (budo === `>public`){
				public = true
				
				Manik.sendMessage(from, 'SUKSES MENGUBAH MODE: PUBLIC', text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
			}
			if (budo === `>self`){
				public = false
				
				Manik.sendMessage(from, 'SUKSES MENGUBAH MODE: SELF', text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')}) 
				}
	     	}
	    	if (!public) {
			if (!Arya.key.fromMe && !isOwner) return
	      	}
            
        /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙏𝙀𝘽𝘼𝙆 𝙂𝘼𝙈𝘽𝘼𝙍***\\\\\
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Mantap kamu berhasil menjawab dengan tepat\nSelamat ")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Gagal coba lagi!")
                }
            }
        /////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘽𝘼𝘿𝙒𝙊𝙍𝘿𝙎***\\\\\
if (bad.includes(sender)){
	if (!isGroup) return
	if (!isBadWord) return
	if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	Manik.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? Chat Owner BOT wa.me/6285737134572_*`)
	setTimeout( () => {
	    Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 1000)
	setTimeout( () => {
	    Manik.updatePresence(from, Presence.composing)
	    reply("「 𝗕𝗔𝗖𝗔𝗞𝗔𝗡 𝗔𝗟𝗙𝗔𝗧𝗜𝗛𝗔𝗛 」𝗞𝗶𝘁𝗮 𝗱𝗼𝗮𝗸𝗮𝗻 𝘀𝗲𝗺𝗼𝗴𝗮 𝗱𝗶𝗮 𝗗𝗶𝗯𝗲𝗿𝗶𝗸𝗮𝗻 𝗛𝗶𝗱𝗮𝘆𝗮𝗵 𝗦𝗮𝗺𝗮 𝗔𝗹𝗹𝗮𝗵, 𝗯𝗶𝗮𝗿 𝗴𝗮𝗸 𝗸𝗮𝘀𝗮𝗿 𝗟𝗮𝗴𝗶 𝗨𝗰𝗮𝗽𝗮𝗻𝗻𝘆𝗮.")
	}, 0)
    }

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("facebook.com/")){
		if (!isGroup) return
		if (!isAntiLinkfb) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Facebook*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Facebook Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("instagram.com/")){
		if (!isGroup) return
		if (!isAntiLinkig) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Instagram*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Instagram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙂𝙍𝙊𝙐𝙋***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Grup*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Group Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtube.com/")){
		if (!isGroup) return
		if (!isAntiLinkytc) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄??𝙀𝙊***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLinkytv) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
		}, 0)
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// buatan Arifi Razzaq OFFICIAL
        if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntiLinkTelegram) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Telegram*')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Telegram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			Manik.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Link Hanya Di Hari Ahad.*")
		}, 0)
	}
	
/////*** ANTI VIRTEX BY***\\\\\
if (budy.includes("๒๒")){
		if (!isGroup) return
		if (!isAntifirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiFirtex2) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntifirtex3) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
		if (!isGroup) return
		if (!isAntifirtex4) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntifirtex5) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntifirtex6) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
	}
if (budy.includes("9999999")){
		if (!isGroup) return
		if (!isAntifirtex7) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Manik.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
		setTimeout( () => {
			Manik.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
		Manik.updatePresence(from, Presence.composing)
		rekap.push(`${sender}@s.whatsapp.net`)
		fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
			reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
		}, 0)
    }
    
/////*** AFK ***\\\\\
for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Dia Lagi Afk Coy!?\n"
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    Manik.sendMessage(from, ini_txt, text, {quoted: Arya})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
            
            
/*====================================================[ LIMIT MEMBER GC ]==============================================================*/                    	 
               if (isGroup) {
			   try {
			   const getmemex = groupMembers.length
			   if (getmemex <= memberlimit) {
               Manik.groupLeave(from)
			   }
		       } catch (err) { console.error(err)  }
               }
        
/*====================================================[ REGISTER ]==============================================================*/                    	 
                if (isRegistered && isGroup) {
                const checkIronnya = checkIronUser(sender)
                try {
                if (checkIronnya === undefined) addIdIron(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 2
                addIronUser(sender, uangsaku)
                } catch (err) {
                console.error(err)
                }
                }

/*====================================================[ LEVELING ]==============================================================*/                    	 
                if (isGroup && isRegistered && isLevelingOn) {
                const currentLevel = getLevelingLevel(sender)
                const checkId = getLevelingId(sender)
                try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                const papanPeringkat = getLevelingLevel(sender)
                const ManikRole = getLevelingLevel(sender)
                const bares = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)
               await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, ManikBars))
               }
               } catch (err) {
               console.error(err)
               }
               }
/*====================================================[ PREMIUM ]==============================================================*/                    	 
	            premi = '*USER BIASA*'
			    if (isPrem) {
			    premi = '*USER PREMIUM*'
			    } 
			    if (isOwner) {
			    premi = '*UNLIMITED PREMIUM*'
			    }
	            hayuk = '❌'
			    if (isRegistered) {
			    hayuk = '✔'
			    }
/*====================================================[ LENGKAPAN ]==============================================================*/                    	 
	            reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		        uangku = checkATMuser(sender)
			    send = "6285737134572@s.whatsapp.net"
                sen = "6282147334265@s.whatsapp.net"
                senk = "62895622956173@s.whatsapp.net"
//TENTANG BOT
                a = []
				good = []
				for (mem of totalchat){
			    a.push(mem.jid)
				}
				for (yaa of a){
				if (yaa && yaa.includes('g.us')){
				good.push(yaa)
				}
				}
	             var _0x5ba5=['floor','\x20Hari\x20','1wVZZlY','102871psRAoH','304ZfsTDS','43kbgWdY','281CXVwGS','1uBGtax','2727FilWTC','106921JbOjDx','3347pHCEdI','\x20Menit\x20','665357OGvkOE','getTime','430881FpXuSX','4zwWHeO','5711kBTVfh','\x20Detik'];function _0x595c(_0x5ef0c3,_0x1063cc){_0x5ef0c3=_0x5ef0c3-0x1ad;var _0x5ba5c2=_0x5ba5[_0x5ef0c3];return _0x5ba5c2;}var _0x17d02d=_0x595c;(function(_0x2267a4,_0x13a425){var _0x19d78a=_0x595c;while(!![]){try{var _0x1494a8=parseInt(_0x19d78a(0x1ba))+-parseInt(_0x19d78a(0x1af))*parseInt(_0x19d78a(0x1bb))+-parseInt(_0x19d78a(0x1b4))*-parseInt(_0x19d78a(0x1b2))+parseInt(_0x19d78a(0x1bc))*parseInt(_0x19d78a(0x1b1))+parseInt(_0x19d78a(0x1b5))*-parseInt(_0x19d78a(0x1b3))+parseInt(_0x19d78a(0x1b8))*parseInt(_0x19d78a(0x1ae))+parseInt(_0x19d78a(0x1b6))*-parseInt(_0x19d78a(0x1b0));if(_0x1494a8===_0x13a425)break;else _0x2267a4['push'](_0x2267a4['shift']());}catch(_0x21b6cb){_0x2267a4['push'](_0x2267a4['shift']());}}}(_0x5ba5,0x8bb2d));var countDownDate=new Date(''+kapan)[_0x17d02d(0x1b9)](),now=new Date()[_0x17d02d(0x1b9)](),distance=countDownDate-now,dayss=Math[_0x17d02d(0x1be)](distance/(0x3e8*0x3c*0x3c*0x18)),hourss=Math['floor'](distance%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),minutess=Math[_0x17d02d(0x1be)](distance%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),secondss=Math[_0x17d02d(0x1be)](distance%(0x3e8*0x3c)/0x3e8);ultahku=dayss+_0x17d02d(0x1ad)+hourss+'\x20Jam\x20'+minutess+_0x17d02d(0x1b7)+secondss+_0x17d02d(0x1bd);
				stat = public ? 'PUBLIC': 'SELF'
//********** WAKTU **********/
 jam = moment.tz('Asia/Jakarta').format('HH:mm')
 wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
 wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
ultah = new Date('2021','12','06').valueOf()
tungmun = moment(ultah - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')
				switch(command) {
/*====================================================[ COMMAND ]==============================================================*/                    	 
				case 'help':
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: help(prefix), contextInfo: {"mentionedJid": [send, sen, senk, sender], forwardingScore: 1000, isForwarded: true}})
				break
				case 'simpelmenu':
				if (!isRegistered) return reply(ind.noregis())
				Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: simpel(prefix), contextInfo: {"mentionedJid": [send, sen, senk, sender], forwardingScore: 1000, isForwarded: true}})
				break
				case 'menusimpel':
				    if (args.length < 1) return reply('Mau Lihat Menusimpel Apa Kak?')
                    if (args[0] == 'premium') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: plem(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'sticker') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: sticker(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'game') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: game(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'setting') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: seting(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'owner') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: owner(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'tod') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: tod(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'anime') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: anime(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'islami') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: islam(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'download') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: downlod(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'movie') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: movie(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'searching') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: searching(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'randomtext') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: randomtxt(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'animanga') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: animanga(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'information') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: ingfo(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'entertainment') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: entert(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'soundchanger') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: chnger(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'creator') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: creat(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'primbon') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: primbon(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'stalk') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: stalk(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'textpro') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: texpro(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'photoxy') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: potoxy(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'ephoto') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: epoto(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'film') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: film(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'search') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: searc(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'berita') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: berita(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'deteksi') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: detek(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'nsfw') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: nsftw(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'randomimg') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: randomimg(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'soviet') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: soviet(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'storage') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: storage(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'entah') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: entah(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'basenc') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: basenc(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'asupan') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: asup(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'shortlink') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: shortl(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'detector') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: detor(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'antivirus') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: anti(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'edit') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: edit(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'sertifikat') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: serti(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'nulis') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: nulis(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    if (args[0] == 'sound') {
                    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: btrai, caption: sound(prefix), contextInfo: {forwardingScore: 1000, isForwarded: true}})
                    }
                    break
				    case 'info':
				me = Manik.user
				uptime = process.uptime()
				teks = `
*Nama bot* : ${me.name}
*Nomor Bot* : @${me.jid.split('@')[0]}
*Prefix* : ${prefix}
*Total Block Contact* : ${blocked.length}
*The bot is active on* : ${kyun(uptime)}`
				buffer = await getBuffer(me.imgUrl)
				Manik.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				break
				    case 'blocklist':
				teks = 'This is list of blocked number :\n'
				for (let block of blocked) {
				teks += `~> @${block.split('@')[0]}\n`
				}
				teks += `Total : ${blocked.length}`
				Manik.sendMessage(from, teks.trim(), extendedText, {quoted: Arya, contextInfo: {"mentionedJid": blocked}})
				break
				    case 'ocr':
				if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
				const media = await Manik.downloadAndSaveMediaMessage(encmedia)
				reply(mess.wait)
				await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
				.then(teks => {
				reply(teks.trim())
				fs.unlinkSync(media)
				})
				.catch(err => {
				reply(err.message)
				fs.unlinkSync(media)
				})
				} else {
				reply('Foto aja mas')
				}
				break
				    case 'antidelete':
				if(!isOwner) return reply('Only Owner Can Use This Command!')
				if (args[0] == 'aktif') {
				unvoke = true
				Manik.sendMessage(from, 'Antidelete Sudah diaktifkan untuk semua chat!',text)
				} else if (args[0] == 'mati') {
				unvoke = false
				Manik.sendMessage(from, 'Antidelete Sudah Dimatikan Untuk Semua Chat!!',text)
				}
				break
				    case 'tp':
				if (args.length < 1) {
				return reply('Pilih themenya om, 1 - 162')
				} else if (args[0].toLowerCase() === 'list') {
				teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
				teks = teks.replace(/<br>/g, '\n')
				return reply(teks)
				} else if (args.length < 2) {
				return reply('Teksnya juga dong om')
				}
				reply(mess.wait)
				anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=IDxO1TFYnKADlX4pxcHa`
				voss = await fetch(anu)	
				ftype = require('file-type')	
				vuss = await ftype.fromStream(voss.body)
				if (vuss !== undefined) {
				Manik.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: Arya })
				} else {
				reply('Terjadi kesalahan, silahkan pilih theme lain')
				}
				break
				    case 'ep':
				if (args.length < 1) {
				return reply('Pilih themenya om, 1 - 216')
				} else if (args[0].toLowerCase() === 'list') {
				teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
				teks = teks.replace(/<br>/g, '\n')
				return reply(teks)
				} else if (args.length < 2) {
				return reply('Teksnya juga dong om')
				}
				reply(mess.wait)
				anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=IDxO1TFYnKADlX4pxcHa`
				voss = await fetch(anu)
				ftype = require('file-type')
				vuss = await ftype.fromStream(voss.body)
				//console.log(vuss)
				if (vuss !== undefined) {
				Manik.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: Arya })
				} else {
				reply('Terjadi kesalahan, silahkan pilih theme lain')
				}
				break    
				case 'stiker':
				case 'sticker':
				if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
				const media = await Manik.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.input(media)
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				reply(`❌ Gagal, pada saat mengkonversi ke stiker`)
				})
				.on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ${addMetadata('Manik', 'Punya')} ${ran} -o ${ran}`, async (error) => {
				if (error) return reply(`❌ Gagal, pada saat mengkonversi ke stiker`)
				Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
				fs.unlinkSync(media)	
				fs.unlinkSync(ran)	
				})
				/*Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
				fs.unlinkSync(media)
				fs.unlinkSync(ran)*/
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && Arya.message.videoMessage.seconds < 11 || isQuotedVideo && Arya.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
				const media = await Manik.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				reply(mess.wait)
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				tipe = media.endsWith('.mp4') ? 'video' : 'gif'
				reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
				})
				.on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ${addMetadata('Manik', 'Punya')} ${ran} -o ${ran}`, async (error) => {
				if (error) return reply(`❌ Gagal, pada saat mengkonversi ke stiker`)
				Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				/*Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
				fs.unlinkSync(media)
				fs.unlinkSync(ran)*/
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
				const media = await Manik.downloadAndSaveMediaMessage(encmedia)
				ranw = getRandom('.webp')
				ranp = getRandom('.png')
				reply(mess.wait)
				keyrmbg = 'Your-ApiKey'
				await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
				fs.unlinkSync(media)
				let buffer = Buffer.from(res.base64img, 'base64')
				fs.writeFileSync(ranp, buffer, (err) => {
				if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
				})
				exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(`❌ Gagal, pada saat mengkonversi ke stiker`)
				exec(`webpmux -set exif ${addMetadata('Manik', 'Punya')} ${ranw} -o ${ranw}`, async (error) => {
				if (error) return reply(`❌ Gagal, pada saat mengkonversi ke stiker`)
				Manik.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: Arya})
				fs.unlinkSync(ranw)
				})
				//Manik.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: Arya})
				})
				})
				/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
				const media = await Manik.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.on('start', function (cmd) {
				console.log('Started :', cmd)
				})
				.on('error', function (err) {
				fs.unlinkSync(media)
				console.log('Error :', err)
				})
				.on('end', function () {
				console.log('Finish')
				fs.unlinkSync(media)
				Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)*/
				} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
				}
				break
/* ===================================================[ GAME ]==============================================================*/        
				    case 'tembak':
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                	 
				    case 'gtts':
					if (args.length < 1) return Manik.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: Arya})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Manik.sendMessage(from, 'Textnya mana om', text, {quoted: Arya})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						Manik.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				    case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: '.......'})
					break
				/*case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: '.......'})
					break*/
					case 'setlolkey':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					lolkey = args[0]
					manikganz.lolkey = lolkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${lolkey}`)
					break
					case 'setxteamkey':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					xteamkey = args[0]
					manikganz.xteamkey = xteamkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${xteamkey}`)
					break
					case 'setvhkey':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					vhkey = args[0]
					manikganz.vhkey = vhkey
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${vhkey}`)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					manikganz.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
					case 'cekimg': //CASE BY M4N1K
					if (!isOwner) return reply('Owner Only')
					if (args.length < 1) return
					mangnik = args[0]
					tupp = await getBuffer(`${mangnik}`)
					Manik.sendMessage(from, tupp, image, {quoted: Arya, caption: 'Nih Imagenya'})
					break
					case 'setbgwelkom'://CASE BY M4N1K
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					imgibb = args[0]
					manikganz.imgibb = imgibb
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Background Welcome berhasil di ubah menjadi : ${imgibb}`)
					buff = await getBuffer(`${imgibb}`)
					Manik.sendMessage(from, buff, image, {quoted: Arya, caption: 'Nih Bgnya'})
					break
					case 'setfaketoko':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					faketoko = args[0]
					manikganz.faketoko = faketoko
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Fake Toko berhasil di ubah menjadi : ${faketoko}`)
					break
					case 'setfakereply':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					fakereply = args[0]
					manikganz.fakereply = fakereply
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Fake Reply berhasil di ubah menjadi : ${fakereply}`)
					break
					case 'setfakedoc':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					fakedoc = args[0]
					manikganz.fakedoc = fakedoc
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Fake Dokumen berhasil di ubah menjadi : ${fakedoc}`)
					break
					case 'setNamaBot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					NamaBot = args[0]
					manikganz.NamaBot = NamaBot
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Nama Bot berhasil di ubah menjadi : ${NamaBot}`)
					break
				/*case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Ingat! Citai Lolimu'})
					})
					break
				    case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				    case 'hilih':
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarManikBars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break*/
				case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.moe/api/yta?url=${args[0]}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					Manik.sendMessage(from, thumb, image, {quoted: Arya, caption: teks})
					buffer = await getBuffer(anu.result)
					Manik.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: Arya})
					break
				    case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					nomore = '1'
					teks = '=================\n'
					for (let i of anu.result.data) {
						teks += `\n${prefix}getaudio ${nomore}\n*Title* : ${i.judul}\n*Id* : ${i.id}\n*Pengupload* : ${i.channel}\n*Duration* : ${i.duration}\n*Views* : ${i.views}\n=================\n`
						nomore++
					}
					await Manik.sendMessage(from, teks.trim(), text)
					case 'getaudio': //Get audio simple
					aud = args[0] - 1
					nope = await fetchJson(`https://videfikri.com/api/ytmp3/?url=https://youtu.be/${anu.result.data[aud].id}`)
					nu = nope.result
					thumb = await getBuffer(nu.thumbnail)
					katanya = `*Lagu di temukan*\nJudul : ${nu.judul}\nSize : ${nu.size}\nSource : https://youtu.be/${nu.id}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					if (Number(nu.size.split(' MB')[0]) >= 5.0) return Manik.sendMessage(from, thumb, image, { quoted: Arya, caption: `*Lagu di temukan*\nJudul : ${nu.judul}\nSize : ${nu.size}\nSource : https://youtu.be/${nu.id}\n\nSize lagu terlalu besar silakan download sendiri\nLink : ${nu.url}`})
					Manik.sendMessage(from, thumb, image, { quoted: Arya, caption: katanya })
					buffer = await getBuffer(nu.url)
					Manik.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Arya, ptt: true })
					await limitAdd(sender)
					break
				    case 'tiktokstalk':
					try {
						if (args.length < 1) return Manik.sendMessage(from, 'Usernamenya mana um?', text, {quoted: Arya})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: teks})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
				    case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/nulis?text=${teks}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					Manik.sendMessage(from, buff, image, {quoted: Arya, caption: mess.success})
					break
				    case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					Manik.sendMessage(from, buff, image, {quoted: Arya})
					break
				    case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.moe/api/text2image?text=${teks}&apiKey=IDxO1TFYnKADlX4pxcHa`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(error.stick)
						exec(`webpmux -set exif ${addMetadata('Manik', 'Punya')} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(error.stick)
							Manik.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: Arya})
							fs.unlinkSync(rano)
						})
						/*Manik.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: Arya})
						fs.unlinkSync(rano)*/
					})
					break
				    case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					Manik.sendMessage(from, teks, text, {detectLinks: false, quoted: Arya})
					break
					case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
				    case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await Manik.chats.all()
					Manik.setMaxListeners(25)
					for (let _ of anu) {
						Manik.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				    case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await Manik.chats.all()
					if (isMedia && !Arya.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
						buff = await Manik.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Manik.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST MANIK BOT ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST MANIK BOT ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                   case 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (Arya.message.extendedTextMessage === undefined || Arya.message.extendedTextMessage === null) return
mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
Manik.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
Manik.groupMakeAdmin(from, mentioned)
}
break
					case 'addprem': //FIX BY MANIK
				if (!isOwner) return reply(ind.ownerb()) //owner only
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				const knom = mente
				snUser = createSerial(20)
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				premium.push(knom) 
				fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium)) 
				Manik.sendMessage(from, ind.premadd(args[0]), text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
				break
				case 'delprem': //FIX BY MANIK
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   const lnom = {id: mente , expired: Date.now() + toMs(expired) }
 		       const mnom = mente
    		    prem.splice(lnom)
      	  	fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
       		 premium.splice(mnom) 
 			   fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium))
				Manik.sendMessage(from, ind.dellprem(args[0]), text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
				break 
				case 'premlist':
	            case 'listprem': 
	            //FIX BY MANIK
	            if (!isRegistered) return reply( ind.noregis())
	            let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	            let nomorList = 0
	            const deret = getAllPremiumUser()
	            const arrayPremi = []
	            for (let i = 0; i < deret.length; i++) {
	            const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	            arrayPremi.push(getAllPremiumUser()[i])
	            nomorList++
	            listPremi += `
${nomorList}. wa.me/${getAllPremiumUser()[i]}
➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	            }
	            Manik.sendMessage(from, listPremi, text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')})
	            break
				case 'checkprem': //FIX BY MANIK
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				premtext =  `
*「 PREMIUM EXPIRED 」*

➸ *ID*: ${sender.split('@')[0]}
➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
				Manik.sendMessage(from, premtext, text, {quoted: freply, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg','base64')}) 
				break
				    case 'demote':
				    Manik.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Arya.message.extendedTextMessage === undefined || Arya.message.extendedTextMessage === null) return reply('ð“ðšð  ð­ðšð«ð ðžð­ ð²ðšð§ð  ð¦ðšð® ðð¢ ð­ð®ð«ð®ð§ð¤ðšð§ ðšðð¦ð¢ð§')
					mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `Berhasil Demote :\n`
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Manik.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`)
						Manik.groupDemoteAdmin(from, mentioned)
					}
					break
				    case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Manik.groupAdd(from, [num])
					} catch (err) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				    case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Arya.message.extendedTextMessage === undefined || Arya.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Manik.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Manik.groupRemove(from, mentioned)
					}
					break
				    case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await Manik.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	Manik.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				    case 'toimg':
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				    case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbar.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				    case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				    case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				    case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (Arya.message.extendedTextMessage === undefined || Arya.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Manik.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Manik.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (err) {
						reply('Gagal om')
					}
					break
				    case 'wait':
					if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
						media = await Manik.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Manik.sendMessage(from, res.video, video, {quoted: Arya, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
//=====================================PENAMBAHAN KEBAWAH COK=====================================\\
case 'triggered':
		if (!isRegistered) return reply(ind.noregis())
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        Manik.sendMessage(from, buff, sticker, { quoted: Arya})
                        fs.unlinkSync(rano)
                    })
                    break
                case 'wasted':
		if (!isRegistered) return reply(ind.noregis())
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/${wasted}?apikey=${lolkey}&img=${ini_url}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'semoji':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😎`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    Manik.sendMessage(from, ini_buffer, sticker, { quoted: Arya})
                    break
                case 'fakedonald':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'faketoko':
		if (!isRegistered) return reply(ind.noregis())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Manik", code = "IDR", price = 1000000)
                    break
               
               // Creator By Lolhuman Team
    case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Manik.sendMessage(from, ini_buffer, sticker, { quoted: Arya})
                    break
                    case 'attp':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=SoftApikey&text=${teks}`)
                    Manik.sendMessage(from, buffer, sticker, { quoted: Arya})
                    break
                    case 'qrcode':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=SoftApikey&text=${query}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                    case 'nulis':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=SoftApikey&text=${teks}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
                    case 'apikeycek':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
                    get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    case 'ytkomen':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=SoftApikey&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
                    case 'phkomen':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=SoftApikey&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
                    case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=SoftApikey&text=${body.slice(9)}`)
                    Manik.sendMessage(from, buffer, sticker, { quoted: Arya})
                    break
                    case 'tolol': 
			if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${lolkey}&name=${gatauda}`, {method: 'get'})
				Manik.sendMessage(from, buffer, image, {quoted: Arya})
				break
				    case 'emojitoimg': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply('Contoh: 😎')
				gatauda = body.slice(6)
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${gatauda}?apikey=SoftApikey`, {method: 'get'})
				Manik.sendMessage(from, buffer, image, {quoted: Arya})
				break
				    case 'quotemaker':
			if (!isRegistered) return reply(ind.noregis())
			cf = `${body.slice(12)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Manik`)
                    text = args[0]
                    author = args[1]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quotemaker2?apikey=${lolkey}&text=${text}&author=${author}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
				    case 'ktpmaker':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Manik|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break

                case 'spamsms':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break

                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		        if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		        if (!isRegistered) return reply(ind.noregis())
	            if (!isPrem) return reply(`Perintah ini hanya khusus Premium\n Ketik ${prefix}owner Untuk Membeli Premium`)
                    bupper = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                    Manik.sendMessage(from, bupper, image, { quoted: Arya})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		        if (!isRegistered) return reply(ind.noregis())
		        if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		        if (!isRegistered) return reply(ind.noregis())
	            if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        Manik.sendMessage(from, buff, sticker, { quoted: Arya})
                        fs.unlinkSync(rano)
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
			//Stalking
                   case 'igstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: txt})
					break
		case 'githubstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: txt})
					break
		case 'tkstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: txt})
					break
		case 'ytstalk':
					if (!isRegistered) return reply(ind.noregis())
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = 'â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢\n'
					for (let search of anu.result) {
						cari += `*Chanel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\nâ€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢\n`
					}
					reply(cari.trim())
					break
                   // Entertaiment 
		case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolkey}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					Manik.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.name, text, {quoted: Arya}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, tebakbender, text, {quoted: Arya}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                
				case 'family100':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Manik.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.aswer, text, {quoted: Arya}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, family, text, {quoted: Arya}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Manik.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.answer, text, {quoted: Arya}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, caklontong, text, {quoted: Arya}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'asupan':
			if (!isRegistered) return reply(ind.noregis())
			if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    Manik.sendMessage(from, buffer, video, { quoted: Arya, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${lolkey}`, {method: 'get'})
				Manik.sendMessage(from, buffer, image, {quoted: Arya})
				break
				    case 'memeindo': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`, {method: 'get'})
				Manik.sendMessage(from, buffer, image, {quoted: Arya})
				break
				    case 'darkjoke': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=KatoNiBoss`, {method: 'get'})
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'By ManikBot'})
				break
				    case 'namaninja': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolkey}&nama=${gatauda}`)
					reply(anu.result)
					break
					case 'alay': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Sofyan AMV`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'hilih': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: By ManikBot`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
                    case 'kusonime':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'otakudesu':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    Manik.sendMessage(from, ini_buffer, document, { quoted: Arya, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'nekopoisearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'heroml':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    Manik.sendMessage(from, ini_icon, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'wikipedia':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    Manik.sendMessage(from, get_buffer, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'lirik':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    Manik.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: Arya})
                    reply(ini_txt)
                    break
                case 'covidindo':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolkey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        const filePath = await Manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'drakorongoing':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'wattpadsearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
		if (!isRegistered) return reply(ind.noregis())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
		if (!isRegistered) return reply(ind.noregis())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return reply(ind.noregis())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		Manik.sendMessage(from, buffer, image, { quoted: Arya})
		break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
		if (!isRegistered) return reply(ind.noregis())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'gimage2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        Manik.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'wallpapersearch':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'wallpapersearch2':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'playstore':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
		if (!isRegistered) return reply(ind.noregis())
                shopp = `${body.slice(8)}`
                  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/shopee?apikey=${lolkey}&query=${shopp}`, {method: 'get'})
                  shopee = '==========================\n'
                  for (let disho of anu.result){
                  shopee += `â€¢ Name: ${disho.name}\nâ€¢ Terjual: ${disho.sold}\nâ€¢ Stock: ${disho.stock}\nâ€¢ Desk: ${disho.desc}\nâ€¢ Lokasi: ${disho.shop_loc}\nâ€¢ Link: ${disho.link_produk}\nâ€¢ Gambar: ${disho.image_cover}\n==========================\n`
                  }
                  reply(shopee.trim())
                  break
                case 'google':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `â€¢ Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        Manik.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Manik`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'wancak':
		if (!isRegistered) return reply(ind.noregis())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break

                    // Creator
                    case 'sticker2': 
					if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
						const media = await Manik.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && lol.message.videoMessage.seconds < 11 || isQuotedVideo && lol.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
						const media = await Manik.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									Manik.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Arya})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
                case 'stickerwm':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await Manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Manik.sendMessage(from, ini_buff, sticker, { quoted: Arya})
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'tiktoknowm':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    Manik.sendMessage(from, ini_buffer, video, { quoted: Arya})
                    break
                case 'tiktokmusic':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: Arya})
                    break
                case 'spotify':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Arya})
                    break
                case 'spotifysearch':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: Arya})
                    break
                case 'igdl':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, ini_type, { quoted: Arya})
                    break
                case 'fbdl':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, video, { quoted: Arya})
                    break
                case 'zippyshare':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'pinterestdl':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'pixiv':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'pixivdl':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolkey}`)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
                case 'xhamstersearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'xnxxsearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'manga':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
                case 'anime':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: ini_txt })
                    break
case 'broadcast':
		if (!isRegistered) return reply(ind.noregis())
                    if(!isOwner) return reply("Command only for owner bot")
                    list_chat = await Manik.chats.all()
                    ini_text = args.join(" ")
                    for (let chat of list_chat) {
                        sendMess(chat.jid, ini_text)
                    }
                    break
			case 'superhero':
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=KatoNiBoss&query=${body.slice(11)}`)
                    get_result = get_result.result
		    txt = `Id : ${get_result.id}\n`
                    txt += `Nama : ${get_result.name}\n`
                    txt = `Status : ${get_result.powerstats.intelligence} - ${get_result.powerstats.strength} - ${get_result.powerstats.speed} - ${get_result.powerstats.durability} - ${get_result.powerstats.power} - ${get_result.powerstats.combat}\n`
                    txt += `BioGrap : ${get_result.biography.full-name} - ${get_result.biography.alter-egos}\n`
                    txt += `Series : ${get_result.aliases}\n`
                    txt += `Ultah : ${get_result.place-of-birth}\n`
                    txt += `Place : ${get_result.first-appearance}\n`
                    txt += `Publish : ${get_result.publisher}\n`
                    txt += `Rating : ${get_result.alignment}\n`
                    txt += `Gender : ${get_result.appearance.gender}\n`
                    txt += `Race : ${get_result.appearance.race}\n`
                    txt += `Height : ${get_result.appearance.height}\n`
                    txt += `Warna mata : ${get_result.appearance.eye-color}\n`
                    txt += `Warna rambut : ${get_result.appearance.hair-color}\n`
                    txt += `Work : ${get_result.work.occupation} - ${get_result.work.base} - ${get_result.work.connections}\n`
                    buffer = await getBuffer(get_result.image.url)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: txt })
                    break
		//pic//
		case 'getpic':
					if (args.length < 1) return 
					if (Manik.message.extendedTextMessage === undefined || Manik.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = Manik.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await Manik.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						Manik.sendMessage(from, buffer, image, {quoted: Arya})
					} catch (err) {
						Manik.sendMessage(from, buffer, image, {quoted:lol})
					}
					break
                    // Islami //
                case 'listsurah':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    Manik.sendMessage(from, ini_buffer, audio, { quoted: Arya, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //
                case 'ytplay':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: Arya})
                    break
                case 'ytplay2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: Arya})
                    get_video = await getBuffer(get_result.video)
                    Manik.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: Arya})
                    break
		    case 'ytmp33':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio2?apikey=KatoNiBoss&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: txt })
		    get_audio = await getBuffer(get_result.link[0].size)
		    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Arya })
                    break
                case 'ytsearch':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Arya})
                    break
                case 'ytmp32':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: Arya})
                    break
                case 'ytmp4':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    Manik.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: Arya})
                    break
                case 'ytmp42':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    Manik.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: Arya})
                    break
                case 'telesticker':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        Manik.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'twtstalk':
				if (!isRegistered) return reply(ind.noregis())
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
						txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					Manik.sendMessage(from, profile, image, {quoted: Arya, caption: txt})
					Manik.sendMessage(from, banner, image, {quoted: Arya, caption: 'BANNERNYA OM!' })
					break
		case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('eror breks')
						buffer = fs.readFileSync(ran)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					break
		case 'toimg2':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker) && args.length == 0) { 
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await Manik.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        request({
                            url: `http://lolhuman.herokuapp.com/api/convert/topng?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Manik.sendMessage(from, ini_buff, image, { quoted: Arya, caption: 'Ni Udh Jadi Boss' })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Tag Stickernya!`)
                    }
                    break
case 'takestick':
		if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await Manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Manik.sendMessage(from, ini_buff, sticker, { quoted: Arya })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'delete':
			case 'del':
			case 'd':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply('KHUSUS GROUP')
                       if (!isGroupAdmins) return reply('KHUSUS ADMIN')
                       if(!isOwner) return reply("Command only for owner bot")
					Manik.deleteMessage(from, { id: Arya.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'listpenyimak': 
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(Manik.chats.get(ido).presences), Manik.user.jid]
			    Manik.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*NYIMAK=GADA TEMEN*`, text, { quoted: Arya,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
		case 'spekhp':
	            query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/gsmarena?apikey=chotomate09&query=${query}`)
                    get_result = get_result.result
                    txt = `Nama : ${get_result.phone_name}\n`
                    txt += `Network : ${get_result.specification.network.net2g} -  ${get_result.specification.network.net3g} -  ${get_result.specification.network.net4g} -  ${get_result.specification.network.net5g}\n`
                    txt += `Body : ${get_result.body.dimensions} - ${get_result.body.weight} - ${get_result.body.build} - ${get_result.body.sim} - ${get_result.body.bodyother}\n`
                    txt += `Display : ${get_result.display.displaytype} - ${get_result.display.displaysize} - ${get_result.display.displayresolution}\n`
                    txt += `PlatFrom : ${get_result.platform.os} - ${get_result.platform.chipset} - ${get_result.platform.cpu} - ${get_result.platform.gpu}\n`
                    txt += `Memo : ${get_result.memory.memoryslot} - ${get_result.memory.internalmemory} - ${get_result.memory.memoryother}\n`
                    txt += `Camera : ${get_result.maincamera.cam1modules} - ${get_result.maincamera.cam1features}\n`
                    txt += `Selfie : ${get_result.selfiecamera.cam2modules} -  ${get_result.selfiecamera.cam2features} - ${get_result.selfiecamera.cam2video}\n`
                    txt += `Sound : ${get_result.sound.optionalother}\n`
                    txt += `Cosms : ${get_result.comms.bluetooth} - ${get_result.comms.gps} - ${get_result.comms.nfc} - ${get_result.comms.radio} - ${get_result.comms.usb}\n`
                    txt += `Features : ${get_result.features.sensors}\n`
                    txt += `Batre rambut : ${get_result.battery.batdescription1}\n`
                    txt += `Misc : ${get_result.misc.colors} - ${get_result.misc.models} - ${get_result.misc.price} - ${get_result.misc.tests} - ${get_result.misc.tbench} - ${get_result.misc.batlife}`
                    buffer = await getBuffer(get_result.phone_image)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: txt })
                    break
		case 'togif':
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            lolhuman.sendMessage(from, ini_buff, video, { quoted: Arya, mimetype: "video/gif", filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
case 'truth':
		if (!isRegistered) return reply(ind.noregis())
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = fs.readFileSync('./lib/tod.jpeg')
		Manik.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: Arya })
		break
		case 'short':
                Manik.updatePresence(from, Presence.composing) 
                data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink?apikey=Ar-Mr108P&url=${args[0]}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
                reply(hasil)
                break
		case 'dare':
		if (!isRegistered) return reply(ind.noregis())
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ðŸ¦„??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = fs.readFileSync('./lib/tod.jpeg')
		Manik.sendMessage(from, tod, image, { quoted: Arya, caption: '*DARE*\n\n'+ der })
		break
		case 'elang':
		if (!isRegistered) return reply(ind.noregis())
                    query = args.join("elang")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=elang`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya})
                    break
case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nð—§ð—¼ð˜ð—®ð—¹ : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						Manik.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						Manik.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                Manik.groupUpdateSubject(from, `${body.slice(9)}`)
                Manik.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: Arya})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                Manik.groupUpdateDescription(from, `${body.slice(9)}`)
                Manik.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: Arya})
					break
case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                       media = await Manik.downloadAndSaveMediaMessage(Arya)
                         await Manik.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break
case 'tagimg':
                    if(!isOwner) return reply("Command only for owner bot")
                    if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await Manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Manik.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: Arya
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Manik.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'hidetag':
                    if(!isOwner) return reply("Command only for owner bot")
                    var value = args.join(" ")
                    var group = await Manik.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        text: value,
                        contextInfo: { mentionedJid: mem },
                        quoted: Arya
                    }
                    Manik.sendMessage(from, options, text)
                    break
                case 'tagstick':
                    if(!isOwner) return reply("Command only for owner bot")
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
                        filePath = await Manik.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Manik.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: Arya
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Manik.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		//group\\
			case 'pinterestvid':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestvideo?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    Manik.sendMessage(from, ini_buffer, video, { quoted: Arya})
                    break
                    case 'terganteng':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'caklontong':
                    if (!isRegistered) return reply(ind.noregis())
	            	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/caklontong?apikey=dappabotwa`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					Manik.sendMessage(from, '* Jawaban :* '+anu.result.jawaban+ '\n\n Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: Arya}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, caklontong, text, {quoted: Arya}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			        case 'family100':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isLimit(sender)) return reply(ind.limitend(pusname))
	      	        
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/family100?apikey=${leyskey}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					Manik.sendMessage(from, '* Jawaban :* '+anu.result.jawaban, text, {quoted: Arya}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, family, text, {quoted: Arya }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				    case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/kuis/tebakgambar?apikey=dappabotwa`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.images)
					tebak = ` Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					Manik.sendMessage(from, tebak, text, {quoted: Arya})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Manik.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: Arya }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					
//=====================================BATES NGAB=====================================\\
//RandomImagemenu
                    // MENU COMMAND SOVIET
					case 'ww2':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					await limitAdd(sender)
					break
					//makermenu
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    manyyikg = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${manyyikg}`)
                    Manik.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
                case 'bakarnama': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamsertiArifi Razzaq*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'nulis':
                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(6)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                Manik.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
				    case 'nulis2':
                 
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                Manik.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
                case 'nulis3':
                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                Manik.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
                case 'nulis4':
                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulisArifi Razzaq`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                Manik.sendMessage(from, asu, image, {caption: 'dont forget to subscribe YouTube Channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
                case 'attp':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}attpArifi Razzaq`)
                dapuhy = body.slice(5)
				dapzz = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dapuhy}`)
				Manik.sendMessage(from, dapzz, sticker, {quoted: Arya})
				break
                case 'ttp':
                
			    if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}ttpArifi Razzaq`)
                dapuhy = body.slice(4)
				dapzz = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${dapuhy}`)
				Manik.sendMessage(from, dapzz, sticker, {quoted: Arya})
				break
                case 'logogaming':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}logogaming Manik*`)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
Manik.sendMessage(from, game, image, {quoted: Arya})
break
                case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    Manik.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: Arya})
                    break
         
               case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manik`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    Manik.sendMessage(from, buffer, image, {caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL', quoted: Arya})
                break
                case 'googlesearch':
			    
	        	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlesearch Jangan|Lupa|Subscribe`)
				reply(ind.wait())
				ct = body.slice(14)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				dap3 = ct.split("/")[2];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'pubglogo':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname)) 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(9)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=pubg&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'glitchtext':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitchtext Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(11)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&theme=glitch&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'cup':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cupArifi Razzaq`)
				reply(ind.wait())
				ct = body.slice(4)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'cup2':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}cup2Arifi Razzaq`)
				reply(ind.wait())
				ct = body.slice(5)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'battlefield':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}battlefield Manik|Manik`)
				reply(ind.wait())
				ct = body.slice(12)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${dap1}&text2=${dap2}&theme=battlefield&apikey=dappabotwa`)
				dapuhy = await getBuffer(anu.result.url)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel Arifi Razzaq OFFICIAL' })
				break
				    case 'hartatahta':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahtaArifi Razzaq`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				Manik.sendMessage(from, asu, image, {quoted: Arya})
				await limitAdd(sender)
				break
				
//=====================================BATES NGAB=====================================\\
//ownermenu
                    case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply(' SUCCSESS  menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
case 'spamchat': //CASE BY Manik
if (!isOwner) return reply(ind.ownerb()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
jumblah = args[1]
Pesan = args[2]
for ( let i = 0 ; i < jumblah; i++) {
Manik.sendMessage( nomer + '@s.whatsapp.net' , pesan , Text)
}  
break
//nsfwmenu
                case 'randombokep':
                if (!isNsfw) return reply(ind.nsfwoff())
			     Manik.updatePresence(from, Presence.composing) 
				 dappz = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(dappz);
                 babilu = Math.floor(Math.random() * jsonData.length);
                 anjglu = jsonData[babilu];
                 dapbokepp = await getBuffer(anjglu.image)
                 reply(ind.wait())
                 asww = anjglu.teks
                 Manik.sendMessage(from, dapbokepp, image, {quoted: Arya, caption: asww})
                 break
                
		        case 'pussy': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'nekonime': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'baka': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'blowjob': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'lewd': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'hentai': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'waifu': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'eroyuri': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'hug': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break
		        case 'hug2': 
		if (!isNsfw) return reply(ind.nsfwoff())
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${odcKey}`)
				buffer = await getBuffer(anu.result.url)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'Nih hasilnya kak...'})
				break

case 'cariteman':
//sertakan nama aku jangan claim jangan recode, biarkan kek gini oke! @arifirazzaq2001
//case by Arifi Razzaq
//bug fixed by arifi razzaq
if (isBanned) return reply(mess.only.benned)    
if (!isRegistered) return reply(mess.only.daftarB)
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Sedang Mencari Seseorang...')
try {
ppimg = await Manik.getProfilePicture(`${hem.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=halo

Klik APi untuk memulai obrolan`
  its = await getBuffer (ppimg)
  Manik.sendMessage(from, its, image, {
quoted: Arya, caption: teks
  })
                await reply( `Seseorang Ditemukan: \n*${prefix}next* — Cari Teman Lagi`)
                await limitAdd(sender)
            break
case 'lanjut':
//kasih kredot gua suh javaica
//Bug Fixed by @arifirazzaq2001 
if (isBanned) return reply(mess.only.benned)    
if (!isRegistered) return reply(mess.only.daftarB)
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Sedang Memuat — Mencari Lagi')
				try {
				ppimg = await Manik.getProfilePicture(`${anug.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
  teks = `‣ *Nama* : ${pushname}
  ‣ *Nomor* : ${anug.split("@")[0]}
‣ *APi* : wa.me/${anug.split("@")[0]}?text=halo

Klik APi untuk memulai obrolan`
  Ciecie = await getBuffer (ppimg)
  Manik.sendMessage(from, Ciecie, image, {
quoted: Arya, caption: teks
  })
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
				    case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				    case 'ytplaymp3':
   case 'ytplaymp4':
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    nikkkkkkkkj = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=apivinz&q=${query}`)
                    nikkkkkkkkj = nikkkkkkkkj.result
                     nikk =`TITLE = ${nikkkkkkkkj.title}\nSIZE = ${nikkkkkkkkj.size}`
                    gambary = await getBuffer(nikkkkkkkkj.thumbnail)
                    Manik.sendMessage(from, gambary, image, { quoted: Arya, caption: nikk })
                    get_audio = await getBuffer(nikkkkkkkkj.url_audio)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${nikkkkkkkkj.title}.mp3`, quoted: Arya})
                    get_video = await getBuffer(nikkkkkkkkj.url_video)
                    Manik.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${nikkkkkkkkj.title}.mp4`, quoted: Arya})
                    break
				    case 'joox':
    if (!isPrem) return reply(ind.premium())
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    jooxbyManik = await fetchJson(`https://api.xteam.xyz/dl/jooxdl?lagu=${query}&APIKEY=${xteamkey}`)
                    jooxbyManik = jooxbyManik.result
                    Manikbot = `Title : ${jooxbyManik.songname}\nArtists : ${jooxbyManik.singers}\nDuration : ${jooxbyManik.duration}\nAlbum : ${jooxbyManik.album}\nUkuran : ${jooxbyManik.filesize}\nke : ${jooxbyManik.ext}\n`
                    thumbnail = await getBuffer(jooxbyManik.album_url)
                    Manik.sendMessage(from, thumbnail, image, { quoted: Arya, caption: Manikbot })
                    get_audio = await getBuffer(jooxbyManik.download_url)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${jooxbyManik.songname}.mp3`, quoted: Arya})
                    break
                    case 'suit':
				 if (!isRegistered) return reply(ind.noregis())
				 suit = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=${xteamkey}`, {method: 'get'})
					teks = '=================\n'
					for(i of result){
						teks += `*Punyamu* : ${i.jawabanmu}\n*Punyabot* : ${i.jawabanbot}\n*Hasil* : ${i.hasil}\n*Poin* : ${i.poin}\n=================\n`
					}
					reply(teks)
					break
					case 'aesthetic':
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/estetik?apikey=${leysKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
				    case 'ppcouple':
				  if (!isRegistered) return reply( ind.noregis())

				if (isLimit(sender)) return reply(ind.limitend(pusname))

				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${leysKey}`, {method: 'get'})
				laki = await getBuffer(anu.result.male)
				Manik.sendMessage(from, laki, image, {quoted: Arya, caption: '*JAN LUPA SUKREP Manik*'})
				cewe = await getBuffer(anu.result.female)
				Manik.sendMessage(from, cewe, image, {quoted: Arya, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
case 'anime':
  case 'animerandom':
				  if (!isRegistered) return reply( ind.noregis())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/random-niArya?apikey=${leysKey}`, {method: 'get'})
				animee = await getBuffer(anu.result)
				Manik.sendMessage(from, animee, image, {quoted: Arya, caption: '*JAN LUPA SUKREP Manik*'})
				await limitAdd(sender)
				break
				    case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285737134572@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				    case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break

				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('mau beli berapa?')
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim* : ManikBot\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				    case 'gtavposter':
case 'pencil':
case 'pencildrawing':
case 'burneffect':
case 'crossgun':
case 'customwp':
case 'nightbeach':
case 'raindrop':
case '3dlinephoto':
  
var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, nikhmmp, image, {quoted:Arya})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	break
	case 'comunism':
	  case 'trigger':
	    case 'rotate':
	      case 'delete':
	        case 'tobecontinue':
	          case 'thuglife':
var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 Manik.sendMessage(from, nikhmmp, image, {quoted:Arya})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	break
	case 'tomp3':
                if (!isRegistered) return reply( ind.noregis())
                	Manik.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya ❌')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						Manik.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Arya})
						fs.unlinkSync(ran)
					})
					break
				    case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: 'ini '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
               			
case 'readallchat':
   case 'readall':
      case 'rall':
				const readallid = await Manik.chats.all()
			Manik.setMaxListeners(25)
				for (let xyz of readallid) {
					await Manik.chatRead(xyz.jid)
				}
		      Manik.sendMessage(from, `Sukses!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./src/Ivan.jpg')}}}})
break

case 'fast':
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
					case 'gemes':
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
					break
case 'tempo':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko})
						fs.unlinkSync(ran)
					})
				break
				    case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				       case 'getpic':
					if (args.length < 1) return 
					if (Arya.message.extendedTextMessage === undefined || Arya.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await Manik.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						Manik.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (err) {
						Manik.sendMessage(from, buffer, image, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
				    case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
})
				break
				    case 'imut':
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
				    case 'hode':
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
                
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
                    tuh = fs.readFileSync(`./lib/♡.jpeg`)
                   nehh = `* PERATURAN BOT *

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
Manik.sendMessage(from, tuh, image, { quoted: freply, caption: nehh, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
                    break
                    case 'tahta':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh : ${prefix}tahta ManikBot`)
buffer = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${body.slice(7)}`)
Manik.sendMessage(from, buffer, image, {quoted: Arya})
await limitAdd(sender)
break
case 'minato':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					Manik.sendMessage(from, nye, image, { caption: 'minato!!', quoted: Arya })
					await limitAdd(sender)
					break
case 'kucing':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kucing`, {method: 'get'})
										ku = JSON.parse(JSON.stringify(anu));
					ci =  ku[Math.floor(Math.random() * ku.length)];
					nye = await getBuffer(ci)
					Manik.sendMessage(from, nye, image, { caption: 'kucing', quoted: Arya })
					await limitAdd(sender)
					break
					case 'aot':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+attack+on+titan`, {method: 'get'})
					ti = JSON.parse(JSON.stringify(anu));
					tan =  ti[Math.floor(Math.random() * ti.length)];
					nye = await getBuffer(tan)
					Manik.sendMessage(from, nye, image, { caption: '*JAN LUPA SUKREP Manik*', quoted: Arya })
					await limitAdd(sender)
					break
					case 'tokyoghoul':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
						tokyo = JSON.parse(JSON.stringify(anu));
					ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
					nye = await getBuffer(ghoul)
					Manik.sendMessage(from, nye, image, { caption: 'JAN LUPA SUKREP Manik', quoted: Arya })
					await limitAdd(sender)
					break
					case 'sagiri':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+Izumi+Sagiri`, {method: 'get'})
						sag = JSON.parse(JSON.stringify(anu));
					iri =  sag[Math.floor(Math.random() * sag.length)];
					nye = await getBuffer(iri)
					Manik.sendMessage(from, nye, image, { caption: 'SAGIRI CHAN', quoted: Arya })
					await limitAdd(sender)
					break
					case 'cantik':
					  case 'cans':
					case 'cecen':
					  case 'cecan':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cewe+Cantik`, {method: 'get'})
						ce = JSON.parse(JSON.stringify(anu));
					cen =  ce[Math.floor(Math.random() * ce.length)];
					nye = await getBuffer(cen)
					Manik.sendMessage(from, nye, image, { caption: 'PUNYAKU KAWAN', quoted: Arya })
					await limitAdd(sender)
					break
					case 'cogan':
					    case 'tampan':
         if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Orang+Ganteng`, {method: 'get'})
						cog = JSON.parse(JSON.stringify(anu));
					an =  cog[Math.floor(Math.random() * cog.length)];
					nye = await getBuffer(an)
					Manik.sendMessage(from, nye, image, { caption: 'GANTENG SEPERTI SAYA', quoted: Arya })
					await limitAdd(sender)
					break
					case 'chika':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					chi = JSON.parse(JSON.stringify(anu));
					ka =  chi[Math.floor(Math.random() * chi.length)];
					nye = await getBuffer(ka)
					Manik.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: Arya })
					await limitAdd(sender) 
					break
				    case 'kurumi':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					Manik.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: Arya })
					await limitAdd(sender) 
					break 
				case 'kaneki':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					Manik.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: Arya })
					await limitAdd(sender) 
					break 
				case 'touka':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					Manik.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: Arya })
					await limitAdd(sender) 
					break 
case 'neko':
  case 'nekonime':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Neko`, {method: 'get'})
										ne = JSON.parse(JSON.stringify(anu));
					ko =  ne[Math.floor(Math.random() * ne.length)];
					nye = await getBuffer(ko)
					Manik.sendMessage(from, nye, image, { caption: 'NIH NEKO MU', quoted: Arya })
					await limitAdd(sender)
					break
case 'naruto':
if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
										naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					Manik.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: Arya })
					await limitAdd(sender)
					break
case 'loli':
          if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Loli`, {method: 'get'})
					lo = JSON.parse(JSON.stringify(anu));
					li =  lo[Math.floor(Math.random() * lo.length)];
					nye = await getBuffer(li)
					Manik.sendMessage(from, nye, image, { caption: 'Loli', quoted: Arya })
					await limitAdd(sender)
					break
			case 'waifu':
				    try {
				      if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Manik.sendMessage(from, buf, image, {quoted: Arya,caption: "KAWAII!!"})
					})})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
await limitAdd(sender) 

					break
					case 'lizard':
             try {
				      if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Manik.sendMessage(from, buf, image, {quoted: Arya,caption: "ManikBot"})
					})})
					} catch (err) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
         await limitAdd(sender) 
					break
				
case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await getBuffer(`https://api.xteam.xyz/shitpost?APIKEY=${xteamkey}`)
                Manik.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: Arya, caption: 'asupannya'})
                await limitAdd(sender) 
                break
                case 'bucin':
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						Manik.sendMessage(from, '*'+hasil+'*', text, {quoted: Arya})
						await limitAdd(sender)
					break
				
                case 'porncomen':
                 if (!isRegistered) return reply( ind.noregis())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					mgs = body.slice(11)
pub = await getBuffer(`https://api.zeks.xyz/api/phub?apiKey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=ManikBot&msg=${mgs}`)
Manik.sendMessage(from, pub, image, {caption: 'PORNHUB COMMENT', quoted: Arya})

					await limitAdd(sender)

					break
					case 'tumur':
					query = args.join(" ")
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (args.length < 1) return reply('yang mau di tebak umurnya siapa?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apiKey=${lolkey}&name=${body.slice(7)}`, {method: 'get'})
				result =	`Nama = ${anu.result.name}\nUmur = ${anu.result.age}`
					Manik.sendMessage(from, result, text, {quoted: Arya})
					await limitAdd(sender)
					break
					
				case 'tlight':
                 if (!isRegistered) return reply( ind.noregis())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
				nik056 = body.slice(8)
					nik056 = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${nik056}&apiKey=${ZeksApi}`)
					Manik.sendMessage(from, nik056, image, {caption: 'Light Text', quoted: Arya})
					await limitAdd(sender)
					break
					case 'gtext':
                 if (!isRegistered) return reply( ind.noregis())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					gte = `${body.slice(7)}`
					te1 = gte.split("|")[0];
					te2 = gte.split("|")[1];
					gte = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${te1}&text2=${te2}&apikey=${ZeksApi}`)
					Manik.sendMessage(from, gte, image, {caption: 'Glitch Text', quoted: Arya})
					await limitAdd(sender)
					break 
					case 'coffee':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('textnya mana?')
					reply('*Harga = 50.000*')
					Manik = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${body.slice(8)}`)
					Manik.sendMessage(from, Manik, image, {caption: 'jangan lupa untuk selalu tersenyum', quoted: Arya})
					await limitAdd(sender)
					break
					case 'breakwall':
					case 'matrix':
					case 'bneon':
					case 'text3dbox':
if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${textm}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
                    case 'leavest':
                      case 'logobp':
if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${textm}&apikey=${ZeksApi}`)
                    Manik.sendMessage(from, buffer, image, { quoted: Arya})
                    break
					case 'shadowt':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					anbot = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${body.slice(9)}`)
					Manik.sendMessage(from, anbot, image, {caption: 'SHADOW TEXT', quoted: Arya})
					await limitAdd(sender)
					break 
                    case 'spamgmail':
                    if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} contoh@gmail.com`)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda%20sebesar%20500000%20Ribu%20Rupiah%20ya`, {method: 'get'})
			Manik.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: Arya})
			await limitAdd(sender)
                    break
					case 'spamsms':
					if (!isRegistered) return reply(ind.noregis())
					if (!isRegistered) return reply(ind.noregis())
          reply('Wait..')
      nomor = `${body.slice(8)}`
			anu = await fetchJson(`https://alfians-api.herokuapp.com/api/spamsms?no=${nomor}&jum=20`, {method: 'get'})
			Manik.sendMessage(from, `${anu.result.logs}`, text, {quoted: Arya})
await limitAdd(sender)
break
					case 'spamcall':
					if (!isRegistered) return reply(ind.noregis())
					if (!isRegistered) return reply(ind.noregis())
          reply('Wait..')
      call = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			Manik.sendMessage(from, `${anu.result.logs}`, text, {quoted: Arya})
        await limitAdd(sender)
                     break
    
					case 'pornhub':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${hub1}&text2=${hub2}&APIKEY=${xteamkey}`)
					Manik.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: Arya})
					await limitAdd(sender)
					break 
					case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
                    if (args.length == 0) return reply(`Example: ${prefix + command} ManikBot`)
                    teka = args.join(" ")
                    Manikpur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teka}&APIKEY=${xteamkey}`)
                    Manik.sendMessage(from, Manikpur, image, { quoted: Arya})
                    break
			case 'husbu':
				Manik.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					 data = fs.readFileSync('./src/husbu.js');
        		         jsonData = JSON.parse(data);
		                 rannikdex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[rannikdex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, Arya, randKey.teks)
					await limitAdd(sender)
				break

		case 'darkneon':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return reply(ind.noregis())
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon Manik`)
			darkn = body.slice(9)
			darkne = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${darkn}`)
			Manik.sendMessage(from, darkne, image, {quoted: Arya, caption: 'DARKNEON'})
			await limitAdd(sender)
			break
			case 'woodblock':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return reply(ind.noregis())
			if (args.length < 1) return reply(`Contoh: ${prefix}woodblock Manik`)
		 Manik120 = body.slice(11)
			nik120 = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${Manik120}`)
			Manik.sendMessage(from, nik120, image, {quoted: Arya, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'paper':
			  if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isRegistered) return reply(ind.noregis())
			if (args.length < 1) return reply(`Contoh: ${prefix}paper Manik`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			Manik.sendMessage(from, glass, image, {quoted: Arya, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'ytmp3':
   case 'ytmp4':
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/uodAdkNAd10`)
                    query = body.slice(7)
                    Manikkk = await fetchJson(`https://api.zeks.xyz/api/${command}?url=${query}&apikey=apivinz`)
                    Manikkk = Manikkk.result
                     nikk =`TITLE = ${Manikkk.title}\nSIZE = ${Manikkk.size}`
                    gambary = await getBuffer(Manikkk.thumbnail)
                    Manik.sendMessage(from, gambary, image, { quoted: Arya, caption: nikk })
                    get_audio = await getBuffer(Manikkk.url_audio)
                    Manik.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${Manikkk.title}.mp3`, quoted: Arya})
                    get_video = await getBuffer(Manikkk.url_video)
                    Manik.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${Manikkk.title}.mp4`, quoted: Arya})
                    
                    break
				    case 'chord':    
               			if (!isRegistered) return reply(ind.noregis())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`https://videfikri.com/api/chord/?query=${teks}`, {method: 'get'})
					reply('chord dari lagu '+teks+' adalah :\n\n'+anu.result.chord)
					await limitAdd(sender) 
					break
case 'muihalal':
					if (args.length < 1) return reply('Apa yang mau dicari?')
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/halal?q=${body.slice(10)}&apikey=${leysKey}`, {method: 'get'})
					anu = anu.result
					hasill = `hasil : ${anu.hasil}`
					Manik.sendMessage(from, hasill, text, {quoted: Arya})
					break
				    case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
					// Information //
    case 'deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolkey}&img=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted:Arya})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolkey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 Manik.sendMessage(from, gender, text, {quoted:Arya})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolkey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 Manik.sendMessage(from, gender, text, {quoted:Arya})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'test':
				case 'ping':
				var value = (`Sip Online! Prefix Nih = ${prefix}`)
                var group = await Manik.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: Arya
                }
                Manik.sendMessage(from, options, text, {quoted: freply, contextInfo: { forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'donasi':
		               case 'donate':
                       if (!isRegistered) return reply( ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				       wew = fs.readFileSync(`./lib/♡.jpeg`)
teks = `*DONASI BRO*
*GOPAY* : 085737134572
*PULSA* : 085737134572
*SAWERIA* : https://saweria.co/AryaManik
*Ig owner* : www.instagram.com/AryaManik___`
					   Manik.sendMessage(from, wew, image, { quoted: freply, caption: Manik, contextInfo: { forwardingScore: 1000, isForwarded: true }})  
					   break
					case 'owner':
                  case 'creator':
                  const arya = fs.readFileSync(`./lib/◇.jpeg`)
                  const boy = "6285737134572@s.whatsapp.net"
                  const vcard11 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + `FN:${NamaOwner}\n`
              + `ORG: Owner ${NamaBot};\n`
              + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:+${ownerNumber}\n`
              + 'END:VCARD'
                    ownir = `╔═══ ❰ 「 *OWNER MANIK* 」❱ ════
║┣❥ *Nama :* Arya Manik
║┣❥ *Nomer :* @${boy.split("@")[0]}
║┣❥ *Umur :* 16 Tahun
║┣❥ *Asal :* *Gatau, Kalo Tau Emang Datang?*
║┣❥ *Kelas :* *2 Smk*
╚════ ⸨ *${NamaBot}* ⸩  ═════`
let thir= await Manik.groupMetadata(from)
	let soton = thir.participants
	let bray = []
	for (let go of soton){
		bray.push(go.jid)
	}
	Manik.sendMessage(from, {displayname: `${NamaOwner}ツ`, vcard: vcard11}, MessageType.contact, {quoted: freply, contextInfo: {"mentionedJid": bray}})
	Manik.sendMessage(from, arya, image, { quoted: fkon, caption: ownir, contextInfo: {"mentionedJid": [boy], forwardingScore: 1000, isForwarded: true }})
	break
					case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk\n\n"
                    if (alasan != "") {
                        ini_txt += "Dengan alasan :"  + alasan
                    }
                    reply(ini_txt)
                    break
					   case 'infoowner':
		               case 'infodeveloper':
		               case 'infopengembang':
                       if (!isRegistered) return reply( ind.noregis())
				       if (isLimit(sender)) return reply(ind.limitend(pusname))
				const srd = "6285737134572@s.whatsapp.net"
				const bjir = `
╔════ ◤ *Info Developer* ◢
║╔▸ 
║╠ *Nama* : ManikGanz
║╠ *Nomer* : wa.me/6285737134572
║╠ *Github* : Cari Sendiri!?
║╠ *Tag Owner* : @${srd.split("@")[0]}
║╠ *Yutub* : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
║╠ *Ig* : @AryaManik___
║╚▸
╚════ ◤ *${NamaBot}* ◢`
					   Manik.sendMessage(from, bjir, text, { quoted: ftoko, contextInfo: {"mentionedJid": [srd], forwardingScore: 1000, isForwarded: true }})
					   break
					   case 'bahasa':
					case 'kodenegara':
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.sendMessage(from, `*A*
Afganistan 93
Afrika Selatan 27
Afrika Tengah 236
Albania 355
Algeria (Aljazair) 213
Amerika Serikat 1
Andorra 376
Angola 244
Anguila 1-264
Antigua 1-268
Antillen Belanda 599
Arab Saudi 966
Argentina 54
Armenia 374
Aruba 297
Australia 61
Austria 43
Azerbaijan 994

*B*
Bahama 1-242
Bahrain 973
Bangladesh 880
Barbados 1-246
Barbuda 1-268
Belanda 31
Belarus 375
Belgia 32
Belize 501
Benin 229
Bermuda 1-441
Bhutan 975
Bolivia 591
Bosnia dan Herzegovina 387
Botswana 267
Brasil 55
Brunei Darussalam 673
Bulgaria 359
Burkina Faso 226
Burundi 257

*C*
Cape Verde 238
Ceko 420
Chad 235
Chili 56
Cina 86
Cina Makau 853

*D*
Denmark 45
Djibouti 253
Domikia 1-767

*E*
Ekuador 593
El Salvador 503
Eritrea 291
Estonia 372
Ethiopia 251

*F*
Fiji 679
Filipina 63
Finlandia 358

*G*
Gabon 241
Gambia 220
Georgia 995
Ghana 233
Gibraltar 350
Greenland 299
Grenada 1-473
Guam 1-671
Guatemala 502
Guinea 224
Guinea Bissau 245
Guinea Ekuator 240
Guyana 592

*H*
Haiti 509
Honduras 504
Hongaria 36
Hongkong 852

*I*
Indonesia 62
India 91
Inggris (Britania Raya) 44
Irak 964
Iran 98
Irlandia 353
Islandia 354
Israel 972
Italia 39

*J*
Jamaika 1-876
Jepang 81
Jerman 49
Jersey 44-1534

*K*
Kamboja 855
Kamerun 237
Kanada 1
Kazakhstan 7
Kenya 254
Kepulauan Marshall 692
Kepulauan Turks dan Caicos 1-649
Kirgizstan 996
Kiribati 686
Kolombia 57
Komoros 682
Korea Selatan 82
Korea Utara 850
Kosta Rika 506
Kroasia 385
Kuba 53
Kuwait 965
Kurakao 599

*L*
Laos 856
Latvia 371
Lebanon 961
Lesotho 266
Liberia 231
Libya 218
Liechtenstein 423
Lituania 370
Luksemburg 352

*M*
Madagaskar 261
Makedonia 389
Maladewa 960
Malawi 265
Malaysia 60
Mali 223
Malta 356
Maroko 212
Mauritania 222
Mauritius 230
Mayotte 262
Aryasiko 52
Mesir 20
Mikronesia 691
Moldova 373
Monako 377
Mongolia 976
Montenegro 382
Mozambik 258
Myanmar 95

*N*
Namibia 264
Nauru 674
Nepal 977
Niger 227
Nigeria 234
Nikaragua 505
Niue 683
Norwegia 47

*O*
Oman 968

*P*
Pakistan 92
Palau 680
Palestina 970
Panama 507
Pantai Gading 225
Papua Nugini 675
Paraguay 595
Perancis 33
Perancis Polinesia 689
Peru 51
Pitcairn 64
Polandia 48
Portugal 351
Puerto Riko 1-787, 1-939
Pulau Cocos 61
Pulau Cook 682
Pulau Falkland 500
Pulau Faroe 298
Pulau Man 44-1624
Pulau Mariana Utara 1-670
Pulau Reuni 262
Pulau Solomon 677
Pulau Virgin 1-340

*Q*
Qatar 974

*R*
Republik Ceko 420
Republik Demokrasi Kongo 243
Republik Dominika 1-809, 1-829, 1-849
Rumania 40
Rusia 7
Rwanda 250

*S*
Sahara Barat 212
Santo Barthelemy 590
Santo Helena 290
Santo Kitts dan Nevis 1-869
Santo Lucia 1-758
Santo Vincent dan Grenadines 1-784
Samoa 685
San Marino 378
Sao Tome dan Principe 239
Selandia Baru 64
Senegal 221
Serbia 381
Seychelles 248
Sierra Leone 232
Singapura 65
Siprus 357
Slovenia 386
Slowakia 421
Somalia 252
Spanyol 34
Sri Lanka 94
Sudan 249
Sudan 211
Suriah 963
Suriname 597
Svalbard dan Jan Mayen 47
Swaziland 268
Swedia 46
Swiss 41

*T*
Tajikistan 992
Tanjung Verde 238
Tanzania 255
Taiwan 886
Thailand 66
Timor Leste 670
Togo 228
Tokelau 690
Tonga 676
Trinidad dan Tobago 1-868
Tunisia 216
Turki 90
Turkmenistan 993
Tuvalu 688

*U*
Uganda 256
Ukraina 380
Uni Emirat Arab 971
Uruguay 598
Uzbekistan 998

*V*
Vanuatu 678
Vatican 379
Venezuela 58
Vietnam 84

*W*
Walls dan Futuna 681

*Y*
Yaman 967
Yunani 30
Yordania 962

*Z*
Zambia 260
Zimbabwe 263`, text, { quoted: ftoko})
					await limitAdd(sender)
					break
					//INFO GC BY Manik
case 'groupinfo':
                case 'infogc':
                  if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					 if (isBanned) return reply('Maaf kamu sudah terbenned!')
                
					if (!isRegistered) return reply(ind.noregis())
                				 if (isBanned) return reply(ind.baned())    
                  
                 if (!isGroup) return reply(ind.groupo())
                ppUrl = await Manik.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
			    var welgrp = welkom.includes(from)
			    var ngrp = nsfw.includes(from)
            var simu = samih.includes(from)
           var liling = _leveling.includes(from)
		        Manik.sendMessage(from, buffer, image, {quoted: ftoko, caption: `* GROUP INFO *
* Nama: ${groupName}* 

* Anggota : ${groupMembers.length}*

* Admin :  ${groupAdmins.length}*

* Selamat Datang : ${welgrp ? 'Benar' : 'Salah'}*

* Hentai : ${ngrp ? 'Benar' : 'Salah'}*

* Level : ${liling ? 'Benar' : 'Salah'}*

* Deskripsi:* 
${groupDesc}`})
                
break
//REQ-REP BY Manik
case 'request':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau request apa? Contoh: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return Manik.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: Arya})
                        var tonor = Arya.participant
                       const ress = `*[REQUEST]*\nNomor : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    Manik.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: Arya})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
                     case 'bugreport':
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau lapor apa? Contoh: ${prefix}lapor fitur anime error`)
          			
          				const kontil = body.slice(11)
                      if (kontil.length > 300) return Manik.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: Arya})
                        var tonmor = Arya.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    Manik.sendMessage('6285737134572@s.whatsapp.net', options, text, {quoted: Arya})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    //NEW SOVIET BY Manik
		case 'lenin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=lenin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime2k1 =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime2k1)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					
					case 'kalashnikov':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime1k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime1k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'unisoviet':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kalashnikov`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime3k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime3k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'nikitakhrushchev':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=nikita khrushchev`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime7k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime7k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime4k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime4k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'andreigromyko':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=andrei gromyko`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime6k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime6k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'yurigagarin':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime8k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime8k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'T-34':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime5k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime5k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'YAK-3':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime15k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime15k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'YAK-9':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime14k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime14k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'LA-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime13k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime13k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'ak47':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime12k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime12k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'katyusha':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime11k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime11k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'mig-15':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=mig-15`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime10k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime10k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'rpg-7':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rpg-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime9k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime9k)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
//New Image Menu
case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Manik`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolkey}&text=${body.slice(9)}`)
                    Manik.sendMessage(from, buffer, sticker, { quoted: Arya})
                    break
case 'webmatrix':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${aruga}&APIKEY=${xteamkey}`)
					Manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'redglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/redglass?text=${aruga}&APIKEY=${xteamkey}`)
					Manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'joke':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'sepia':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'alien':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolkey}&img=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolkey}&img=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolkey}&img=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'affect':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${leysKey}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${leysKey}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'meme':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
			case 'gtav':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, hedhe, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
			case 'gay':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(error.stick)
nobg = fs.readFileSync(rano)
Manik.sendMessage(from, nobg, sticker, {
  quoted: Arya
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, hehpe, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
	case 'laptop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, dhehe, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
	case 'linephoto':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, hehet, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
	case 'raindrop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, hehre, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
	case 'sketch':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
  reply(ind.wait())
  owgi = await Manik.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 Manik.sendMessage(from, hehae, image, {quoted:Arya})
} else {
  reply('reply imagenya kak!')
}
break
	case 'facebookpage':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !Arya.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Arya
	  reply(ind.wait())
	  owgi = await Manik.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	  Manik.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	//SYSTEM BY Manik
        case 'return':
                if (!isOwner) return reply('Owner Only')
				return Manik.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: Arya})
				break
				    case 'term':
				if (!isOwner) return reply('Owner Only')
				const cmd = body.slice(6)
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `*EXECUTOR*`
				const term = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				exec(cmd, (err, stdout) => {
					if (err) return Manik.sendMessage(from, `EXEC ${err}`, text, { quoted: Arya })
					if (stdout) {
						Manik.sendMessage(from, stdout, text, term)
					}
				})
				break
				    case 'sendkontak':
const took = body.slice(12)
const nama = took.split("|")[0]
const nomor = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	Manik.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')})
	break
	case 'sendkontag':
const pepek = body.slice(12)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await Manik.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	Manik.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy, sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')}})
	break
	case 'notif':
if (!isGroup) return reply('Gc Only')
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Manik.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await Manik.sendMessage(from, options, text)
break
case 'upswtext':
					Manik.updatePresence(from, Presence.composing)
					Manik.sendMessage('status@broadcast', `${q}`, extendedText)
					Manik.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					Manik.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
						cihcih = await Manik.downloadMediaMessage(swsw)
						Manik.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Manik.sendMessage(from, bur, text, { quoted: Arya })
					break
					
				case 'upswvideo':
					Manik.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Arya
						cihcih = await Manik.downloadMediaMessage(swsw)
						Manik.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Manik.sendMessage(from, bur, text, { quoted: Arya })
					break
case 'setname':
if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, 'masukkan nama', Arya)
				arya.setName(arg)
				.then((res) => arya.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => arya.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'setbio':
			if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, 'masukkan bio', Arya)
				arya.setBio(arg)
				.then((res) => arya.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((err) => arya.sendFakeStatus(from, JSON.stringify(err), fake))
				break
			case 'fdeface': 
			case 'hack':
			if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aryazz|https://arya.com`, Arya)
				args = arg.split("|")
				if (!args) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By aryazz|https://arya.com`, Arya)
				if ((isMedia && !Arya.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Arya
					let media = await Manik.downloadMediaMessage(encmedia)
					arya.sendFakeThumb(from, args[0], args[1], args[2], args[3], media)
				} else {
					arya.sendFakeThumb(from, args[0], args[1], args[2], args[3])
				}
				break
				    case 'spam-c':
				if (!isOwner) return reply(ind.ownerb()) //owner only
				if (!arg) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, Arya)
				args = arg.split("|")
				if (!args) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, Arya)
				if (isNaN(args[1])) return reply(from, `harus berupa angka`, Arya)
				for (let i = 0; i < args[1]; i++){
					arya.sendText(from, args[0])
				}
				break
				//SURAT TO MENU
case 'suratto': // Case By M4N1K
                if (!isPrem) return reply('Premium Only')
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await Manik.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ #suratto (No tujuan|Isi Surat)
║╠ Contoh: 
║╠ #suratto 6285737134572|Hai Juga
║╚▸
╚═══ ◤ *${NamaBot}* ◢ `
				Manik.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
				
case 'slot': //SLOT BY M4N1K
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            Manik.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: Arya })
            break

case 'tebakgambar2': // case by Radya & Manik
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    Manik.sendMessage(from, ini_buffer, image, { quoted: Arya, caption: "Jawab jawab jawabbb" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                    case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			Manik.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			break
case 'shortlink':
// Fix Bug By Manik				
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolkey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Manik.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = Arya.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					Manik.sendMessage(from, `${bot}`, text, {quoted: { Arya: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					Manik.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${NamaBot} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					Manik.sendMessage(from, teks.trim(), extendedText, {quoted: Arya})
					break
case 'asupan':
		
				axios.get(`https://onlydevcity.herokuapp.com/api/asupan?apikey=onlygay`)
				.then((res) => Manik.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, Arya)
				})
				break
     case 'amel':
       
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=onlygay`)
				.then((res) => Manik.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, Arya)
				})
				break  
				case 'una':
				
				axios.get(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=onlygay`)
				.then((res) => Manik.sendMessage(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(from, mess.error.api, Arya)
				})
				break
case 'skeleton':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${aruga}&APIKEY=${xteamkey}`)
					Manik.sendMessage(from, aruga, image, {quoted: ftoko})
					await limitAdd(sender)
					break 
					case 'avatarhacker':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${txt}&apikey=${vhkey}`, {method: 'get'})
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'glowmetallic':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${txt}&apikey=${vhkey}`)
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'viettel':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/viettel_text?text=${txt}&apikey=${vhkey}`)
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'matrick':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/matrix_text?text=${txt}&apikey=${vhkey}`)
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'girlgrafity':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(12)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${txt1}&text2=${txt2}&apikey=${vhkey}`)
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'watermaker':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(10)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/water_maker?text=${txt}&apikey=${vhkey}`)
					Manik.sendMessage(from, anu, image, { quoted: Arya, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
// Encrypt Fiture
				case 'base64enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					Manik.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break  
				case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					Manik.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break
					
                //film menu
                 case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += ` *Judul:* ${plyll.title}\n *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case 'filmapikterbaru':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				    case 'filmapikdrama':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				//leveling
                  case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
					case 'trendtwit':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
Manik.updatePresence(from, Presence.composing) 
data = await fetchJson(`http://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Hastag* : ${i.hastag}\n*Peringkat* : ${i.rank}\n*Tweet* : ${i.tweet}\n*Link* : ${i.link}\n=====================\n`
					}
					reply(teks.trim())
					break

case 'cersex':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${leyskey}`) 
buffer = await getBuffer(anu.gambar) 
s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: s3x})
break
                
                case 'darkjokes':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 Manik.sendMessage(from, darkjokes, image, {quoted: Arya, caption: '\`\`\`DARK JOKES\`\`\`'})
				break
				

				case 'memeindo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Manik.sendMessage(from, buffer, image, {quoted: Arya})
				await limitAdd(sender)
				break
				    case 'tribunews':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'newsinfo': 
					// Fix Case By Manik
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${lolkey}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'pinterest':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Manik.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
					case 'jadwaltv':
					 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'igstalk':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: hasil})
					await limitAdd(sender)
					break
					//=====================================BATES NGAB=====================================\\
//islammenu
                case 'tahlil': 
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/tahlil?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                
		        case 'ayatkursi': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/ayatkursi?apikey=zahirgans`)
				teks = ` *Arab* : ${anu.result.data.arabic}\n* Latin :* ${anu.result.data.latin}\n* Arti :* ${anu.result.data.translation}\n* Tafsir :* ${anu.result.data.tafsir}`
				Manik.sendMessage(from, teks, text, {quoted: Arya})
				break
		        case 'doaharian': 
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				Manik.updatePresence(from, Presence.composing) 
				reply(ind.wait())
				asu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/doaharian?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/niatshalat?apikey=zahirgans`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
//TAMBAH LAGI BROK BY M4N1K
            case 'fordward':
            if (!isRegistered) return reply(ind.noregis())
            if (isBanned) return reply('Maaf kamu sudah terbenned!')
	        Manik.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
            break
            case 'wame':
            if (isBanned) return reply('```Lu kebanned kontol```')
            if (!isRegistered) return reply(ind.noregis())
             Manik.updatePresence(from, Presence.composing)
             options = {
             text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
              }
              }
              Manik.sendMessage(from, options, text, {quoted: Arya})
              break
              case 'say':
              teks = body.slice(5)
              if (!isRegistered) return reply(mess.only.daftarB)
              if (args.length < 1) return reply('teksnya mana kak?')
              saying = teks
              Manik.sendMessage(from, saying, text)
              break
                                case 'tagme':
                                        if (!isRegistered) return reply(mess.only.daftarB)
                                        var nom = Arya.participant
                                        const tagme = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} Tuh dah ku tag!`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        Manik.sendMessage(from, tagme, text, {quoted: Arya})
                                        break
                                case 'cekip':
                                        ipnya = body.slice(5)
                                        if (!isRegistered) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`ip nya mana kak? \nContoh: ${prefix}ip 8.8.8.8`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${ipnya}`, {method: 'get'})
                                        lang = anu.location.languages[0]
                                        teks = `◪ *IP* \n  │\n  ├❑ IP : ${anu.ip} \n  ├❑ City : ${anu.city} \n  ├❑ Continent Code : ${anu.continent_code} \n  ├❑ Continent Name : ${anu.continent_name} \n  ├❑ Country Code : ${anu.country_code} \n  ├❑ Country Name : ${anu.country_name} \n  ├❑ Latitude : ${anu.latitude} \n  ├❑ Calling Code : ${anu.location.calling_code} \n  ├❑ Capital : ${anu.location.capital} \n  ├❑ Country Flag : ${anu.location.country_flag} \n  ├❑ Country Flag Emoji : ${anu.location.country_flag_emoji} \n  ├❑ Country Flag Emoji Unicode : ${anu.location.country_flag_emoji_unicode} \n  ├❑ Geoname ID : ${anu.location.geoname_id} \n  ├❑ Languages : ${lang.code} , ${lang.name} , ${lang.native} \n  ├❑ Longitude : ${anu.longitude} \n  ├❑ Region Code : ${anu.region_code} \n  ├❑ Region Name : ${anu.region_name} \n  ├❑ Type : ${anu.type} \n  └❑ Zip : ${anu.zip} `
                                        Manik.sendMessage(from, teks, text)
                                        await limitAdd(sender)
                                        break
//sertifikatmenu
				case 'hekelserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'dont forget to subscribe YouTube channel  Arya Manik' })
				break
				    case 'babuserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu ManikGanz*`)
				reply(ind.wait())
				ct = body.slice(10)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'ffserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'bucinserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'bocilepepserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'gayserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pacarserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'sadboyserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'surgaserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pinterserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'badgirlserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'badboyserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'goodgirlserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'goodboyserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'editodberkelasserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'goodlookingserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fucekboyserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'jametserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'youtuberserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fftourserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fftourserti2': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fftourserti3': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fftourserti4': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'fftourserti5': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'mltourserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'mltourserti2': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'mltourserti3': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'mltourserti4': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'mltourserti5': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pubgtourserti': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti ManikGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pubgtourserti2': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pubgtourserti3': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pubgtourserti4': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'pubgtourserti5': 				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 ManikGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				Manik.sendMessage(from, dapuhy, image, { quoted: Arya, caption: 'Nih Jangan Lupa Subscribe Arya Manik' })
				break
				    case 'credits':
teksits = `*DAFTAR PENGANTAR*

◪ *SPECIAL BIG THANX TO* :
Mhankbarbar | Arugia | Adiwajhsing | xptn | tobz | Pengguna bot | Penyedia api key | Maslent | Nazwa | Manik | Arifi Razzaq | Agus | Caliph | Rey | Rizki | Aulia | Natasya | Drawl Nagl | Nayla | Khadijah | Aurel | Galuh | Ramlan | Anker | Dan Creator Bot Lainnya

◪ *SALAM SANTUN MASTAH* :
| Arya Manik•
| Arifi Razzaq•
| Aqulz
| Rvan
| Ivan
| Guvan
| Arya-DN
| Dappa
| Isuf
| YogiPW`
Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: ftoko, caption: teksits, forwardingScore: 1000, isForwarded: true })
break
case 'blacklist':
case 'listblack':
//Fix By M4N1K
teks = '*Black List :*\n\n'
for (let awokwkwk of rekap) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${rekap.length}*`
Manik.sendMessage(from, teks.trim(), extendedText, { quoted: Arya, contextInfo: { "mentionedJid": rekap } })
break
case 'addblack': //PERCOBAAN
					if (!isOwner) return reply(ind.ownerb())
					mahnik = body.slice(10)
					rekap.push(`${mahnik}@s.whatsapp.net`)
					fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
					mahnuk = `Berhasil Menambahkan @${mahnik.split("@")[0]} Ke Daftar Premium`
					Manik.sendMessage(from, mahnuk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [mahnik], forwardingScore: 1000, isForwarded: true }})
					break
				    case 'dellblack': //PERCOBAAN
					if (!isOwner) return reply(ind.ownerb())
					mahnek = body.slice(11)
					mahnak = rekap.indexOf(mahnek)
					rekap.splice(mahnak, 1)
					fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
					mahhk = `Berhasil Menghapus @${mahnek.split("@")[0]} Ke Daftar Premium`
					Manik.sendMessage(from, mahhk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [mahnek], forwardingScore: 1000, isForwarded: true }})
					break			
					
case 'getsticker':
case 'gets':
//Fix By M4N1K
namastc = body.slice(12)
result = fs.readFileSync(`./add/stickers/${namastc}.webp`)
Manik.sendMessage(from, result, sticker, {quoted :Arya})
break

case 'stickerlist':
case 'liststicker':
//Fix By M4N1K
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
Manik.sendMessage(from, teks.trim(), extendedText, { quoted: Arya, contextInfo: { "mentionedJid": setiker } })
break

case 'addsticker':
//Fix By M4N1K
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = body.slice(12)
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(ifi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Manik.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./add/stickers/${svst}.webp`, delb)
fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
Manik.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: Arya })
break

case 'addvn':
//Fix By M4N1K
if (!isQuotedAudio) return reply('Reply vnnya blokk!')
svst = body.slice(7)
if (!svst) return reply('Nama audionya apa su?')
boij = JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Manik.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)
fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
Manik.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: Arya })
break
case 'getvn':
//Fix By M4N1K
namastc = body.slice(7)
buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)
Manik.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: Arya, ptt: true })
					break
					
				case 'listvn':
				case 'vnlist':
				//Fix By M4N1K
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					Manik.sendMessage(from, teks.trim(), extendedText, { quoted: Arya, contextInfo: { "mentionedJid": audionye } })
					break
					
				case 'addimage':
				//Fix By M4N1K
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Manik.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
					Manik.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: Arya })
					break
					
				case 'getimage':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)
					Manik.sendMessage(from, buffer, image, { quoted: Arya, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imagelist':
				case 'listimage':
				//Fix By M4N1K
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					Manik.sendMessage(from, teks.trim(), extendedText, { quoted: Arya, contextInfo: { "mentionedJid": imagenye } })
					break
					
				case 'addvideo':
				//Fix By M4N1K
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Manik.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)
					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
					Manik.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: Arya })
					break
					
				case 'getvideo':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)
					Manik.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: Arya })
					break
					
				case 'listvideo':
				case 'videolist':
				//Fix By M4N1K
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					Manik.sendMessage(from, teks.trim(), extendedText, { quoted: Arya, contextInfo: { "mentionedJid": videonye } })
					break                                
					//animemenu
                     case 'waifu':
                     if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				 	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	Manik.sendMessage(from, buf, image, { quoted: Arya, caption: `${texs}`})
				    break
					case 'animeboy':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
					case 'samehadaku':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
reply(ind.wait()) 
anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`) 
buffer = await getBuffer(anu.thumb) 
Manikgans = `*[ SAMEHADAKU ]*\n\n\nJudul : ${anu.title}\nDesc : ${anu.desc}\nLink : ${anu.link}`
Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: Manikgans})
break
case 'neonime':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (isBanned) return reply('Maaf kamu sudah terbenned!')
Manik.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
teks = '=====================\n'
for (let i of data.result) {
teks += `*Title* : ${i.judul}\n*Link* : ${i.link}\n*Release* : ${i.rilis}\n=====================\n`
					}
					reply(teks.trim())
					break
					case 'dewabatch':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait()) 
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${body.slice(11)}`) 
				buffer = await getBuffer(anu.thumb) 
			    Manik = `* DEWABATCH *\n\n${anu.result}\n\nSinopsis : ${anu.sinopsis}`
			    Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: Manik})
			    break
			case 'kusonime':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cuk = await fetchJson(`http://zekais-api.herokuapp.com/kusonime?query=${body.slice(10)}`)
					buffer = await getBuffer(cuk.thumb)
					hasil = `*[ KUSONIME ]*\n\nNama : ${cuk.title}\nView : ${cuk.view}\nGenre : ${cuk.genre}\nSeason : ${cuk.season}\nType : ${cuk.type}\nStatus : ${cuk.status_anime}\nDuration : ${cuk.duration}\nRealesed : ${cuk.released}\n\nDeskripsi : ${cuk.description}`
					Manik.sendMessage(from, buffer, image, {quoted: Arya, caption: hasil })
					await limitAdd(sender)
					break
					case 'animegirl':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
				    case 'animeimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
				    case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niArya =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niArya)
					Manik.sendMessage(from, pok, image, { quoted: Arya })
					break
                	case 'dewabatch':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    thum = await getBuffer(anu.thumb)
                    Manik.sendMessage(from, thum, image, {quoted: Arya, caption: `${anu.result}`})
                 	break
 //===================================== MUSIC =====================================\\
case 'home':
const home = fs.readFileSync('mp3/home.mp3')
Manik.sendMessage(from, home, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
Manik.sendMessage(from, getting, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
Manik.sendMessage(from, sad1, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
Manik.sendMessage(from, sad2, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
Manik.sendMessage(from, sad3, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
Manik.sendMessage(from, sad4, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
Manik.sendMessage(from, tetik, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
Manik.sendMessage(from, tetik3, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
Manik.sendMessage(from, tetik3, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
Manik.sendMessage(from, tetik4, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
Manik.sendMessage(from, allnight, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
Manik.sendMessage(from, lucas, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
Manik.sendMessage(from, well, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
Manik.sendMessage(from, wanna, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
Manik.sendMessage(from, ups, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
Manik.sendMessage(from, skin, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
Manik.sendMessage(from, moff, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
Manik.sendMessage(from, ful, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
Manik.sendMessage(from, gam, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
Manik.sendMessage(from, rest, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
Manik.sendMessage(from, date, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
Manik.sendMessage(from, kursi, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
Manik.sendMessage(from, tilawah, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
Manik.sendMessage(from, nabi, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
Manik.sendMessage(from, ngaji1, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
Manik.sendMessage(from, ngaji2, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
Manik.sendMessage(from, irimp3, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
Manik.sendMessage(from, pa, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
Manik.sendMessage(from, soun, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
Manik.sendMessage(from, satu, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
Manik.sendMessage(from, dua, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
Manik.sendMessage(from, tiga, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
Manik.sendMessage(from, empat, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
Manik.sendMessage(from, lima, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
Manik.sendMessage(from, enam, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
Manik.sendMessage(from, tujuh, MessageType.audio, {quoted: Arya, mimetype: 'audio/mp4', ptt:true})
break	
case 'slowmo':
				//Nambah By M4N1K
				encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await Manik.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				Manik.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Arya})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Arya})
						fs.unlinkSync(ran)
				        })
				break
				    case 'gemok':
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
			        ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Arya})
						fs.unlinkSync(ran)
					})
				break
				    case 'bass':                 
				//Nambah By M4N1K
					encmedia = JSON.parse(JSON.stringify(Arya).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Manik.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Manik.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Arya})
						fs.unlinkSync(ran)
					})
				break
				//funmenu
                case 'bisakah':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'kapankah':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'apakah':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'bagaimanakah':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'rate':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
                    case 'sangecek':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
                    case 'gaycek':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
                    case 'lesbicek':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
                    case 'gantengcek':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'cantikcek':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: Arya })
					await limitAdd(sender)
					break
		            case 'watak':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: Arya })
					await limitAdd(sender)
				        break
		         case 'hobby':
					//  Case  by Manik

                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Manik.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: Arya })
					await limitAdd(sender)
					break
                case 'jadian':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case 'ngewe':
				
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					//GC MANAGER
case 'antilinkgroup':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Manik.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Mode anti link group sudah disable')
						var ini = antilink.indexOf(from)
						antilink.splice(ini)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube-v':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
						antilinkytv.push(from)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytv.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube-c':
//by @arifirazzaq2001
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
						antilinkytc.push(from)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytc.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkinstagram':
//by @arifirazzaq2001
//fix By M4N1K
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkig) return reply('UDAH NYALA KAK')
						antilinkig.push(from)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('SUKSES MENGAKTIFKAN ANTI LINK INSTAGRAM')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link IG`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkig) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
						var ini = antilinkig.indexOf(from)
						antilinkig.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
						reply('SUKSES MEMATIKAN ANTI LINK IG DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinktelegram':
//by @arifirazzaq2001
//Fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
					if (args[0] === '1') {
					if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antitelegram.push(from)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === '0') {
						var ini = antitelegram.indexOf(from)
						antitelegram.splice(ini, 1)
						fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break

//virus
case 'antivirus1':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :* ๒๒')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex.indexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break

case 'antivirus2':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex2) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex2.push(from)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* text\n*Jenis :* 🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex2.indexOf(from)
						antifirtex2.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX-ALAKAZAM SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break

case 'antivirus3':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex3) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex3.push(from)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* text\n *Jenis :* 𝐗-𝐕𝐢𝐫𝐮𝐬')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex3.indexOf(from)
						antifirtex3.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX-XVIRUS SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
case 'antivirus4':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex4) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex4.push(from)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :* *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex4.indexOf(from)
						antifirtex4.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX GANAS SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
					
case 'antivirus5':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex5) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex5.push(from)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* text\n*Jenis :* 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓??𝐓𝐀𝐍')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex5.indexOf(from)
						antifirtex5.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('「 *VIRTEX  DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX COLLOSAL TITAN SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
					
case 'antivirus6':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex6) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex6.push(from)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* text\n*Jenis :* ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex6.indexOf(from)
						antifirtex6.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX CHINA SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
case 'antivirus7':
//fix By M4N1K
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik a untuk mengaktifkan')
					if (args[0] === 'a') {
					if (isAntiFirtex7) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antifirtex7.push(from)
						fs.writeFileSync('./database/group/antifirtex7.json', JSON.stringify(antifirtex7))
						reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\nBerbasis :* text\n*Jenis :* 9999999')
						Manik.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === 'b') {
						var ini = antifirtex7.indexOf(from)
						antifirtex7.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex7.json', JSON.stringify(antifirtex7))
						reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX 9999999 SUDAH DINONAKTIFKAN PADA GRUP INI.')
					} else {
						reply('b untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
                case 'event':
				if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
				event.push(from)
				fs.writeFileSync('.data/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  mengaktifkan fitur event di group ini')
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./data/bot/event.json', JSON.stringify(event))
				reply(' SUCCSESS  menonaktifkan fitur event di group ini')
				} else {
				reply(ind.satukos())
				}
				break
				
                case 'nobadword':
                 //Fix By M4N1K
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('lel🗿')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
case 'addbadword':
//Fix By M4N1K
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
               //Fix By M4N1K
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'shutdown':
                    if (!isOwner) return reply('Owner Only')
                    setTimeout( () => {
			        reply(`GOOD BYE OWNER, I LOVE YOU`) 
					}, 5000)
                    Manik.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted:Arya})
                    break
                    case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvlon())
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvloff())
				} else {
				reply(ind.satukos())
				}
				break
			    case 'nsfw':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./data/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ')
				} else {
				reply(ind.satukos())
				}
				break 
				case 'sewabot': // KALO BOLEH JANGAN DIGANTI YAH:)
				tres = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 INFO BOT 」*
│➛ *Nama Bot* : ManikBot
│➛ *Versi* : V10.0
│➛ *Creator* : Manik Ganteng^v^
╰┬────────────┈ ⳹
    │ *「HARGA SEWA 」* 
    │➛ *1 BULAN* : 15K
    │➛ *2 BULAN* : 30K
    │➛ *4 BULAN* : 50K
    │ *「HARGA SCRIPT 」* 
    │➛ *SC INI* : CARI YT「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
    │➛ *SC PREMIUM* : 60K
    ╰─────────────┈ ⳹
    HUB: wa.me://6285737134572`
    Manik.sendMessage(from, imageh, image, {thumbnail:fs.readFileSync('./lib/◇.jpeg'), quoted: ftoko, caption: tres, contextInfo: {forwardingScore: 1000, isForwarded: true}}) 
				break
				case 'level':
                
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `
□ *LEVEL USER*
┝ *Nama* : ${pushname}
┝ *Nomor* : ${sender.split("@")[0]}
┝ *User XP* : ${userXp}/${requiredXp}
┝ *User Level* : ${userLevel}
┝ *XP* : ${getLevelingXp(sender)}/${requiredXp}
┝ *Tingkat* : ${bars}
┝ *Rank* : ${ManikRole}
┕`
                Manik.sendMessage(from, resul, text, { quoted: Arya})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
                case 'grouplist':
          case 'listgroup':
				 ingfo = await getGroup(totalchat)
				let txt = `*List Group*\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				reply(txt)
	                 break
                case 'jam':
                tekj = `Sekarang Jam : ${wita}`
                Manik.sendMessage(from, tekj, text)
                break
                case 'tanggal':
                tekj = `Sekarang Tanggal : ${tampilTanggal}`
                Manik.sendMessage(from, tekj, text)
                break
                case 'imgreply':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					fak = body.slice(10)
					Manik.sendMessage(from, `${fak}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')})
					break
					case 'energy':
					case 'battery':
					Manik.sendMessage(from, btre, text)
					break
					
//=====================================MAU TAMBAH? DISINI AJA YA=====================================\\

//=====================================PENAMBAHAN KEATAS COK=====================================\\

				default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Alhamdulillah, Dah buka kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[PESAN DARI MANIK]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[PESAN DARI MANIK]', 'cyan'), color('ManikBot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
 
	if (budy.includes('cekprefix')){
	Manik.sendMessage(from, `Prefix saat ini: ${prefix}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/◇.jpeg', 'base64')}) 
}
if (budy.includes(`@unverifyall`)) {
if (!isOwner) return reply('Anda Bukan Owner')
_registered.splice(sender)
fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
const mnk = `Sukses Unverify Semua Akun`
Manik.sendMessage(from, mnk, text)
}
				if (budy.includes(`@verify`)) {
	        if (isRegistered) return reply('Akun kamu sudah terverfikasi')
	        const serialUser = createSerial(20)
	         try {
								ppimg = await Manik.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const dpter = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_registered.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Tanggal :* ${tampilTanggal}
│ *Jam :* ${wita}
├────────────────
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ManikBot 」*`
let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${imgibb}`)
        Manik.sendMessage(from, buff, MessageType.image, {quoted: Arya, caption: dpter, contextInfo: {"mentionedJid": [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	         }
				if (isCmd) {
                        aing = `
╔═══ ❰ 「 *NOT FOUND* 」❱ ════
║┣❥ *Nama :* *${pushname}*
║┣❥ *Nomer :* @${sender.split("@")[0]}
║┣❥ *Command :* ${prefix}${command}
╚════ ⸨ *${NamaBot}* ⸩  ═════`
Manik.sendMessage(from, aing, text, {quoted: Arya, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
				  }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (err) {
		 e = String(err)
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(color(time_error, "white"), color("[  M4N1K  ]", "aqua"), color(e, 'red'))
            }
            }

   }) 
}
starts()
//=====================================LINE HARUSNYA 10K++ KARNA GW ENC YG GABOLE KLEAN COMOT JADI SGINI DEH:V=====================================\\
//╔═╦═══• •✠•❀•✠ • •════╗
//║✧ུ║        「 INFO CREATOR」                     
//║✧ུ║ུNama : *Arya Manik*
//║✧ུ║ུNamaBot : *ManikBot*             
//║✧ུ║ུSC ORI : *MHANKBARBAR*             
//║✧ུ║ུTQTO : *ALL CREATOR BOT*             
//║✧ུ║ུTQTO : *PENYEDIA APIKEY DISINI*
//║✧ུ║ུYT : 「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」
//╚═╩═══• •✠•❀•✠ • •════╝
//                    StayHalalNoBully
//SC ORI BY MBB
//RECODE BY MANIK
//MAU RECODE? BOLE BROK KITA SAMA" COMOT":V
//TAPI JAN LUPA ISI NAMA KITA" Y :)
//GANTI TAMPILAN MENU DI SRC/HELP.JS ATAU SIMPEL.JS YA
//GANTI FAKE/APIKEY DI SRC/SETTING.JSON ATAU MAKE COMMAND YA
//DISINI APIKEY LOLHUMAN, VHTEAR, XTEAM, FREE YA, TAPI GADA DI manikganz.JS, KALO MAU GANTI PAKE COMMAND AJA YA:V