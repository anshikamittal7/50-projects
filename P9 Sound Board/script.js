const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const conatiner = document.querySelector('.container');
sounds.forEach(sound => {

    const audio = document.createElement('audio');
    audio.src = `https://50projects50days.com/projects/sound-board/sounds/${sound}.mp3`;
    conatiner.appendChild(audio);
    const btn = document.createElement('button');
    btn.innerText = sound;
    conatiner.appendChild(btn)

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