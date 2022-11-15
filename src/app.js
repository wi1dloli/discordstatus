const clientId = '1041937897160458260';
const DiscordRPC = require('discord-rpc')
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);
async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Testing Presence`,
        state: `Playing with Ur Mom`,
        startTimestamp: Date.now(),
        largeImageKey: 'f02b2194dab1ee0b',
        largeImageText: `f02b2194dab1ee0b`,
        smallImageKey: `f02b2194dab1ee0b`,
        smallImageText: `Small Icon`,
        instance: false,
        buttons: [
            {
                label: `AHHHHHHHHHHHHHHHH`,
                url: `https://discord.com/channels/@me/1013455555702050897/1022353058992242759`,
            },
            {
                label: `idk`,
                url: `https://cdn.discordapp.com/attachments/1013455555702050897/1013458217478651904/f12679e09cf41f55de885349cb8453d1523c807f_hq.jpg`,
            }
        ]
    })
}

RPC.on('ready', async() => {
    setActivity();

    setInterval(() => {
        setActivity();
    },15 * 1000);
});
RPC.login({ clientId }).catch(err => console.error(err))