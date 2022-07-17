const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
sounds.forEach(sound => {

    const audio = document.createElement('audio');
    audio.src = `https://50projects50days.com/projects/sound-board/sounds/${sound}.mp3`;
    document.body.appendChild(audio);
    const btn = document.createElement('button');
    btn.innerText = sound;
    document.body.appendChild(btn)

    btn.addEventListener('click', () => {
        stop();
        audio.play();
    })
})
const allAudios = document.querySelectorAll('audio');
function stop() {
    allAudios.forEach(audio => {
        audio.pause();
    })
}