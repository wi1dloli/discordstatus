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
                url: `https://web.archive.org/web/20180313151740/http://n41050z.web.fc2.com/burakura.html`,
            },
            {
                label: `idk`,
                url: `https://wi1dloli.github.io/`,
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