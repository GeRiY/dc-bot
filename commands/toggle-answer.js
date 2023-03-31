export default {
  options: {
    name: 'toggle-answer',
    description: 'Ha ez be van kapcsolva akkor ha a !-jellel kezded az üzenetet akkor vissza írja válaszul hogy "ok."'
  },
  run: (bot) => {
    bot.answerEnabled = !bot.answerEnabled;
    return bot.answerEnabled ? 'A Bot most már válaszolhat..' : 'A Bot nem fog válaszolni az üzenetekre..';
  }
}