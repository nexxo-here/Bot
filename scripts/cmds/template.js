const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const templateImages = {
  1: "https://i.postimg.cc/tTrHHZTd/pixelcut-export-4.png",
  2: "https://i.ibb.co/FqkwM6P/image.jpg",
  3: "https://i.ibb.co/KNVxy3V/The-12-Best-Free-Internet-Phone-Calls-Apps-of-2024.jpg",
  4: "https://i.ibb.co/wwqmZCg/photo-editing.jpg",
  5: "https://i.ibb.co/fGhJ3bs/download-3.jpg",
  6: "https://i.ibb.co/TTHypc5/Brown-creative-birthday-story-idia-for-intragram.jpg",
  7: "https://i.ibb.co/ssBsLbH/Black-creative-birthday-story-idia-for-intragram.jpg",
  8: "https://i.ibb.co/86S319c/overlay.jpg",
  9: "https://i.ibb.co/G3F93fY/4-4.jpg",
  10: "https://i.ibb.co/VgLdttW/download-6.jpg",
  11: "https://i.ibb.co/j360Ddp/layout-1.jpg",
  12: "https://i.ibb.co/tQmVWVc/download-7.jpg",
  13: "https://i.ibb.co/cxzZShg/instagramtemplate-ig-storytemplate.jpg",
  14: "https://i.ibb.co/j6Hcjt1/Template-Qris-Anime.jpg",
  15: "https://i.ibb.co/6Wj206D/Qu-500-follows-Y-u-t-t-c-c-c-c-u.jpg",
  16: "https://i.ibb.co/wp3HQCd/download-8.jpg",
  17: "https://i.ibb.co/BnPStDv/L-y-nh-follow.jpg",
  18: "https://i.ibb.co/pP54cfq/download-9.jpg",
  19: "https://i.ibb.co/KmD8VQK/download-10.jpg",
  20: "https://i.ibb.co/Kwg8hVs/Fram.jpg",
  21: "https://i.ibb.co/hRcdfRX/download-11.jpg",
  22: "https://i.ibb.co/W688hNB/E-T.jpg"
  
  
};


module.exports = {
  config: {
    name: "template",
    aliases: ["tmpl"],
    version: "1.0",
    author: "Vex_kshitiz",
    shortDescription: "Overlay  images on templates",
    longDescription: "ad your images on templates.",
    category: "image",
    guide: {
      en: "{p}template <1|2|3>\n\nTemplate 1."
    }
  },
  onStart: async function ({ message, event, args, api }) {
    try {
      if (event.type !== "message_reply") {
        return message.reply("Please reply to the image you want to overlay on the template.");
      }

      const attachment = event.messageReply.attachments;
      const templateNumber = parseInt(args[0]);

      if (isNaN(templateNumber) || ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18, 19, 20, 21, 22].includes(templateNumber)) {
        return message.reply("Invalid template number. Please choose from 1 - 22");
      }

      if (templateNumber === 1) {
        if (!attachment || attachment.length !== 1 || attachment[0].type !== "photo") {
          return message.reply("Please reply to one photo.");
        }

        const imageUrl = attachment[0].url;
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const userImage = await loadImage(response.data);
        const templateImage = await loadImage(templateImages[1]);

        const canvas = createCanvas(templateImage.width, templateImage.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(templateImage, 0, 0);

        const circleSize = 130; 
        const circleX = 335;
        const circleY = 300; 

        ctx.save();
        ctx.beginPath();
        ctx.arc(circleX + circleSize / 2, circleY + circleSize / 2, circleSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(userImage, circleX, circleY, circleSize, circleSize);
        ctx.restore();

        const cacheFolderPath = path.join(__dirname, 'cache');
        if (!fs.existsSync(cacheFolderPath)) {
          fs.mkdirSync(cacheFolderPath);
        }

        const imagePath = path.join(cacheFolderPath, `template1.png`);
        const out = fs.createWriteStream(imagePath);
        canvas.createPNGStream().pipe(out);
        out.on('finish', () => {
          message.reply({
            body: "",
            attachment: fs.createReadStream(imagePath)
          });
        });
      } else if (templateNumber === 2) {
        if (!attachment || attachment.length !== 2 || attachment.some(att => att.type !== "photo")) {
          return message.reply("Please reply to two photo.");
        }

        const responses = await Promise.all(attachment.map(att => axios.get(att.url, { responseType: 'arraybuffer' })));
        const userImages = await Promise.all(responses.map(res => loadImage(res.data)));
        const templateImage = await loadImage(templateImages[2]);

        const canvas = createCanvas(templateImage.width, templateImage.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(templateImage, 0, 0);

        const circleSize1 = 309; 
        const circleX1 = 255;
        const circleY1 = 378; 

        ctx.save();
        ctx.beginPath();
        ctx.arc(circleX1 + circleSize1 / 2, circleY1 + circleSize1 / 2, circleSize1 / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(userImages[0], circleX1, circleY1, circleSize1, circleSize1);
        ctx.restore();

        const circleSize2 = 207; 
        const circleX2 = 54; 
        const circleY2 = 34;

        ctx.save();
        ctx.beginPath();
        ctx.arc(circleX2 + circleSize2 / 2, circleY2 + ci
