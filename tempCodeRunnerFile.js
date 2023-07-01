try {
  bot.start((ctx) => ctx.reply("Welcome to Sanket's Algo bot")); // /start

  bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString)); // /binarysearch

  bot.command("toplinuxcommands", (ctx) => ctx.reply("ls cd pwd grep rm"));

  bot.on("sticker", (ctx) => ctx.reply("❤️"));

  bot.command("binarytreejs", async (ctx) => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js"
    );
    ctx.reply(response.data);
  });

  // bot.command('quit', async (ctx) => {
  //     // Explicit usage
  //     await ctx.telegram.leaveChat(ctx.message.chat.id);

  //     // Using context shortcut
  //     await ctx.leaveChat();
  // });

  bot.on("text", (ctx) => {
    console.log(ctx.update.message);
    if (ctx.update.message.text == "I love you") {
      ctx.reply("love you too broo");
    } else {
      ctx.reply("i don't understand humans");
    }
  });
  bot.launch();
} catch {
  console.log("unexpected command");
}