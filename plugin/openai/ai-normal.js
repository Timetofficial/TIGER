const axios = require("axios");
const { G4F } = require("g4f");
let g4f = new G4F();
require("../../config");

module.exports = {
    type: 'openai',
    command: ['ai', 'chatgpt'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reply } = context;
        if (!q) return reply(`*Example*:\n${prefix + command} Hello 𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁2 User?`);
        
        async function chat(prompt) {
            const messages = [
                { role: "system", content: `you are good component` },
                { role: "assistant", content: ` ` },
                { role: "user", content: prompt }
            ];
            let res = await g4f.chatCompletion(messages);
            return res;
        }

        try {
            await m.reply(mess.wait);
            let response = await chat(q);
            await /*tdx.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    externalAdReply: {
                        title: "Trash-GpT",
                        body: "Trash-GpT",
                        thumbnailUrl: 'https://i.imgur.com/tUqZbZd.jpeg',
                        thumbnail: { url: 'https://i.imgur.com/tUqZbZd.jpeg' },
                        sourceUrl: 'https://lol.zeroexecution.ml/zero-xv',
                        previewType: "VIDEO",
                        showAdAttribution: true,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });*/
            reply(response)
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
        }
    }
};
