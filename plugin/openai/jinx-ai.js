const axios = require("axios");
const { G4F } = require("g4f");
let g4f = new G4F();
require("../../config");

module.exports = {
    type: 'openai',
    command: ['jinx-ai'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reply } = context;
        if (!q) return xreply(`*Example*:\n${prefix + command} Hello tiger?`);
        
        async function chat(prompt) {
            const messages = [
                { role: "system", content: `you are 𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁2` },
                { role: "assistant", content: `Hello Im 𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁2 the most powerful ai.` },
                { role: "user", content: prompt }
            ];
            let res = await g4f.chatCompletion(messages);
            return res;
        }

        try {
            await m.reply(mess.wait);
            let response = await chat(q);
            await sam.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    externalAdReply: {
                        title: "𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁2 - 2024",
                        body: "By-𝚻𝚮𝚵𝚵 𝐃𝚪𝚫𝐆𝚯𝚴",
                        thumbnailUrl: 'https://i.imgur.com/tUqZbZd.jpeg',
                        thumbnail: { url: 'https://i.imgur.com/tUqZbZd.jpeg' },
                        sourceUrl: 'https://i.imgur.com/tUqZbZd.jpeg',
                        previewType: "VIDEO",
                        showAdAttribution: true,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
        }
    }
};
