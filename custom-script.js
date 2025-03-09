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
document.addEventListener("DOMContentLoaded", function () {
    // Отключаем задержку перед отображением слайда
    setTimeout(() => {
        const stageArea = document.querySelector(".stageArea"); // или #stageArea
        if (stageArea) {
            stageArea.style.opacity = "1"; // Делаем слайды видимыми сразу
        }
    }, 50); // Меняем 500 мс на 50 мс (можно на 0)
});

