/**
 * Импорт функции getRandomActivity из файла activity.js
 */
import { getRandomActivity } from './activity.js';

/**
 * Функция для обновления активности на странице
 * @param {string} activity - новая активность для отображения
 */
function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activity;
}

/**
 * Функция для получения новой активности и обновления страницы
 */
async function refreshActivity() {
    try {
        const activity = await getRandomActivity();
        updateActivity(activity);
    } catch (error) {
        console.error(error);
        updateActivity('К сожалению, произошла ошибка');
    }
}

// Обновление активности каждую минуту
setInterval(refreshActivity, 60000);

// Вызываем функцию updateActivity при первой загрузке страницы
refreshActivity();
