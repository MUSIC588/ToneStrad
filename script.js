
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        const note = e.target.getAttribute('data-note');
        document.getElementById('info').innerText = `You clicked on note: ${note}`;
    });
});