document.addEventListener("DOMContentLoaded", function () {
    // Убираем управление сразу после загрузки страницы
    function disableVideoControls() {
        document.querySelectorAll("video").forEach(video => {
            video.removeAttribute("controls"); // Убираем панель управления
            video.style.pointerEvents = "none";  // Запрещаем взаимодействие
            video.style.userSelect = "none";     // Запрещаем выделение
            video.style.touchAction = "none";    // Отключаем жесты на тач-устройствах
            video.setAttribute("tabindex", "-1"); // Убираем фокус с клавиатуры
        });
    }

    // Запускаем при загрузке страницы
    disableVideoControls();

    // Следим за изменениями в DOM (если Keynote заново вставит controls)
    const observer = new MutationObserver(disableVideoControls);
    observer.observe(document.body, { childList: true, subtree: true });
});
ddocument.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img, video").forEach(media => {
        if (!media.complete) {
            media.onload = () => console.log(`Загружено: ${media.src}`);
        }
    });
});


