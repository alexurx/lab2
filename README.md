### Файл `index.html:
```html
<!doctype html>
<html lang="ru">
<head>
   <meta charset="UTF-8">
   <meta name="viewport"
         content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Activity for Captain Smith</title>
</head>
<body>
<h1>Hey, Captain Smith, you can:</h1>
<i id="activity"></i>
<script type="module" src="src/index.js"></script>
</body>
</html>
```

### Файл `index.js`:
```javascript
/**  
 * Импорт функции getRandomActivity из файла activity.js */import { getRandomActivity } from './activity.js';  
  
/**  
 * Функция для обновления активности на странице * @param {string} activity - новая активность для отображения  
 */function updateActivity(activity) {  
    const activityElement = document.getElementById('activity');  
    activityElement.textContent = activity;  
}  
  
/**  
 * Функция для получения новой активности и обновления страницы */async function refreshActivity() {  
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
```

### Файл `activity.js`:
```javascript
/**  
 * Функция для получения случайной активности с сервера * @returns {Promise<string>} Promise, который разрешается в строку с активностью  
 */export async function getRandomActivity() {  
    try {  
        const response = await fetch('https://www.boredapi.com/api/activity/');  
        const data = await response.json();  
        return data.activity;  
    } catch (error) {  
        console.error(error);  
        throw error;  
    }  
}
```

### Ответы на контрольные вопросы:
1. Функция `fetch` возвращает **Promise**, который в конечном итоге разрешается в объект `Response`.
2. **Promise** - это объект, представляющий завершение (или неудачу) асинхронной операции и её результат.
3. У объекта **Promise** доступны методы `.then()`, `.catch()` и `.finally()`.

**Различия между async/await и Promise:**

- `async/await` позволяет писать асинхронный код, который выглядит как синхронный, что упрощает понимание и отладку.
- `Promise` использует цепочки `.then()` и `.catch()` для обработки асинхронных операций, что может привести к “callback hell” при сложных операциях.

Для документирования кода используйте JSDoc комментарии перед каждой функцией, описывая параметры, возвращаемое значение и назначение функции.

