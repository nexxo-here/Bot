module.exports = {
    config: {
        name: "autoreact",
        version: "1.0",
        author: "Itachiffx",
        countDown: 5,
        role: 0,
        shortDescription: "Automatically reacts to specific keywords in messages.",
        longDescription: "",
        category: "misc",
    },
    onStart: async function () {},
    onChat: async function ({ event, api }) {
        const message = event.body.toLowerCase();

        if (message.includes("iloveyou")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("good night")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("good morning")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("pakyo")) return api.setMessageReaction("🤬", event.messageID, (err) => {});
        if (message.includes("mahal")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("mwa")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("😢")) return api.setMessageReaction("😢", event.messageID, (err) => {});
        if (message.includes("😆")) return api.setMessageReaction("😆", event.messageID, (err) => {});
        if (message.includes("😂")) return api.setMessageReaction("😆", event.messageID, (err) => {});
        if (message.includes("🤣")) return api.setMessageReaction("😆", event.messageID, (err) => {});
        if (message.includes("tangina")) return api.setMessageReaction("😡", event.messageID, (err) => {});
        if (message.includes("good afternoon")) return api.setMessageReaction("❤", event.messageID, (err) => {});
        if (message.includes("good evening")) return api.setMessageReaction("💗", event.messageID, (err) => {});
        if (message.includes("machikne")) return api.setMessageReaction("😆", event.messageID, (err) => {});
        if (message.includes("gago")) return api.setMessageReaction("😡", event.messageID, (err) => {});
    }
};
