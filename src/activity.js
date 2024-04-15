/**
 * Функция для получения случайной активности с сервера
 * @returns {Promise<string>} Promise, который разрешается в строку с активностью
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
