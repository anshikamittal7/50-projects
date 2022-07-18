window.addEventListener('keydown', (event) => {
    document.body.innerHTML = `
    <span>
        <small>event.key</small>
        <div class="key">${event.key === ' ' ? 'Space' : event.key}</div>
    </span>

    <span>
        <small>event.keyCode</small>
        <div class="key">${event.keyCode}</div>
    </span>

    <span>
        <small>event.code</small>
        <div class="key">${event.code}</div>
    </span>`
})