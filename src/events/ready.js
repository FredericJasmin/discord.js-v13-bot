const client = require(`${process.cwd()}/index.js`);

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);