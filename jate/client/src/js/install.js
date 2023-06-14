const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();

    //store the triggered events
    window.deferredPrompt = event;

    //remove the hidden class from the butoom
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    //console.log(promptEvent)
    if (!promptEvent) {
        return;
    }

    //show prompt
    promptEvent.prompt();

    //reset the deferred prompt varible
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    //claer prompt
    console.log('install hit')
    window.deferredPrompt = null;
});
