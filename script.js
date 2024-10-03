// Link tıklama olayı
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', (event) => {
        // Doğrudan hedef URL'ye yönlendir
        window.location.href = button.getAttribute('href');
    });
});
