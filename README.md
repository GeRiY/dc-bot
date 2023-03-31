# Nodejs Bot

## package.json
```javascript
{
"dotenv": "^16.0.3",
"discord.js": "^14.8.0"
}
```
## Dokumentációk amiket használtam
- [Discord.js.org](https://discord.js.org/#/docs/main/stable/general/welcome)

## Telepítés lépések
Regisztáld és hozd létre a botod a szerverre ezen a linken: https://discord.com/developers/applications

1. Klónozd a repot: https://github.com/GeRiY/dc-bot.git
2. Futtasd meg: `npm install`
3. Csinálj egy `.env` fájlt a `.env-example` fájból
4. Töltsd ki a `.env` fájlban a kért adatokat.
5. Az oldalon https://discord.com/developers/applications a kiválasztott `BOT`-nál az `OAuth2` oldalsó menüpontban
   a `Scops`-nál ki kell jelölni a `Bot`-ot és a kapott `Link`-et meg kell hívni majd ott be kell állítani hogy
   melyik szerverre regisztrálja be a `Bot`-ot.
6. Futtasd a programot: `npm run dev`
7. Használd a Bot-ot a `.env`-ben megadott szerveren.

## Kért adatok beszerzése
### `.env` fájlban a 
- `TOKEN` értékét az oldalon https://discord.com/developers/applications 
  bejelentkezés után a kiválasztott vagy létrehozott Aplikációt megnyitva a `Bot` nevű oldalsó menüpontban találod meg.
  Ott tudsz neki generálni majd `Copy`-val kimásolni.
- `CLIENT_ID

## Parancsok:
- `/ping` üzenet
- `/ping-embed` formátozz üzenet
- `/toggle-answer` Ha ez be van kapcsolva akkor ha a `!`-jellel kezded az üzenetet akkor vissza írja válaszul hogy __ok.__

## Kérdés, megjegyzés esetén
- mgeri1993@gmail.com
