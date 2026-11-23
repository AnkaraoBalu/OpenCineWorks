import { app, BrowserWindow } from 'electron';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
mkdirSync('artifacts', { recursive: true });
app.setPath('userData', resolve('artifacts/browser-profile'));
app.whenReady().then(async () => {
const win = new BrowserWindow({ width: 1440, height: 1000, show: false, webPreferences: { backgroundThrottling: false } });
try {
 await win.loadURL('http://127.0.0.1:3010/donations/');
 const run = code => win.webContents.executeJavaScript(code, true);
 for(let i=0;i<100;i++) { if(await run('!!document.querySelector("#donation-amount")')) break; await new Promise(r=>setTimeout(r,100)); }
 await new Promise(r=>setTimeout(r,1500));
 assert.equal(await run('/nakkacut/i.test(document.body.innerText)'), false);
 assert.equal(await run('document.documentElement.scrollWidth > innerWidth'), false);
 await run('[...document.querySelectorAll("button")].find(el=>el.textContent.includes("Preview")).click()');
 assert.equal(await run('document.querySelector("dialog").open'), true);
 assert.ok(await run('document.querySelector("dialog").textContent.includes("No payment has been taken")'));
 await run('document.querySelector("dialog").close()');
 win.showInactive(); await new Promise(r=>setTimeout(r,400));
 writeFileSync('artifacts/donations-desktop.png', (await win.webContents.capturePage()).toPNG());
 win.setSize(390,844); await new Promise(r=>setTimeout(r,400));
 assert.equal(await run('document.documentElement.scrollWidth > innerWidth'), false);
 writeFileSync('artifacts/donations-mobile.png', (await win.webContents.capturePage()).toPNG());
 console.log('PASS branding, donation demo dialog, desktop and mobile overflow');
 app.exit(0);
} catch(error) { console.error(error); app.exit(1); }

});
