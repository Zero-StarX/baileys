# WhatsApp Baileys

<div align="center">

✨ **YuchiiiTaka/Baileys** ✨  
*Modern WhatsApp Automation Library*

[![Version](https://img.shields.io/badge/version-1.0.2+-blue.svg)](https://github.com/Zero-StarX/baileys)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/Zero-StarX/baileys)

🚀 *Lightweight • Powerful • Feature-Rich* 🚀

</div>

---

## 🌟 About This Magical Library

**WhatsApp Baileys** is a super cool open-source library that lets developers build amazing WhatsApp automation solutions! ✨ Built with modern websocket technology (no browsers needed! 🎉), this library is packed with awesome features that make WhatsApp integration a breeze.

> 🎯 **Perfect for**: Chat bots, customer service automation, business tools, and creative WhatsApp projects!

---

## 💫 Why Choose YuchiiiTaka/Baileys?

| Feature | ✨ Magic |
|---------|----------|
| **Pairing** | Super stable custom pairing codes 🔐 |
| **Interactive Messages** | Buttons, menus, and cool UI elements 🎮 |
| **Multi-Device** | Works with WhatsApp's latest features 📱 |
| **Session Management** | Automatic and reliable sessions 🔄 |
| **Lightweight** | Fast and efficient performance ⚡ |

---

## 🎨 Super Cool Features

- 🎪 **Album Messages** - Send multiple images like a pro!
- 🎉 **Event Creation** - Create WhatsApp events with ease
- 📊 **Poll Results** - Show voting results beautifully
- 🎮 **Interactive Messages** - Buttons, copy actions, and more!
- 🛍️ **Product Messages** - Perfect for e-commerce
- 💰 **Payment Requests** - Secure payment messaging
- 📁 **Document Sharing** - Files with style!

---

## 🚀 Quick Start

### Installation
```bash
npm install @yuchiitaka/baileys
# or
yarn add @yuchiitaka/baileys
```

### Basic Setup
```javascript
import makeWASocket from '@yuchiitaka/baileys';

const sock = makeWASocket({
  // Your configuration here! ✨
});
```

---

## 🎪 SendMessage Magic Show!

### 🖼️ Album Message (Multiple Images)
```javascript
await sock.sendMessage(jid, { 
    albumMessage: [
        { image: cihuy, caption: "Foto pertama 🎨" },
        { image: { url: "URL IMAGE" }, caption: "Foto kedua ✨" }
    ] 
}, { quoted: m });
```

### 🎉 Event Message
```javascript
await sock.sendMessage(jid, { 
    eventMessage: { 
        isCanceled: false, 
        name: "Awesome Party! 🎊", 
        description: "Let's have fun! 🎪", 
        location: { 
            degreesLatitude: 0, 
            degreesLongitude: 0, 
            name: "Virtual World 🌍" 
        }, 
        joinLink: "https://call.whatsapp.com/video/awesome-party", 
        startTime: "1763019000", 
        endTime: "1763026200", 
        extraGuestsAllowed: false 
    } 
}, { quoted: m });
```

### 📊 Poll Result Message
```javascript
await sock.sendMessage(jid, { 
    pollResultMessage: { 
        name: "Favorite Color? 🌈", 
        pollVotes: [
            {
                optionName: "Blue 💙",
                optionVoteCount: "112233"
            },
            {
                optionName: "Red ❤️",
                optionVoteCount: "1"
            }
        ] 
    } 
}, { quoted: m });
```

### 🎮 Simple Interactive Message
```javascript
await sock.sendMessage(jid, {
    interactiveMessage: {
        header: "Hello World 👋",
        title: "Welcome to Magic! ✨",
        footer: "Made with ❤️",
        buttons: [
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Copy Magic Code 🎯",
                    id: "123456789",              
                    copy_code: "MAGIC123"
                })
            }
        ]
    }
}, { quoted: m });
```

### 🎪 Interactive Message with Native Flow
```javascript
await sock.sendMessage(jid, {    
    interactiveMessage: {      
        header: "Special Offer! 🎁",
        title: "Limited Time Magic ✨",      
        footer: "Don't miss out! 🚀",      
        image: { url: "https://example.com/image.jpg" },      
        nativeFlowMessage: {        
            messageParamsJson: JSON.stringify({          
                limited_time_offer: {            
                    text: "Grab it now! 🎯",            
                    url: "https://t.me/yumevtc",            
                    copy_code: "yume",            
                    expiration_time: Date.now() * 999          
                },          
                bottom_sheet: {            
                    in_thread_buttons_limit: 2,            
                    divider_indices: [1, 2, 3, 4, 5, 999],            
                    list_title: "Awesome Features 🎪",            
                    button_title: "Explore More 🚀"          
                },          
                tap_target_configuration: {            
                    title: " Tap Here 👆 ",            
                    description: "Discover magic! ✨",            
                    canonical_url: "https://t.me/yumevtc",            
                    domain: "shop.example.com",            
                    button_index: 0          
                }        
            }),        
            buttons: [          
                {            
                    name: "single_select",            
                    buttonParamsJson: JSON.stringify({              
                        has_multiple_buttons: true            
                    })          
                },          
                {            
                    name: "cta_copy",            
                    buttonParamsJson: JSON.stringify({              
                        display_text: "Copy Magic Code 🎯",              
                        id: "123456789",              
                        copy_code: "MAGIC123"            
                    })          
                }        
            ]      
        }    
    }  
}, { quoted: m });
```

### 🛍️ Product Message
```javascript
await sock.sendMessage(jid, {
    productMessage: {
        title: "Magic Product ✨",
        description: "This product will change your life! 🌟",
        thumbnail: { url: "https://example.com/image.jpg" },
        productId: "MAGIC001",
        retailerId: "RETAIL001",
        url: "https://example.com/product",
        body: "Super detailed description here! 📝",
        footer: "Special price for you! 💝",
        priceAmount1000: 50000,
        currencyCode: "USD",
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "Buy Now 🛒",
                    url: "https://example.com/buy"
                })
            }
        ]
    }
}, { quoted: m });
```

### 📁 Interactive Message with Document
```javascript
await sock.sendMessage(jid, {
    interactiveMessage: {
        header: "Important Document 📄",
        title: "Check this out! 👀",
        footer: "Made with ❤️",
        document: fs.readFileSync("./package.json"),
        mimetype: "application/pdf",
        fileName: "magic-document.pdf",
        jpegThumbnail: fs.readFileSync("./document.jpeg"),
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "Learn More 📚",
                    url: "https://t.me/yumevtc",
                    merchant_url: "https://t.me/yumevtc"
                })
            }
        ]
    }
}, { quoted: m });
```

### 💰 Request Payment Message
```javascript
let quotedType = m.quoted?.mtype || '';
let quotedContent = JSON.stringify({ [quotedType]: m.quoted }, null, 2);

await sock.sendMessage(jid, {
    requestPaymentMessage: {
        currency: "IDR",
        amount: 10000000,
        from: m.sender,
        sticker: JSON.parse(quotedContent),
        background: {
            id: "100",
            fileLength: "0",
            width: 1000,
            height: 1000,
            mimetype: "image/webp",
            placeholderArgb: 0xFF00FFFF,
            textArgb: 0xFFFFFFFF,     
            subtextArgb: 0xFFAA00FF   
        }
    }
}, { quoted: m });
```

---

## 🎯 Technical Superpowers

- 🔐 **Ultra-Secure Pairing** - Custom codes that just work!
- 🎨 **Rich Interactive Elements** - Buttons, menus, and more!
- ⚡ **Lightning Fast** - Optimized for performance
- 🔄 **Auto Session Management** - Set it and forget it!
- 📱 **Multi-Device Ready** - Works with WhatsApp Web
- 🛠️ **Easy Integration** - Simple and developer-friendly

---

## 🌈 Perfect For

- 🤖 **Chat Bots** - Smart and responsive
- 🏢 **Business Tools** - Professional automation
- 🎪 **Creative Projects** - Fun and interactive
- 🛍️ **E-commerce** - Product catalogs and payments
- 🎮 **Interactive Games** - Engaging experiences
- 📊 **Polling Systems** - Gather opinions easily

---

## 🚀 Getting Started is Easy!

1. **Install the package**
   ```bash
   npm install @yuchiitaka/baileys
   ```

2. **Check out examples**
   ```javascript
   // Explore the amazing examples above! ✨
   ```

3. **Build something magical!**
   ```javascript
   // Your creativity is the limit! 🌟
   ```

---

<div align="center">

## 🎊 Join the Magic!

**YuchiiiTaka/Baileys** - Where WhatsApp automation meets creativity and fun! ✨

*Build amazing things with confidence and style!* 🚀

**⭐ Star the repository if you love this project!** ⭐

---

Made with ❤️ and a sprinkle of magic ✨

</div>
