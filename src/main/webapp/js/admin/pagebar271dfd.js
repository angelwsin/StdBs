define("tpl/media/cardmsg.html.js",[],function(){
return'<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
});define("common/qq/emoji.js", [ "widget/emoji.css" ], function(e, t, n) {
try {
var r = +(new Date);
e("widget/emoji.css");
var i = {
"☀": "2600",
"☁": "2601",
"☔": "2614",
"⛄": "26c4",
"⚡": "26a1",
"🌀": "1f300",
"🌁": "1f301",
"🌂": "1f302",
"🌃": "1f303",
"🌄": "1f304",
"🌅": "1f305",
"🌆": "1f306",
"🌇": "1f307",
"🌈": "1f308",
"❄": "2744",
"⛅": "26c5",
"🌉": "1f309",
"🌊": "1f30a",
"🌋": "1f30b",
"🌌": "1f30c",
"🌏": "1f30f",
"🌑": "1f311",
"🌔": "1f314",
"🌓": "1f313",
"🌙": "1f319",
"🌕": "1f315",
"🌛": "1f31b",
"🌟": "1f31f",
"🌠": "1f320",
"🕐": "1f550",
"🕑": "1f551",
"🕒": "1f552",
"🕓": "1f553",
"🕔": "1f554",
"🕕": "1f555",
"🕖": "1f556",
"🕗": "1f557",
"🕘": "1f558",
"🕙": "1f559",
"🕚": "1f55a",
"🕛": "1f55b",
"⌚": "231a",
"⌛": "231b",
"⏰": "23f0",
"⏳": "23f3",
"♈": "2648",
"♉": "2649",
"♊": "264a",
"♋": "264b",
"♌": "264c",
"♍": "264d",
"♎": "264e",
"♏": "264f",
"♐": "2650",
"♑": "2651",
"♒": "2652",
"♓": "2653",
"⛎": "26ce",
"🍀": "1f340",
"🌷": "1f337",
"🌱": "1f331",
"🍁": "1f341",
"🌸": "1f338",
"🌹": "1f339",
"🍂": "1f342",
"🍃": "1f343",
"🌺": "1f33a",
"🌻": "1f33b",
"🌴": "1f334",
"🌵": "1f335",
"🌾": "1f33e",
"🌽": "1f33d",
"🍄": "1f344",
"🌰": "1f330",
"🌼": "1f33c",
"🌿": "1f33f",
"🍒": "1f352",
"🍌": "1f34c",
"🍎": "1f34e",
"🍊": "1f34a",
"🍓": "1f353",
"🍉": "1f349",
"🍅": "1f345",
"🍆": "1f346",
"🍈": "1f348",
"🍍": "1f34d",
"🍇": "1f347",
"🍑": "1f351",
"🍏": "1f34f",
"👀": "1f440",
"👂": "1f442",
"👃": "1f443",
"👄": "1f444",
"👅": "1f445",
"💄": "1f484",
"💅": "1f485",
"💆": "1f486",
"💇": "1f487",
"💈": "1f488",
"👤": "1f464",
"👦": "1f466",
"👧": "1f467",
"👨": "1f468",
"👩": "1f469",
"👪": "1f46a",
"👫": "1f46b",
"👮": "1f46e",
"👯": "1f46f",
"👰": "1f470",
"👱": "1f471",
"👲": "1f472",
"👳": "1f473",
"👴": "1f474",
"👵": "1f475",
"👶": "1f476",
"👷": "1f477",
"👸": "1f478",
"👹": "1f479",
"👺": "1f47a",
"👻": "1f47b",
"👼": "1f47c",
"👽": "1f47d",
"👾": "1f47e",
"👿": "1f47f",
"💀": "1f480",
"💁": "1f481",
"💂": "1f482",
"💃": "1f483",
"🐌": "1f40c",
"🐍": "1f40d",
"🐎": "1f40e",
"🐔": "1f414",
"🐗": "1f417",
"🐫": "1f42b",
"🐘": "1f418",
"🐨": "1f428",
"🐒": "1f412",
"🐑": "1f411",
"🐙": "1f419",
"🐚": "1f41a",
"🐛": "1f41b",
"🐜": "1f41c",
"🐝": "1f41d",
"🐞": "1f41e",
"🐠": "1f420",
"🐡": "1f421",
"🐢": "1f422",
"🐤": "1f424",
"🐥": "1f425",
"🐦": "1f426",
"🐣": "1f423",
"🐧": "1f427",
"🐩": "1f429",
"🐟": "1f41f",
"🐬": "1f42c",
"🐭": "1f42d",
"🐯": "1f42f",
"🐱": "1f431",
"🐳": "1f433",
"🐴": "1f434",
"🐵": "1f435",
"🐶": "1f436",
"🐷": "1f437",
"🐻": "1f43b",
"🐹": "1f439",
"🐺": "1f43a",
"🐮": "1f42e",
"🐰": "1f430",
"🐸": "1f438",
"🐾": "1f43e",
"🐲": "1f432",
"🐼": "1f43c",
"🐽": "1f43d",
"😠": "1f620",
"😩": "1f629",
"😲": "1f632",
"😞": "1f61e",
"😵": "1f635",
"😰": "1f630",
"😒": "1f612",
"😍": "1f60d",
"😤": "1f624",
"😜": "1f61c",
"😝": "1f61d",
"😋": "1f60b",
"😘": "1f618",
"😚": "1f61a",
"😷": "1f637",
"😳": "1f633",
"😃": "1f603",
"😅": "1f605",
"😆": "1f606",
"😁": "1f601",
"😂": "1f602",
"😊": "1f60a",
"☺": "263a",
"😄": "1f604",
"😢": "1f622",
"😭": "1f62d",
"😨": "1f628",
"😣": "1f623",
"😡": "1f621",
"😌": "1f60c",
"😖": "1f616",
"😔": "1f614",
"😱": "1f631",
"😪": "1f62a",
"😏": "1f60f",
"😓": "1f613",
"😥": "1f625",
"😫": "1f62b",
"😉": "1f609",
"😺": "1f63a",
"😸": "1f638",
"😹": "1f639",
"😽": "1f63d",
"😻": "1f63b",
"😿": "1f63f",
"😾": "1f63e",
"😼": "1f63c",
"🙀": "1f640",
"🙅": "1f645",
"🙆": "1f646",
"🙇": "1f647",
"🙈": "1f648",
"🙊": "1f64a",
"🙉": "1f649",
"🙋": "1f64b",
"🙌": "1f64c",
"🙍": "1f64d",
"🙎": "1f64e",
"🙏": "1f64f",
"🏠": "1f3e0",
"🏡": "1f3e1",
"🏢": "1f3e2",
"🏣": "1f3e3",
"🏥": "1f3e5",
"🏦": "1f3e6",
"🏧": "1f3e7",
"🏨": "1f3e8",
"🏩": "1f3e9",
"🏪": "1f3ea",
"🏫": "1f3eb",
"⛪": "26ea",
"⛲": "26f2",
"🏬": "1f3ec",
"🏯": "1f3ef",
"🏰": "1f3f0",
"🏭": "1f3ed",
"⚓": "2693",
"🏮": "1f3ee",
"🗻": "1f5fb",
"🗼": "1f5fc",
"🗽": "1f5fd",
"🗾": "1f5fe",
"🗿": "1f5ff",
"👞": "1f45e",
"👟": "1f45f",
"👠": "1f460",
"👡": "1f461",
"👢": "1f462",
"👣": "1f463",
"👓": "1f453",
"👕": "1f455",
"👖": "1f456",
"👑": "1f451",
"👔": "1f454",
"👒": "1f452",
"👗": "1f457",
"👘": "1f458",
"👙": "1f459",
"👚": "1f45a",
"👛": "1f45b",
"👜": "1f45c",
"👝": "1f45d",
"💰": "1f4b0",
"💱": "1f4b1",
"💹": "1f4b9",
"💲": "1f4b2",
"💳": "1f4b3",
"💴": "1f4b4",
"💵": "1f4b5",
"💸": "1f4b8",
"🇨🇳": "1f1e81f1f3",
"🇩🇪": "1f1e91f1ea",
"🇪🇸": "1f1ea1f1f8",
"🇫🇷": "1f1eb1f1f7",
"🇬🇧": "1f1ec1f1e7",
"🇮🇹": "1f1ee1f1f9",
"🇯🇵": "1f1ef1f1f5",
"🇰🇷": "1f1f01f1f7",
"🇷🇺": "1f1f71f1fa",
"🇺🇸": "1f1fa1f1f8",
"🔥": "1f525",
"🔦": "1f526",
"🔧": "1f527",
"🔨": "1f528",
"🔩": "1f529",
"🔪": "1f52a",
"🔫": "1f52b",
"🔮": "1f52e",
"🔯": "1f52f",
"🔰": "1f530",
"🔱": "1f531",
"💉": "1f489",
"💊": "1f48a",
"🅰": "1f170",
"🅱": "1f171",
"🆎": "1f18e",
"🅾": "1f17e",
"🎀": "1f380",
"🎁": "1f381",
"🎂": "1f382",
"🎄": "1f384",
"🎅": "1f385",
"🎌": "1f38c",
"🎆": "1f386",
"🎈": "1f388",
"🎉": "1f389",
"🎍": "1f38d",
"🎎": "1f38e",
"🎓": "1f393",
"🎒": "1f392",
"🎏": "1f38f",
"🎇": "1f387",
"🎐": "1f390",
"🎃": "1f383",
"🎊": "1f38a",
"🎋": "1f38b",
"🎑": "1f391",
"📟": "1f4df",
"☎": "260e",
"📞": "1f4de",
"📱": "1f4f1",
"📲": "1f4f2",
"📝": "1f4dd",
"📠": "1f4e0",
"✉": "2709",
"📨": "1f4e8",
"📩": "1f4e9",
"📪": "1f4ea",
"📫": "1f4eb",
"📮": "1f4ee",
"📰": "1f4f0",
"📢": "1f4e2",
"📣": "1f4e3",
"📡": "1f4e1",
"📤": "1f4e4",
"📥": "1f4e5",
"📦": "1f4e6",
"📧": "1f4e7",
"🔠": "1f520",
"🔡": "1f521",
"🔢": "1f522",
"🔣": "1f523",
"🔤": "1f524",
"✒": "2712",
"💺": "1f4ba",
"💻": "1f4bb",
"✏": "270f",
"📎": "1f4ce",
"💼": "1f4bc",
"💽": "1f4bd",
"💾": "1f4be",
"💿": "1f4bf",
"📀": "1f4c0",
"✂": "2702",
"📍": "1f4cd",
"📃": "1f4c3",
"📄": "1f4c4",
"📅": "1f4c5",
"📁": "1f4c1",
"📂": "1f4c2",
"📓": "1f4d3",
"📖": "1f4d6",
"📔": "1f4d4",
"📕": "1f4d5",
"📗": "1f4d7",
"📘": "1f4d8",
"📙": "1f4d9",
"📚": "1f4da",
"📛": "1f4db",
"📜": "1f4dc",
"📋": "1f4cb",
"📆": "1f4c6",
"📊": "1f4ca",
"📈": "1f4c8",
"📉": "1f4c9",
"📇": "1f4c7",
"📌": "1f4cc",
"📒": "1f4d2",
"📏": "1f4cf",
"📐": "1f4d0",
"📑": "1f4d1",
"🎽": "1f3bd",
"⚾": "26be",
"⛳": "26f3",
"🎾": "1f3be",
"⚽": "26bd",
"🎿": "1f3bf",
"🏀": "1f3c0",
"🏁": "1f3c1",
"🏂": "1f3c2",
"🏃": "1f3c3",
"🏄": "1f3c4",
"🏆": "1f3c6",
"🏈": "1f3c8",
"🏊": "1f3ca",
"🚃": "1f683",
"🚇": "1f687",
"Ⓜ": "24c2",
"🚄": "1f684",
"🚅": "1f685",
"🚗": "1f697",
"🚙": "1f699",
"🚌": "1f68c",
"🚏": "1f68f",
"🚢": "1f6a2",
"✈": "2708",
"⛵": "26f5",
"🚉": "1f689",
"🚀": "1f680",
"🚤": "1f6a4",
"🚕": "1f695",
"🚚": "1f69a",
"🚒": "1f692",
"🚑": "1f691",
"🚓": "1f693",
"⛽": "26fd",
"🅿": "1f17f",
"🚥": "1f6a5",
"🚧": "1f6a7",
"🚨": "1f6a8",
"♨": "2668",
"⛺": "26fa",
"🎠": "1f3a0",
"🎡": "1f3a1",
"🎢": "1f3a2",
"🎣": "1f3a3",
"🎤": "1f3a4",
"🎥": "1f3a5",
"🎦": "1f3a6",
"🎧": "1f3a7",
"🎨": "1f3a8",
"🎩": "1f3a9",
"🎪": "1f3aa",
"🎫": "1f3ab",
"🎬": "1f3ac",
"🎭": "1f3ad",
"🎮": "1f3ae",
"🀄": "1f004",
"🎯": "1f3af",
"🎰": "1f3b0",
"🎱": "1f3b1",
"🎲": "1f3b2",
"🎳": "1f3b3",
"🎴": "1f3b4",
"🃏": "1f0cf",
"🎵": "1f3b5",
"🎶": "1f3b6",
"🎷": "1f3b7",
"🎸": "1f3b8",
"🎹": "1f3b9",
"🎺": "1f3ba",
"🎻": "1f3bb",
"🎼": "1f3bc",
"〽": "303d",
"📷": "1f4f7",
"📹": "1f4f9",
"📺": "1f4fa",
"📻": "1f4fb",
"📼": "1f4fc",
"💋": "1f48b",
"💌": "1f48c",
"💍": "1f48d",
"💎": "1f48e",
"💏": "1f48f",
"💐": "1f490",
"💑": "1f491",
"💒": "1f492",
"🔞": "1f51e",
"©": "a9",
"®": "ae",
"™": "2122",
"ℹ": "2139",
"#⃣": "2320e3",
"1⃣": "3120e3",
"2⃣": "3220e3",
"3⃣": "3320e3",
"4⃣": "3420e3",
"5⃣": "3520e3",
"6⃣": "3620e3",
"7⃣": "3720e3",
"8⃣": "3820e3",
"9⃣": "3920e3",
"0⃣": "3020e3",
"🔟": "1f51f",
"📶": "1f4f6",
"📳": "1f4f3",
"📴": "1f4f4",
"🍔": "1f354",
"🍙": "1f359",
"🍰": "1f370",
"🍜": "1f35c",
"🍞": "1f35e",
"🍳": "1f373",
"🍦": "1f366",
"🍟": "1f35f",
"🍡": "1f361",
"🍘": "1f358",
"🍚": "1f35a",
"🍝": "1f35d",
"🍛": "1f35b",
"🍢": "1f362",
"🍣": "1f363",
"🍱": "1f371",
"🍲": "1f372",
"🍧": "1f367",
"🍖": "1f356",
"🍥": "1f365",
"🍠": "1f360",
"🍕": "1f355",
"🍗": "1f357",
"🍨": "1f368",
"🍩": "1f369",
"🍪": "1f36a",
"🍫": "1f36b",
"🍬": "1f36c",
"🍭": "1f36d",
"🍮": "1f36e",
"🍯": "1f36f",
"🍤": "1f364",
"🍴": "1f374",
"☕": "2615",
"🍸": "1f378",
"🍺": "1f37a",
"🍵": "1f375",
"🍶": "1f376",
"🍷": "1f377",
"🍻": "1f37b",
"🍹": "1f379",
"↗": "2197",
"↘": "2198",
"↖": "2196",
"↙": "2199",
"⤴": "2934",
"⤵": "2935",
"↔": "2194",
"↕": "2195",
"⬆": "2b06",
"⬇": "2b07",
"➡": "27a1",
"⬅": "2b05",
"▶": "25b6",
"◀": "25c0",
"⏩": "23e9",
"⏪": "23ea",
"⏫": "23eb",
"⏬": "23ec",
"🔺": "1f53a",
"🔻": "1f53b",
"🔼": "1f53c",
"🔽": "1f53d",
"⭕": "2b55",
"❌": "274c",
"❎": "274e",
"❗": "2757",
"⁉": "2049",
"‼": "203c",
"❓": "2753",
"❔": "2754",
"❕": "2755",
"〰": "3030",
"➰": "27b0",
"➿": "27bf",
"❤": "2764",
"💓": "1f493",
"💔": "1f494",
"💕": "1f495",
"💖": "1f496",
"💗": "1f497",
"💘": "1f498",
"💙": "1f499",
"💚": "1f49a",
"💛": "1f49b",
"💜": "1f49c",
"💝": "1f49d",
"💞": "1f49e",
"💟": "1f49f",
"♥": "2665",
"♠": "2660",
"♦": "2666",
"♣": "2663",
"🚬": "1f6ac",
"🚭": "1f6ad",
"♿": "267f",
"🚩": "1f6a9",
"⚠": "26a0",
"⛔": "26d4",
"♻": "267b",
"🚲": "1f6b2",
"🚶": "1f6b6",
"🚹": "1f6b9",
"🚺": "1f6ba",
"🛀": "1f6c0",
"🚻": "1f6bb",
"🚽": "1f6bd",
"🚾": "1f6be",
"🚼": "1f6bc",
"🚪": "1f6aa",
"🚫": "1f6ab",
"✔": "2714",
"🆑": "1f191",
"🆒": "1f192",
"🆓": "1f193",
"🆔": "1f194",
"🆕": "1f195",
"🆖": "1f196",
"🆗": "1f197",
"🆘": "1f198",
"🆙": "1f199",
"🆚": "1f19a",
"🈁": "1f201",
"🈂": "1f202",
"🈲": "1f232",
"🈳": "1f233",
"🈴": "1f234",
"🈵": "1f235",
"🈶": "1f236",
"🈚": "1f21a",
"🈷": "1f237",
"🈸": "1f238",
"🈹": "1f239",
"🈯": "1f22f",
"🈺": "1f23a",
"㊙": "3299",
"㊗": "3297",
"🉐": "1f250",
"🉑": "1f251",
"➕": "2795",
"➖": "2796",
"✖": "2716",
"➗": "2797",
"💠": "1f4a0",
"💡": "1f4a1",
"💢": "1f4a2",
"💣": "1f4a3",
"💤": "1f4a4",
"💥": "1f4a5",
"💦": "1f4a6",
"💧": "1f4a7",
"💨": "1f4a8",
"💩": "1f4a9",
"💪": "1f4aa",
"💫": "1f4ab",
"💬": "1f4ac",
"✨": "2728",
"✴": "2734",
"✳": "2733",
"⚪": "26aa",
"⚫": "26ab",
"🔴": "1f534",
"🔵": "1f535",
"🔲": "1f532",
"🔳": "1f533",
"⭐": "2b50",
"⬜": "2b1c",
"⬛": "2b1b",
"▫": "25ab",
"▪": "25aa",
"◽": "25fd",
"◾": "25fe",
"◻": "25fb",
"◼": "25fc",
"🔶": "1f536",
"🔷": "1f537",
"🔸": "1f538",
"🔹": "1f539",
"❇": "2747",
"💮": "1f4ae",
"💯": "1f4af",
"↩": "21a9",
"↪": "21aa",
"🔃": "1f503",
"🔊": "1f50a",
"🔋": "1f50b",
"🔌": "1f50c",
"🔍": "1f50d",
"🔎": "1f50e",
"🔒": "1f512",
"🔓": "1f513",
"🔏": "1f50f",
"🔐": "1f510",
"🔑": "1f511",
"🔔": "1f514",
"☑": "2611",
"🔘": "1f518",
"🔖": "1f516",
"🔗": "1f517",
"🔙": "1f519",
"🔚": "1f51a",
"🔛": "1f51b",
"🔜": "1f51c",
"🔝": "1f51d",
" ": "2003",
" ": "2002",
" ": "2005",
"✅": "2705",
"✊": "270a",
"✋": "270b",
"✌": "270c",
"👊": "1f44a",
"👍": "1f44d",
"☝": "261d",
"👆": "1f446",
"👇": "1f447",
"👈": "1f448",
"👉": "1f449",
"👋": "1f44b",
"👏": "1f44f",
"👌": "1f44c",
"👎": "1f44e",
"👐": "1f450",
"": "2600",
"": "2601",
"": "2614",
"": "26c4",
"": "26a1",
"": "1f300",
"[霧]": "1f301",
"": "1f302",
"": "1f30c",
"": "1f304",
"": "1f305",
"": "1f306",
"": "1f307",
"": "1f308",
"[雪結晶]": "2744",
"": "26c5",
"": "1f30a",
"[火山]": "1f30b",
"[地球]": "1f30f",
"●": "1f311",
"": "1f31b",
"○": "1f315",
"": "1f31f",
"☆彡": "1f320",
"": "1f550",
"": "1f551",
"": "1f552",
"": "1f553",
"": "1f554",
"": "1f555",
"": "1f556",
"": "1f557",
"": "1f558",
"": "23f0",
"": "1f55a",
"": "1f55b",
"[腕時計]": "231a",
"[砂時計]": "23f3",
"": "2648",
"": "2649",
"": "264a",
"": "264b",
"": "264c",
"": "264d",
"": "264e",
"": "264f",
"": "2650",
"": "2651",
"": "2652",
"": "2653",
"": "26ce",
"": "1f33f",
"": "1f337",
"": "1f341",
"": "1f338",
"": "1f339",
"": "1f342",
"": "1f343",
"": "1f33a",
"": "1f33c",
"": "1f334",
"": "1f335",
"": "1f33e",
"[とうもろこし]": "1f33d",
"[キノコ]": "1f344",
"[栗]": "1f330",
"[さくらんぼ]": "1f352",
"[バナナ]": "1f34c",
"": "1f34f",
"": "1f34a",
"": "1f353",
"": "1f349",
"": "1f345",
"": "1f346",
"[メロン]": "1f348",
"[パイナップル]": "1f34d",
"[ブドウ]": "1f347",
"[モモ]": "1f351",
"": "1f440",
"": "1f442",
"": "1f443",
"": "1f444",
"": "1f61d",
"": "1f484",
"": "1f485",
"": "1f486",
"": "1f487",
"": "1f488",
"〓": "2005",
"": "1f466",
"": "1f467",
"": "1f468",
"": "1f469",
"[家族]": "1f46a",
"": "1f46b",
"": "1f46e",
"": "1f46f",
"[花嫁]": "1f470",
"": "1f471",
"": "1f472",
"": "1f473",
"": "1f474",
"": "1f475",
"": "1f476",
"": "1f477",
"": "1f478",
"[なまはげ]": "1f479",
"[天狗]": "1f47a",
"": "1f47b",
"": "1f47c",
"": "1f47d",
"": "1f47e",
"": "1f47f",
"": "1f480",
"": "1f481",
"": "1f482",
"": "1f483",
"[カタツムリ]": "1f40c",
"": "1f40d",
"": "1f40e",
"": "1f414",
"": "1f417",
"": "1f42b",
"": "1f418",
"": "1f428",
"": "1f412",
"": "1f411",
"": "1f419",
"": "1f41a",
"": "1f41b",
"[アリ]": "1f41c",
"[ミツバチ]": "1f41d",
"[てんとう虫]": "1f41e",
"": "1f420",
"": "1f3a3",
"[カメ]": "1f422",
"": "1f423",
"": "1f426",
"": "1f427",
"": "1f436",
"": "1f42c",
"": "1f42d",
"": "1f42f",
"": "1f431",
"": "1f433",
"": "1f434",
"": "1f435",
"": "1f43d",
"": "1f43b",
"": "1f439",
"": "1f43a",
"": "1f42e",
"": "1f430",
"": "1f438",
"": "1f463",
"[辰]": "1f432",
"[パンダ]": "1f43c",
"": "1f620",
"": "1f64d",
"": "1f632",
"": "1f61e",
"": "1f62b",
"": "1f630",
"": "1f612",
"": "1f63b",
"": "1f63c",
"": "1f61c",
"": "1f60a",
"": "1f63d",
"": "1f61a",
"": "1f637",
"": "1f633",
"": "1f63a",
"": "1f605",
"": "1f60c",
"": "1f639",
"": "263a",
"": "1f604",
"": "1f63f",
"": "1f62d",
"": "1f628",
"": "1f64e",
"": "1f4ab",
"": "1f631",
"": "1f62a",
"": "1f60f",
"": "1f613",
"": "1f625",
"": "1f609",
"": "1f645",
"": "1f646",
"": "1f647",
"(/_＼)": "1f648",
"(・×・)": "1f64a",
"|(・×・)|": "1f649",
"": "270b",
"": "1f64c",
"": "1f64f",
"": "1f3e1",
"": "1f3e2",
"": "1f3e3",
"": "1f3e5",
"": "1f3e6",
"": "1f3e7",
"": "1f3e8",
"": "1f3e9",
"": "1f3ea",
"": "1f3eb",
"": "26ea",
"": "26f2",
"": "1f3ec",
"": "1f3ef",
"": "1f3f0",
"": "1f3ed",
"": "1f6a2",
"": "1f376",
"": "1f5fb",
"": "1f5fc",
"": "1f5fd",
"[日本地図]": "1f5fe",
"[モアイ]": "1f5ff",
"": "1f45f",
"": "1f460",
"": "1f461",
"": "1f462",
"[メガネ]": "1f453",
"": "1f45a",
"[ジーンズ]": "1f456",
"": "1f451",
"": "1f454",
"": "1f452",
"": "1f457",
"": "1f458",
"": "1f459",
"[財布]": "1f45b",
"": "1f45c",
"[ふくろ]": "1f45d",
"": "1f4b5",
"": "1f4b1",
"": "1f4c8",
"[カード]": "1f4b3",
"￥": "1f4b4",
"[飛んでいくお金]": "1f4b8",
"": "1f1e81f1f3",
"": "1f1e91f1ea",
"": "1f1ea1f1f8",
"": "1f1eb1f1f7",
"": "1f1ec1f1e7",
"": "1f1ee1f1f9",
"": "1f1ef1f1f5",
"": "1f1f01f1f7",
"": "1f1f71f1fa",
"": "1f1fa1f1f8",
"": "1f525",
"[懐中電灯]": "1f526",
"[レンチ]": "1f527",
"": "1f528",
"[ネジ]": "1f529",
"[包丁]": "1f52a",
"": "1f52b",
"": "1f52f",
"": "1f530",
"": "1f531",
"": "1f489",
"": "1f48a",
"": "1f170",
"": "1f171",
"": "1f18e",
"": "1f17e",
"": "1f380",
"": "1f4e6",
"": "1f382",
"": "1f384",
"": "1f385",
"": "1f38c",
"": "1f386",
"": "1f388",
"": "1f389",
"": "1f38d",
"": "1f38e",
"": "1f393",
"": "1f392",
"": "1f38f",
"": "1f387",
"": "1f390",
"": "1f383",
"[オメデトウ]": "1f38a",
"[七夕]": "1f38b",
"": "1f391",
"[ポケベル]": "1f4df",
"": "1f4de",
"": "1f4f1",
"": "1f4f2",
"": "1f4d1",
"": "1f4e0",
"": "1f4e7",
"": "1f4eb",
"": "1f4ee",
"[新聞]": "1f4f0",
"": "1f4e2",
"": "1f4e3",
"": "1f4e1",
"[送信BOX]": "1f4e4",
"[受信BOX]": "1f4e5",
"[ABCD]": "1f520",
"[abcd]": "1f521",
"[1234]": "1f522",
"[記号]": "1f523",
"[ABC]": "1f524",
"[ペン]": "2712",
"": "1f4ba",
"": "1f4bb",
"[クリップ]": "1f4ce",
"": "1f4bc",
"": "1f4be",
"": "1f4bf",
"": "1f4c0",
"": "2702",
"[画びょう]": "1f4cc",
"[カレンダー]": "1f4c6",
"[フォルダ]": "1f4c2",
"": "1f4d2",
"[名札]": "1f4db",
"[スクロール]": "1f4dc",
"[グラフ]": "1f4c9",
"[定規]": "1f4cf",
"[三角定規]": "1f4d0",
"": "26be",
"": "26f3",
"": "1f3be",
"": "26bd",
"": "1f3bf",
"": "1f3c0",
"": "1f3c1",
"[スノボ]": "1f3c2",
"": "1f3c3",
"": "1f3c4",
"": "1f3c6",
"": "1f3c8",
"": "1f3ca",
"": "1f683",
"": "24c2",
"": "1f684",
"": "1f685",
"": "1f697",
"": "1f699",
"": "1f68c",
"": "1f68f",
"": "2708",
"": "26f5",
"": "1f689",
"": "1f680",
"": "1f6a4",
"": "1f695",
"": "1f69a",
"": "1f692",
"": "1f691",
"": "1f6a8",
"": "26fd",
"": "1f17f",
"": "1f6a5",
"": "26d4",
"": "2668",
"": "26fa",
"": "1f3a1",
"": "1f3a2",
"": "1f3a4",
"": "1f4f9",
"": "1f3a6",
"": "1f3a7",
"": "1f3a8",
"": "1f3ad",
"[イベント]": "1f3aa",
"": "1f3ab",
"": "1f3ac",
"[ゲーム]": "1f3ae",
"": "1f004",
"": "1f3af",
"": "1f3b0",
"": "1f3b1",
"[サイコロ]": "1f3b2",
"[ボーリング]": "1f3b3",
"[花札]": "1f3b4",
"[ジョーカー]": "1f0cf",
"": "1f3b5",
"": "1f3bc",
"": "1f3b7",
"": "1f3b8",
"[ピアノ]": "1f3b9",
"": "1f3ba",
"[バイオリン]": "1f3bb",
"": "303d",
"": "1f4f7",
"": "1f4fa",
"": "1f4fb",
"": "1f4fc",
"": "1f48b",
"": "1f48c",
"": "1f48d",
"": "1f48e",
"": "1f48f",
"": "1f490",
"": "1f491",
"": "1f492",
"": "1f51e",
"": "a9",
"": "ae",
"": "2122",
"[ｉ]": "2139",
"": "2320e3",
"": "3120e3",
"": "3220e3",
"": "3320e3",
"": "3420e3",
"": "3520e3",
"": "3620e3",
"": "3720e3",
"": "3820e3",
"": "3920e3",
"": "3020e3",
"[10]": "1f51f",
"": "1f4f6",
"": "1f4f3",
"": "1f4f4",
"": "1f354",
"": "1f359",
"": "1f370",
"": "1f35c",
"": "1f35e",
"": "1f373",
"": "1f366",
"": "1f35f",
"": "1f361",
"": "1f358",
"": "1f35a",
"": "1f35d",
"": "1f35b",
"": "1f362",
"": "1f363",
"": "1f371",
"": "1f372",
"": "1f367",
"[肉]": "1f356",
"[なると]": "1f365",
"[やきいも]": "1f360",
"[ピザ]": "1f355",
"[チキン]": "1f357",
"[アイスクリーム]": "1f368",
"[ドーナツ]": "1f369",
"[クッキー]": "1f36a",
"[チョコ]": "1f36b",
"[キャンディ]": "1f36d",
"[プリン]": "1f36e",
"[ハチミツ]": "1f36f",
"[エビフライ]": "1f364",
"": "1f374",
"": "2615",
"": "1f379",
"": "1f37a",
"": "1f375",
"": "1f37b",
"": "2934",
"": "2935",
"": "2196",
"": "2199",
"⇔": "2194",
"↑↓": "1f503",
"": "2b06",
"": "2b07",
"": "27a1",
"": "1f519",
"": "25b6",
"": "25c0",
"": "23e9",
"": "23ea",
"▲": "1f53c",
"▼": "1f53d",
"": "2b55",
"": "2716",
"": "2757",
"！？": "2049",
"！！": "203c",
"": "2753",
"": "2754",
"": "2755",
"～": "27b0",
"": "27bf",
"": "2764",
"": "1f49e",
"": "1f494",
"": "1f497",
"": "1f498",
"": "1f499",
"": "1f49a",
"": "1f49b",
"": "1f49c",
"": "1f49d",
"": "1f49f",
"": "2665",
"": "2660",
"": "2666",
"": "2663",
"": "1f6ac",
"": "1f6ad",
"": "267f",
"[旗]": "1f6a9",
"": "26a0",
"": "1f6b2",
"": "1f6b6",
"": "1f6b9",
"": "1f6ba",
"": "1f6c0",
"": "1f6bb",
"": "1f6bd",
"": "1f6be",
"": "1f6bc",
"[ドア]": "1f6aa",
"[禁止]": "1f6ab",
"[チェックマーク]": "2705",
"[CL]": "1f191",
"": "1f192",
"[FREE]": "1f193",
"": "1f194",
"": "1f195",
"[NG]": "1f196",
"": "1f197",
"[SOS]": "1f198",
"": "1f199",
"": "1f19a",
"": "1f201",
"": "1f202",
"[禁]": "1f232",
"": "1f233",
"[合]": "1f234",
"": "1f235",
"": "1f236",
"": "1f21a",
"": "1f237",
"": "1f238",
"": "1f239",
"": "1f22f",
"": "1f23a",
"": "3299",
"": "3297",
"": "1f250",
"[可]": "1f251",
"[＋]": "2795",
"[－]": "2796",
"[÷]": "2797",
"": "1f4a1",
"": "1f4a2",
"": "1f4a3",
"": "1f4a4",
"[ドンッ]": "1f4a5",
"": "1f4a7",
"": "1f4a8",
"": "1f4a9",
"": "1f4aa",
"[フキダシ]": "1f4ac",
"": "2747",
"": "2734",
"": "2733",
"": "1f534",
"": "25fc",
"": "1f539",
"": "2b50",
"[花丸]": "1f4ae",
"[100点]": "1f4af",
"←┘": "21a9",
"└→": "21aa",
"": "1f50a",
"[電池]": "1f50b",
"[コンセント]": "1f50c",
"": "1f50e",
"": "1f510",
"": "1f513",
"": "1f511",
"": "1f514",
"[ラジオボタン]": "1f518",
"[ブックマーク]": "1f516",
"[リンク]": "1f517",
"[end]": "1f51a",
"[ON]": "1f51b",
"[SOON]": "1f51c",
"": "1f51d",
"": "270a",
"": "270c",
"": "1f44a",
"": "1f44d",
"": "261d",
"": "1f446",
"": "1f447",
"": "1f448",
"": "1f449",
"": "1f44b",
"": "1f44f",
"": "1f44c",
"": "1f44e",
"": "1f450"
}, s = {
"/微笑": "0",
"/撇嘴": "1",
"/色": "2",
"/发呆": "3",
"/得意": "4",
"/流泪": "5",
"/害羞": "6",
"/闭嘴": "7",
"/睡": "8",
"/大哭": "9",
"/尴尬": "10",
"/发怒": "11",
"/调皮": "12",
"/呲牙": "13",
"/惊讶": "14",
"/难过": "15",
"/酷": "16",
"/冷汗": "17",
"/抓狂": "18",
"/吐": "19",
"/偷笑": "20",
"/可爱": "21",
"/白眼": "22",
"/傲慢": "23",
"/饥饿": "24",
"/困": "25",
"/惊恐": "26",
"/流汗": "27",
"/憨笑": "28",
"/大兵": "29",
"/奋斗": "30",
"/咒骂": "31",
"/疑问": "32",
"/嘘": "33",
"/晕": "34",
"/折磨": "35",
"/衰": "36",
"/骷髅": "37",
"/敲打": "38",
"/再见": "39",
"/擦汗": "40",
"/抠鼻": "41",
"/鼓掌": "42",
"/糗大了": "43",
"/坏笑": "44",
"/左哼哼": "45",
"/右哼哼": "46",
"/哈欠": "47",
"/鄙视": "48",
"/委屈": "49",
"/快哭了": "50",
"/阴险": "51",
"/亲亲": "52",
"/吓": "53",
"/可怜": "54",
"/菜刀": "55",
"/西瓜": "56",
"/啤酒": "57",
"/篮球": "58",
"/乒乓": "59",
"/咖啡": "60",
"/饭": "61",
"/猪头": "62",
"/玫瑰": "63",
"/凋谢": "64",
"/示爱": "65",
"/爱心": "66",
"/心碎": "67",
"/蛋糕": "68",
"/闪电": "69",
"/炸弹": "70",
"/刀": "71",
"/足球": "72",
"/瓢虫": "73",
"/便便": "74",
"/月亮": "75",
"/太阳": "76",
"/礼物": "77",
"/拥抱": "78",
"/强": "79",
"/弱": "80",
"/握手": "81",
"/胜利": "82",
"/抱拳": "83",
"/勾引": "84",
"/拳头": "85",
"/差劲": "86",
"/爱你": "87",
"/NO": "88",
"/OK": "89",
"/爱情": "90",
"/飞吻": "91",
"/跳跳": "92",
"/发抖": "93",
"/怄火": "94",
"/转圈": "95",
"/磕头": "96",
"/回头": "97",
"/跳绳": "98",
"/挥手": "99",
"/激动": "100",
"/街舞": "101",
"/献吻": "102",
"/左太极": "103",
"/右太极": "104",
"/::)": "0",
"/::~": "1",
"/::B": "2",
"/::|": "3",
"/:8-)": "4",
"/::<": "5",
"/::$": "6",
"/::X": "7",
"/::Z": "8",
"/::(": "9",
"/::'(": "9",
"/::-|": "10",
"/::@": "11",
"/::P": "12",
"/::D": "13",
"/::O": "14",
"/::(": "15",
"/::+": "16",
"/:--b": "17",
"/::Q": "18",
"/::T": "19",
"/:,@P": "20",
"/:,@-D": "21",
"/::d": "22",
"/:,@o": "23",
"/::g": "24",
"/:|-)": "25",
"/::!": "26",
"/::L": "27",
"/::>": "28",
"/::,@": "29",
"/:,@f": "30",
"/::-S": "31",
"/:?": "32",
"/:,@x": "33",
"/:,@@": "34",
"/::8": "35",
"/:,@!": "36",
"/:!!!": "37",
"/:xx": "38",
"/:bye": "39",
"/:wipe": "40",
"/:dig": "41",
"/:handclap": "42",
"/:&-(": "43",
"/:B-)": "44",
"/:<@": "45",
"/:@>": "46",
"/::-O": "47",
"/:>-|": "48",
"/:P-(": "49",
"/::'|": "50",
"/:X-)": "51",
"/::*": "52",
"/:@x": "53",
"/:8*": "54",
"/:pd": "55",
"/:<W>": "56",
"/:beer": "57",
"/:basketb": "58",
"/:oo": "59",
"/:coffee": "60",
"/:eat": "61",
"/:pig": "62",
"/:rose": "63",
"/:fade": "64",
"/:showlove": "65",
"/:heart": "66",
"/:break": "67",
"/:cake": "68",
"/:li": "69",
"/:bome": "70",
"/:kn": "71",
"/:footb": "72",
"/:ladybug": "73",
"/:shit": "74",
"/:moon": "75",
"/:sun": "76",
"/:gift": "77",
"/:hug": "78",
"/:strong": "79",
"/:weak": "80",
"/:share": "81",
"/:v": "82",
"/:@)": "83",
"/:jj": "84",
"/:@@": "85",
"/:bad": "86",
"/:lvu": "87",
"/:no": "88",
"/:ok": "89",
"/:love": "90",
"/:<L>": "91",
"/:jump": "92",
"/:shake": "93",
"/:<O>": "94",
"/:circle": "95",
"/:kotow": "96",
"/:turn": "97",
"/:skip": "98",
"/:oY": "99",
"/:#-0": "100",
"/:hiphot": "101",
"/:kiss": "102",
"/:<&": "103",
"/:&>": "104"
}, o = '<span class="emoji emoji%s"></span>', u = wx.resPath + "/mpres/htmledition/images/icon/emotion/", a = '<img src="' + u + '%s.gif" width="24" height="24">';
String.prototype.emoji = function() {
var e = this.toString();
for (var t in i) while (-1 != e.indexOf(t)) e = e.replace(t, o.sprintf(i[t]));
for (var t in s) while (-1 != e.indexOf(t)) e = e.replace(t, a.sprintf(s[t]));
return e;
};
} catch (f) {
wx.jslog({
src: "common/qq/emoji.js"
}, f);
}
});!function(){
if(!window.define){
var t={};
window.define=function(e,i,n){
t[e]=n;
},window.seajs={
use:function(e){
function i(e){
return t[e]&&t[e](i);
}
return t[e]&&t[e](i);
}
};
}
}(),define("biz_common/utils/norefererimg.js",[],function(){
function t(t){
return window.getComputedStyle?window.getComputedStyle(t):t.currentStyle;
}
function e(t,e,i,n){
if(t&&i){
if(t==window&&"load"==e&&/complete|loaded/.test(document.readyState))return void i({
type:"load"
});
var o=function(t){
var e=i.call(this,t);
e===!1&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault());
};
return i[e+"_handler"]=o,t.addEventListener?void t.addEventListener(e,o,!!n):t.attachEvent?void t.attachEvent("on"+e,o,!!n):void 0;
}
}
return function(i){
var n=i.img,o=i.imgurl,r=i.onload,d=o||n.getAttribute("data-src"),a=/^http:\/\/mmbiz\.qpic\.cn\/|https:\/\/mmbiz\.qlogo\.cn\//;
if(d){
if(n.length&&(n=n[0]),a.test(d))return e(n,"load",r),void n.setAttribute("src",d);
var s=t(n),l=["javascript:\"<html><body style='margin:0;padding:0;'><img style='width:",s.width,";height:",s.height,";' src='",d+"' /></body></html>\""].join(" "),u=document.createElement("iframe");
u.setAttribute("frameBorder","0"),u.setAttribute("scrolling","no"),u.style.width="60px",
u.style.width=s.width+"",u.style.height=s.height,u.style.display=s.display,u.style.borderRadius=s.borderRadius,
u.style.webkitBorderRadius=s.borderRadius,"function"==typeof r&&(u.attachEvent?u.attachEvent("onload",r):u.onload=r),
u.className=n.className;
var c=n.parentNode;
c.insertBefore(u,n),u.src=l,c.removeChild(n);
}
};
});define("tpl/media/videocard.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo Js_videomsg">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">{title}</h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <em class="res">{from}</em>\n        </div>\n        <div class="video_extra_info" data-seq="{seq}">\n            <img class="video_thumb" src="{cover}" alt="">\n            {if is_new_video && status != 4}\n            <span class="video_length">{duration}</span>\n            {/if}\n            {if status == 0}\n            <div class="status_mask">\n            <span class="status_msg">\n                审核中\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 1}\n            <div class="status_mask">\n            <span class="status_msg">\n                资料不完整\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 2}\n            <div class="status_mask">\n            <span class="status_msg mini_tips icon_after">\n                审核不通过\n                <i class="icon_mini_tips ask_white js_fail_reason" data-seq="{seq}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 3 && is_new_video} \n            <div class="play_mask">\n                <i class="icon_video_play"> </i>\n                <span class="vm_box"></span>\n            </div>\n\n            {else if status == 4}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码中\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 5}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码失败<i class="icon_mini_tips ask_white js_fail_code" data-seq="{seq}"></i>\n\n            </span>\n            <span class="vm_box"></span>\n            </div>\n\n            {/if}\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line" >\n            {if is_new_video}\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else if is_new_video==0 && video_url!=""} <!-- 微信视频 -->\n            <li class="richvideo_opr_item grid_item size1of3">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else } <!-- 微视视频 -->\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n\n\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n\n\n';
});define("media/plugin/audio.js",["common/wx/popup.js","tpl/media/plugin/audio.html.js","tpl/media/plugin/audioItem.html.js","common/wx/Cgi.js","biz_web/ui/checkbox.js","common/wx/media/audio.js","common/wx/pagebar.js","biz_common/moment.js"],function(i){
"use strict";
function e(i,n,s){
t.get({
url:"/cgi-bin/filepage",
dataType:"json",
data:{
type:3,
begin:i,
count:n
},
mask:!1
},function(i){
if(0==i.base_resp.ret){
l=i.page_info.file_item;
var n=[];
l.each(function(i){
1==i.trans_state&&n.push({
name:i.name,
title:i.title||i.name,
update_time:d.unix(i.update_time).format("YYYY-MM-DD"),
play_length:i.play_length,
file_id:i.file_id,
voice_encode_fileid:i.voice_encode_fileid,
disabled:s&&i.play_length>6e4,
format_play_length:d.unix(i.play_length/1e3).format("mm:ss")
});
}),l=n;
var p=wx.T(o,{
list:l
});
a.find(".jsPluginAudioList").html(p),a.find(".jsPluginAudioRadio").checkbox(),s&&$(".jsAudioTips").show(),
a.find(".jsPluginAudioPlay").each(function(i,e){
var n=l[i];
return n.selector="#"+$(e).attr("id"),n.source="file",new c($.extend({},n,{
qqmusictpl:!0
}));
}),u||(u=new m({
container:".jsPluginAudioPage",
totalItemsNum:i.page_info.file_cnt.voice_cnt,
callback:function(i){
e(10*(i.currentPage-1),10,s);
}
}));
}else t.show(i);
});
}
i("common/wx/popup.js");
var n=i("tpl/media/plugin/audio.html.js"),o=i("tpl/media/plugin/audioItem.html.js"),t=i("common/wx/Cgi.js");
i("biz_web/ui/checkbox.js");
var a,u,l,c=i("common/wx/media/audio.js"),m=i("common/wx/pagebar.js"),d=i("biz_common/moment.js"),s=function(){};
return window.openAudioPopup=function(i){
u=null,l=[],a=null,a=$(n).popup({
className:"align_edge audio_dialog",
width:"960",
title:"请选择语音",
buttons:[{
text:"确定",
click:function(){
var i=a.find(".jsPluginAudioRadio[checked=checked]").data("index");
s(l&&l[i]),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
}),e(0,10,i),$(".jsPluginAudioNew").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
});
},{
registerCb:function(i){
s=i;
}
};
});define("tpl/media/dialog/file.html.js",[],function(){
return'{each list as item}\n{mediaDialogInit item}\n<li class="media_item">\n    <div class="media_info">\n        <label class="media_name frm_radio_label">\n        	<i class="icon_radio"></i>\n        	<input name="media" type="radio" class="frm_radio" value="{item.file_id}">\n            {item.name}\n        </label>\n        <span class="media_size">{item.size}</span>\n        <span class="media_time">{mediaDialogtimeFormat item.update_time}</span>\n    </div>\n    <div id="fileItem{item.file_id}" data-id="{item.file_id}" data-type="{item.type}" class="media_content"></div>\n</li>\n{/each}\n';
});define("tpl/media/dialog/videomsg_layout.html.js",[],function(){
return'<div class="dialog_media_container">\n    <div class="sub_title_bar in_dialog">\n        <div class="title_tab js_videotab"></div>\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="richvideo_create js_video_create ">\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建视频            </a>\n        </div>\n    </div>\n    <div class="js_video_status js_video_content dn">\n        <div class="richvideo_list media_dialog" id="js_videomsg_list">\n            <div class="richvideo_col"><div class="inner"></div></div>&nbsp;\n            <div class="richvideo_col"><div class="inner"></div></div>\n        </div>\n    </div>\n    <div class="js_video_status js_video_tencent dn">\n        <div class="video">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">视频网址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box"><input type="text" class="frm_input js_video_txurl"></span>\n                    <p class="frm_tips">支持腾讯视频</p>\n                </div>\n            </div>\n			<div class="video_preview js_video_preview"></div>\n		</div>\n    </div>\n    <div class="js_video_status js_video_loading">\n        <i class="icon_loading_small white">loading...</i>\n    </div>\n    <div class="js_video_status js_video_none dn">\n        <div class="no_media_wrp">\n            <p class="empty_tips js_empty_tips"></p>\n            <!--\n            <div class="richvideo_create js_video_create">\n                <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                    <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n                </a>\n            </div>\n            -->\n        </div>\n        <span class="vm_box"></span>\n    </div>\n    \n    <div class="pagination_wrp pageNavigator js_pagebar"></div>\n</div>\n\n';
});define("tpl/media/dialog/appmsg_layout.html.js",[],function(){
return'<div class="dialog_media_container appmsg_media_dialog">\n    <div class="sub_title_bar in_dialog">\n        <div class="search_bar">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:" id="searchCloseBt"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="标题/作者/摘要" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="appmsg_create tr">\n            {if type==10}\n            <!--\n            <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&lang=zh_CN&token={token}">\n                <i class="icon_appmsg_small"></i><strong>新建单图文消息</strong>\n            </a>\n            -->\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&isMul=1&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建图文消息            </a>\n            {else if type==11}\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建单商品消息            </a>\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=11&isMul=1&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建多商品消息            </a>\n            {/if}\n        </div>\n    </div>\n    <div class="dialog_media_inner">\n        {if tpl=="loading"}\n        <i class="icon_loading_small white">loading...</i>\n        {else if tpl=="no-media"}\n        <div class="no_media_wrp">\n            <p class="tips">暂无素材</p>\n        </div>\n        <span class="vm_box"></span>\n        {else}\n        <div class="js_appmsg_list appmsg_list media_dialog">\n            <div class="appmsg_col"><div class="inner"></div></div>&nbsp;\n            <div class="appmsg_col"><div class="inner"></div></div>\n        </div>\n        <div class="pagination_wrp pageNavigator"></div>\n        {/if}\n    </div>\n</div>\n';
});define("tpl/media/dialog/file_layout.html.js",[],function(){
return'<div class=\'dialog_media_container {if tpl=="no-media"}no_media{/if}\'>\n    {if tpl=="loading"}\n    <i class="icon_loading_small white">loading...</i>\n    {else if tpl=="no-media"}\n    <div class="no_media_wrp">\n        <p class="tips">\n        暂无素材        </p>\n        <div class="upload_box">\n            <span class="upload_area"><a id="js_media_dialog_upload{upload_id}" class="btn btn_upload" data-gid="">上传</a></span>\n            <div class="bubble_tips bubble_right warn">\n                <div class="bubble_tips_inner">\n                    {if type=="2"}\n                        大小不超过5M                    {/if}\n                    {if type=="3"}\n                        大小: 不超过5M,&nbsp;&nbsp;&nbsp;&nbsp;长度: 不超过60s,&nbsp;&nbsp;&nbsp;&nbsp;格式: mp3, wma, wav, amr                    {/if}\n                    {if type=="4"}\n                        大小: 不超过20M,&nbsp;&nbsp;&nbsp;&nbsp;格式: rm, rmvb, wmv, avi, mpg, mpeg, mp4                    {/if}\n                </div> \n                <i class="bubble_tips_arrow out"></i>\n                <i class="bubble_tips_arrow in"></i>\n            </div>\n        </div>\n    </div>\n    <span class="vm_box"></span>\n    {else}\n    <div class="sub_title_bar in_dialog">\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="upload_box">\n            <span class="upload_area"><a id="js_media_dialog_upload{upload_id}" class="btn btn_upload" data-gid="">上传</a></span>&nbsp;\n            <div class="bubble_tips bubble_left warn">\n                <div class="bubble_tips_inner">\n                    {if type=="2"}\n                        大小: 不超过5M,&nbsp;&nbsp;&nbsp;&nbsp;格式: bmp, png, jpeg, jpg, gif                    {/if}\n                    {if type=="3"}\n                        大小: 不超过5M,&nbsp;&nbsp;&nbsp;&nbsp;长度: 不超过60s,&nbsp;&nbsp;&nbsp;&nbsp;格式: mp3, wma, wav, amr                    {/if}\n                    {if type=="4"}\n                        大小: 不超过20M,&nbsp;&nbsp;&nbsp;&nbsp;格式: rm, rmvb, wmv, avi, mpg, mpeg, mp4                    {/if}\n                </div>\n                <i class="bubble_tips_arrow out"></i>\n                <i class="bubble_tips_arrow in"></i>\n            </div>\n        </div>&nbsp;\n    </div>\n    <ul class=\'dialog_media_list js_media_list\'></ul>\n    <div class="pagination_wrp pageNavigator"></div>\n    {/if}\n</div>\n';
});define("common/wx/time.js",[],function(){
"use strict";
function e(e){
var t=new Date(1e3*e),r=new Date,g=t.getTime(),a=r.getTime(),u=864e5;
return u>a-g&&r.getDate()==t.getDate()?"%s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):2*u>a-g&&new Date(1*t+u).getDate()==r.getDate()?"昨天 %s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):6*u>=a-g?"%s %s:%s".sprintf(s[t.getDay()],n(t.getHours()),n(t.getMinutes())):t.getFullYear()==r.getFullYear()?"%s月%s日".sprintf(n(t.getMonth()+1),n(t.getDate())):"%s年%s月%s日".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()));
}
function t(e){
var t=new Date(1e3*e);
return"%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()),n(t.getHours()),n(t.getMinutes()),n(t.getSeconds()));
}
function r(e,t){
var r=["日","一","二","三","四","五","六"],n=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,g(e.getFullYear()%100,2)).replace(/mm|MM/,g(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,g(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,g(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,g(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,g(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,r[e.getDay()]);
return n;
}
function g(e,t){
for(var r=0,g=t-(e+"").length;g>r;r++)e="0"+e;
return e+"";
}
var n=function(e){
return e+="",e.length>=2?e:"0"+e;
},s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
return{
timeFormat:e,
getFullTime:t,
formatDate:r
};
});define("cardticket/send_card.js",["common/wx/popup.js","common/wx/Step.js","cardticket/send_card_table.js","tpl/cardticket/send_card.html.js"],function(e){
"use strict";
var t=(e("common/wx/popup.js"),e("common/wx/Step.js"),function(e){
this.opt=e,this.init();
}),p=e("cardticket/send_card_table.js");
return t.prototype={
_html:e("tpl/cardticket/send_card.html.js"),
init:function(){
var e=this.opt,t=this,n=$(template.compile(this._html)()).popup({
title:"选择卡券",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
t.sendCardTable.select();
}
},{
text:"取消",
type:"default",
click:function(){
t.sendCardTable.isLoading()||this.hide();
}
}],
onHide:function(){
e.onHide&&e.onHide.call(t),e.removeOnHide&&this.remove();
},
className:"send_card align_edge",
width:960
});
if(this.$send_popup=n,e.container=this.$send_popup,e.pageChanged=function(){
t.$send_popup.popup("resetPosition");
},e.getDataComplete=function(){
t.$send_popup.popup("resetPosition");
},e.selectComplete){
var o=e.selectComplete;
e.selectComplete=function(){
o.call(t,arguments[0],arguments[1],arguments[2]),t.hide();
};
}else e.selectComplete=function(){
t.hide();
};
this.sendCardTable=new p(e);
},
show:function(){
this.$send_popup.popup("show"),this.$send_popup.popup("resetPosition");
},
hide:function(){
this.$send_popup.popup("hide");
},
destroy:function(){
this.$send_popup.popup("remove");
}
},t;
});define("common/wx/media/videoDialog.js",["common/wx/popup.js","page/smallvideo/dialog_select_video.css","widget/media/media_dialog.css","common/wx/top.js","common/wx/Tips.js","common/wx/media/video.js","common/wx/pagebar.js","common/wx/time.js","media/media_cgi.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/videocard.html.js"],function(e){
"use strict";
function i(e,i,t){
e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/^http:/,"https:"),e=e.replace(/^v\.qq\.com/,"https://v.qq.com"),
(-1!=e.indexOf("http://v.qq.com")||-1!=e.indexOf("https://v.qq.com"))&&d(e,i,t);
}
function t(e,i){
var i=i||document.location.toString(),t=e+"=",o=i.indexOf(t);
if(-1!=o){
var d=i.indexOf("&",o),n=i.indexOf("?",o);
return-1!=n&&(-1==d||d>n)&&(d=n),n=i.indexOf("#",o),-1!=n&&(-1==d||d>n)&&(d=n),-1==d?i.substring(o+t.length):i.substring(o+t.length,d);
}
return"";
}
function o(e){
e=e||window.location.toString();
var i,o=t("vid",e);
return o||(i=e.match(/\/\w{15}\/(\w+)\.html/))&&(o=i[1]),o||((i=e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/))?o=i[1]:(i=e.match(/\/(page|play)\/+(\w{11})\.html/))&&(o=i[2])),
o||(i=e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/))&&(o=i[1]),encodeURIComponent(o);
}
function d(e,i,t){
var d,n,s="",a=t.width,m=t.height;
if(d=e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)")))s=encodeURIComponent(d[2]),
t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);else if((d=e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html")))||(d=e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))){
var r=encodeURIComponent(d[2]),c="https://sec.video.qq.com/p/sns.video/fcgi-bin/dlib/dataout_ex?auto_id=137&cid="+r+"&otype=json",l=document.getElementsByTagName("head")[0],p=document.createElement("script");
p.type="text/javascript",p.src=c,p.async=!0,void 0!==p.onreadystatechange?p.onreadystatechange=function(){
if("loaded"==p.readyState)try{
s=QZOutputJson.videos[0].vid,t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);
}catch(e){}
}:p.onload=function(){
try{
s=QZOutputJson.videos[0].vid,t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t);
}catch(e){}
},l.appendChild(p);
}else s=o(e),""!=s&&(t.vid=s,n="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+m+"&auto=0",
i(n,t));
}
e("common/wx/popup.js"),e("page/smallvideo/dialog_select_video.css"),e("widget/media/media_dialog.css");
var n=e("common/wx/top.js"),s=e("common/wx/Tips.js"),a=e("common/wx/media/video.js"),m=e("common/wx/pagebar.js"),r=e("common/wx/time.js"),c=e("media/media_cgi.js"),l=e("tpl/media/dialog/videomsg_layout.html.js"),p=e("tpl/media/videocard.html.js"),v=15,_=21,f=0,h={};
h[v]="video_msg_cnt",h[_]="short_video_cnt";
var u=function(e,i){
var t=$.extend({},i.multi_item?i.multi_item[0]:i);
t.selector=e,t.id=i.app_id,t.app_id=i.app_id,t.tpl="videomsg",t.for_selection=1!=t.is_new_video?!0:3==t.status,
t.for_transfer=!!t.content,t.hide_transfer=!!t.content,t.video_id=t.content,t.source="file",
1==t.is_new_video?(t.time=i.create_time?r.timeFormat(i.create_time):"",e.html(wx.T(p,t))):(t.create_time=i.create_time,
new a(t)),$("#wxVideoBox"+t.id).data("opt",t);
},g=548,w=280,j=function(e){
console.log(e),this.scene=e.scene||"default",this.onOK=e.onOK,this.can_use_shortvideo=e.can_use_shortvideo,
this.can_use_txvideo=e.can_use_txvideo,this.create();
},b={
create:function(){
var e=this,t=$.parseHTML(wx.T(l,{
scene:e.scene,
token:wx.data.t
}));
e.dialog&&e.dialog.popup("remove"),e.dialog=$(t[0]).popup({
title:"选择视频",
className:"dialog_select_video",
width:960,
onOK:function(){
var t=this,o=e.$dom.find(".js_top.selected").data("id"),d=e.$dom.find(".Js_videomsg.selected").data("opt")||e.$dom.find(".Js_videomsg.selected").parent().data("opt"),n=e.$dom.find(".js_video_txurl").val();
if(o&&d&&1==d.is_new_video&&3!=d.status)return s.err("该视频目前无法被选择，请选择其它视频"),!0;
if(o&&d&&0==d.is_new_video&&(0!=d.is_new_video||!d.content_url))return s.err("该视频转码未完成，请选择其它视频"),
!0;
if(o){
if(!d)return s.err("请选择视频"),!0;
if(e.onOK&&!e.onOK(o,d))return!0;
t.remove(),e.dialog=null;
}else{
if(!n)return s.err("请输入视频网址"),!0;
if(-1==n.indexOf("v.qq.com/"))return s.err("请输入腾讯视频网址"),!0;
var a=!1;
if(i(n,function(i,d){
if(0==i.indexOf("http://v.qq.com/")||0==i.indexOf("https://v.qq.com/")){
var n=i.match(/[\?&]vid\=([^&]*)/);
if(null!=n&&n[1]){
var m=n[1],r=e.$dom.find(".js_btn");
m?(r.attr("disabled",!0),$.ajax({
url:wx.url("/cgi-bin/registertopic?id="+m+"&type=2"),
type:"post",
dataType:"json",
success:function(n){
n&&n.base_resp&&0==n.base_resp.ret?(d=$.extend({
url:i
},d),e.onOK&&e.onOK(o,d),t.remove(),e.dialog=null):s.err("系统繁忙，请稍后再试");
},
error:function(){
s.err("系统繁忙，请稍后再试");
},
complete:function(){
r.attr("disabled",!1);
}
})):s.err("无效视频地址");
}else s.err("无效视频地址");
a=!0;
}
return a?!0:(d=$.extend({
url:i
},d),e.onOK&&e.onOK(o,d),t.remove(),void(e.dialog=null));
},{
width:500,
height:375,
align:"none"
}),a)return!0;
}
},
onCancel:function(){
this.remove(),e.dialog=null;
},
onHide:function(){
this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init(),e.dialog.popup("resetPosition");
},
init:function(){
var e=this,i=e.can_use_shortvideo?[{
name:"小视频",
id:_
}]:[];
"ueditor"==e.scene?(f=1,i.unshift({
name:"视频网址"
}),e.initTencentVideo()):(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10)),"ueditor"==e.scene&&1==e.can_use_txvideo?(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10),e.$dom.find(".js_video_tencent").hide()):$(".js_video_status").find(".frm_tips").html("支持腾讯视频"),
e.tab=new n(e.$dom.find(".js_videotab"),i),e.tab.selected(0),e.tab.dom.find("a").on("click",function(e){
e.preventDefault();
}),e.$dom.on("click",".js_top",function(){
var i=$(this).data("id");
e.$dom.find(".js_video_status").hide(),e.$dom.find(".js_video_create").hide(),e.$dom.find(".js_pagebar").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),i?(i==v&&e.$dom.find(".js_video_create").show(),
e.getList(i,0,10)):e.$dom.find(".js_video_tencent").show(),e.tab.selected($(this).data("index"));
}),e.$dom.on("click",".Js_videomsg",function(){
e.$dom.find(".Js_videomsg.selected").removeClass("selected"),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
$(this).addClass("selected");
}),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),e.$dom.on("mousewheel","#js_videomsg_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll","#js_videomsg_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initTencentVideo:function(){
var e=this;
e.$dom.find(".js_video_loading").hide(),e.$dom.find(".js_video_tencent").show(),
e.$dom.find(".js_video_txurl").on("input propertychange",function(){
var t=$(this).val();
t?(e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),i(t,function(i){
var t="<iframe height="+w+" width="+g+' frameborder=0 src="'+i+'" allowfullscreen></iframe>';
e.$dom.find(".js_video_preview").html(t),e.dialog.popup("resetPosition");
},{
width:g,
height:w
})):e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled");
});
},
initPagebar:function(e,i,t){
var o=this,d=e/i+1;
return i>=t?void o.$dom.find(".js_pagebar").hide():void new m({
container:o.$dom.find(".js_pagebar").show(),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:d,
totalItemsNum:t,
callback:function(t){
var n=t.currentPage,s=o.$dom.find(".js_top.selected").data("id");
n!=d&&s&&(e=i*--n,o.getList(s,e,i));
}
});
},
getList:function(e,i,t){
var o=this,d=e==v?c.appmsg:c;
o.$dom.find(".js_video_content").hide(),o.$dom.find(".js_video_loading").show(),
d.getList(e,i,t,function(d){
if(o.dialog&&e==o.$dom.find(".js_top.selected").data("id")){
var n=d.file_item||d.item,s=o.$dom.find("#js_videomsg_list").find(".inner").empty();
n.length?(n.each(function(e,i){
var t=s.eq(i%2),o=$('<div id="appmsg%s"></div>'.sprintf(e.app_id||e.file_id),t).appendTo(t);
u(o,e);
}),o.$dom.find(".js_video_content").show(),o.dialog.popup("resetPosition")):o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e==_?"暂无素材<br />（素材来源：通过微信用户上传给公众帐号）":"暂无素材"),
o.$dom.find(".js_video_loading").hide(),o.initPagebar(i,t,d.file_cnt[h[e]]||d.file_cnt.video_cnt);
}
},"",f);
}
};
return $.extend(j.prototype,b),j;
});define("common/wx/media/imageDialog.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/pagebar.js","biz_web/utils/upload.js","tpl/media/dialog/image_layout.html.js","tpl/media/dialog/image_list.html.js","tpl/media/dialog/image_group.html.js","page/media/dialog_img_pick.css"],function(e){
"use strict";
var i=e("common/wx/Cgi.js"),t=e("common/wx/Tips.js"),n=(e("common/wx/popup.js"),
e("common/wx/pagebar.js")),o=e("biz_web/utils/upload.js"),a=e("tpl/media/dialog/image_layout.html.js"),r=e("tpl/media/dialog/image_list.html.js"),l=e("tpl/media/dialog/image_group.html.js"),s=(template.render,
template.compile(l)),d=template.compile(r);
e("page/media/dialog_img_pick.css");
var g=function(e){
return new p(e);
},p=function(e){
this.options=e,this.events=[],this.imgArr=[],this.converting=0,this.fromUpload=[],
c.init.call(this);
},c={
init:function(){
var e=this,i=e.options=$.extend(!0,{
tpl:a,
title:"选择图片",
scene:"cdn",
maxSelect:1,
perPage:10,
group:1,
onOK:null,
onCancel:null
},e.options);
i.tpl=template.compile(i.tpl)(i),e.on("ok",i.onOK),e.on("cancel",i.onCancel),e.on("hide",i.onHide),
e.dialog=$(i.tpl.trim()).popup({
title:i.title,
className:"img_dialog_wrp",
width:846,
buttons:[{
text:"确定",
type:"disabled",
click:function(){
var n=this.get().find(".js_btn").eq(0).parent();
return n.hasClass("btn_disabled")?void t.err("请选择图片"):(e.popup=this,$.each(e.imgArr,function(i,t){
t.source=-1!=e.fromUpload.indexOf(t.file_id+"")?"upload":"lib";
}),void("cdn"==i.scene&&e.converting>0?(n.btn(!1),e.on("converted",function(){
0==e.converting&&(e.trigger("ok",e.imgArr||[]),n.btn(!0));
})):e.trigger("ok",e.imgArr||[])));
}
},{
text:"取消",
click:function(){
e.trigger("cancel"),this.hide();
}
}],
onHide:function(){
e.trigger("hide");
}
}),e.dialog.popup("get").find(".js_loading").show(),u.getImagesByGroupId({
group_id:i.group,
count:i.perPage
},function(t){
if(e.dialog){
var n=t.page_info;
n.scene=i.scene,n.group=i.group;
var o=e.dialog.popup("get"),a=s(n);
o.find(".js_loading").hide(),o.find(".js_group").append(a).find(".js_total").text("(%s)".sprintf(n.file_cnt.img_cnt)),
c.renderImageList(o.find(".js_list"),n,e.imgArr),c.initEvent.call(e,t),c.initPageBar.call(e,n,i.group),
e.dialog.popup("resetPosition");
}
}),c.initUpload.call(e,i.group);
},
initEvent:function(){
var e=this,i=e.dialog.popup("get"),n=e.options;
i.on("click",".js_imageitem",function(){
var o,a=$(this),r=a.find("label"),l=i.find(".js_btn_p").eq(0),s=a.data("url"),d=a.data("id"),g=a.data("format");
r.hasClass("selected")?(s||e.converting--,r.removeClass("selected"),o=m.indexOf(e.imgArr,d),
o>=0&&e.imgArr.splice(o,1),i.find(".js_selected").text(e.imgArr.length)):1==n.maxSelect?(s||(e.converting=1),
r.addClass("selected"),a.siblings().find("label").removeClass("selected"),e.imgArr=[{
url:s,
file_id:d,
format:g
}],i.find(".js_selected").text(e.imgArr.length)):n.maxSelect>e.imgArr.length?(s||e.converting++,
r.addClass("selected"),e.imgArr.push({
url:s,
file_id:d,
format:g
}),i.find(".js_selected").text(e.imgArr.length)):t.err("最多可选%s张".sprintf(n.maxSelect)),
e.imgArr.length>0?l.enable().addClass("btn_primary"):l.disable(),"cdn"==n.scene&&r.hasClass("selected")&&!s&&u.getCdnUrlByFileId({
file_id:d,
group_id:i.find(".js_groupitem.selected").data("groupid")
},function(i){
0==i.errcode?(e.converting--,a.data("url",i.url),o=m.indexOf(e.imgArr,d),o>=0&&(e.imgArr[o].url=i.url),
e.trigger("converted")):(t.err("转存失败"),a.click());
});
}),i.on("click",".js_groupitem",function(t,o){
var a=$(this),r=i.find(".js_list"),l=i.find(".js_loading"),s=i.find(".js_pagebar"),d=a.data("groupid");
a.hasClass("selected")||(a.addClass("selected").siblings(".selected").removeClass("selected"),
$("#js_imageupload").data("groupid",d),r.hide(),s.hide(),l.show(),u.getImagesByGroupId({
group_id:d,
count:n.perPage
},function(t){
if(e.dialog&&d==i.find(".js_groupitem.selected").data("groupid")){
t=t.page_info,t.scene=n.scene,l.hide(),s.show(),c.renderImageList(r,t,e.imgArr),
c.initPageBar.call(e,t,d),c.initUpload.call(e);
for(var a=0;o&&"upload"==o.source&&a<o.count;++a)r.children().eq(a).click();
}
}));
});
},
initPageBar:function(e,i){
var t=this,o=t.dialog.popup("get"),a=t.options;
c.pagebar&&c.pagebar.destroy();
var r=0;
return 0==i?r=e.file_cnt.img_cnt:e.file_group_list.file_group.each(function(e){
e.id==i&&(r=e.count);
}),a.perPage>=r?void o.find(".js_pagebar").empty():void(c.pagebar=new n({
container:o.find(".js_pagebar"),
perPage:a.perPage,
initShowPage:1,
totalItemsNum:r,
first:!1,
last:!1,
isSimple:!0,
callback:function(e){
var i=o.find(".js_groupitem.selected").data("groupid"),n=o.find(".js_list"),r=o.find(".js_loading"),l=o.find(".js_pagebar");
n.hide(),l.hide(),r.show(),u.getImagesByGroupId({
group_id:i,
begin:e.perPage*(e.currentPage-1),
count:a.perPage
},function(e){
e=e.page_info,e.scene=a.scene,r.hide(),l.show(),c.renderImageList(n,e,t.imgArr);
});
}
}));
},
initUpload:function(e){
var i=this,n=i.dialog.popup("get"),a=n.find(".js_imageupload"),r="js_imageupload"+Math.random().toString().substr(2),l=n.find(".js_groupitem.selected").data("groupid")||e||1,s=i.options;
a.attr("id",r).off().children().remove(),o.uploadImageLibFile({
container:"#"+r,
multi:!0,
type:2,
doublewrite:!0,
groupid:l,
onComplete:function(e,n,o,a){
0==a.base_resp.ret&&t.suc("上传成功"),i.fromUpload.push(a.content);
},
onAllComplete:function(e,i){
var t,o=n.find(".js_groupitem.selected");
i.filesUploaded>0&&(t=+o.find("span").text(),!s.doselected||s.doselected&&i.filesUploaded<=1*s.completeUploadMinSelectNum?o.removeClass("selected").trigger("click",{
source:"upload",
count:i.filesUploaded
}):o.removeClass("selected").trigger("click",{
source:"upload",
count:0
}),o.find("span").text(t+i.filesUploaded));
},
showError:!0
});
},
renderImageList:function(e,i,t){
i.file_item.each(function(e){
e.img_url=wx.url("/cgi-bin/getimgdata?mode=small&source=file&fileId=%s".sprintf(e.file_id)),
-1!=m.indexOf(t,e.file_id)&&(e.selected=1);
}),e.html(d(i)).show();
}
},u={
getImagesByGroupId:function(e,t){
e=$.extend({
group_id:1,
begin:0,
count:8,
type:2
},e),i.get({
url:wx.url("/cgi-bin/filepage"),
data:e,
mask:!1
},function(e){
0!=e.base_resp.ret?i.show(e):t(e);
});
},
getCdnUrlByFileId:function(e,t){
e.group_id=e.group_id||1,i.post({
url:wx.url("/cgi-bin/uploadimg2cdn?action=duplicate"),
data:e,
mask:!1
},function(e){
t(e);
});
}
},m={
indexOf:function(e,i){
for(var t=0,n=e.length;n>t;++t)if(e[t].file_id==i)return t;
return-1;
}
},f={
on:function(e,i){
if(i){
var t=this.events;
return t[e]=t[e]||[],t[e].push(i),this;
}
},
trigger:function(e){
var i=this,t=arguments,n=i.events[e];
return n?($.each(n,function(e,n){
n.apply(i,Array.prototype.slice.call(t,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
this.dialog.popup("remove"),this.dialog=null;
}
};
return $.extend(p.prototype,f),g;
});define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage;
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});