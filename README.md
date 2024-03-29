# SkyVito

Сайт объявлений, где пользователи могут зарегистрироваться, просматривать объявления, добавлять свои объявления и оставлять комментарии.

## Особенности

### Для незарегистрированных пользователей:

- Возможность поиска товаров по ключевым словам
- Просмотр объявления
- Просмотр профиля продавца
- Возможность просматривать комментарии
- Возможность получать номер телефона продавца

### Для зарегистрированных пользователей (дополнительно):

- Смена имени, фамилии, города, телефона, аватарки
- Добавление объявления c фото и без фото
- Возможность снять объявление с публикации
- Редактирование объявления. добавлять и удалять фото к объявлению
- Добавление отзывов о товаре

## Требования

- Docker

## Установка и Запуск Бэкенда

1. Установите Docker, следуя инструкциям для вашей операционной системы.
2. Запустите Docker с помощью ярлыка.
3. Откройте терминал и перейдите в папку back-skyVito.
4. Выполните в терминале команду: `docker-compose -f docker-compose-backend.yaml up -d`
5. После первого выполнения команды все образы подтянутся, но могут не запуститься, в этом случае повторно выполните команду: `docker-compose -f docker-compose-backend.yaml up -d`
6. После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/

## Остановка бэкенда

Чтобы остановить работу бэкенда, выполните: `docker-compose -f docker-compose-backend.yaml down`

## Запуск приложения

1. **Клонирование репозитория:**
    ```bash
    git clone https://github.com/MaratRizatdinov/Graduation_project.git
    ```

2. **Переход в каталог проекта:**
    ```bash
    cd Graduation_project
    ```

3. **Установка зависимостей :**
    ```bash
    npm install
    ```

4. **Запуск приложения:**
    ```bash
    npm start
    ```

5. **Локальный сервер:**
    После выполнения команды `npm start`, приложение будет доступно по адресу [http://localhost:3000/](http://localhost:3000/).

Убедитесь, что у вас установлен Node.js и npm на вашем компьютере. Если нет, вы можете скачать их с [официального сайта Node.js](https://nodejs.org/).

Если у вас возникнут вопросы или проблемы, не стесняйтесь задавать.



## Использованные библиотеки

В проекте были использованы следующие библиотеки:

- **React**: JavaScript-библиотека для создания пользовательских интерфейсов.
- **Redux**: Библиотека для управления состоянием приложения в React.
- **styled-components**: Библиотека для стилизации компонентов с использованием CSS внутри JavaScript.
- **RTK Query**: Библиотека для управления запросами к API и управления состоянием в Redux.
- **React Router**: Библиотека для навигации между компонентами React в приложении.
- **Docker**: Платформа для разработки, доставки и выполнения приложений в контейнерах.
- **Swagger**: Инструмент для документирования и тестирования API.
- **date-fns**: Библиотека для работы с датами в JavaScript.

## Демо

1. [Демонстрация действий неавторизованного пользователя](src/gifs/Demo-unAuthorUser.gif)
2. [Демонстрация процесса регистрации](src/gifs/Demo-Registration.gif)
3. [Смена профиля и аватарки зарегистрированного пользователя](src/gifs/Demo-UpdateUserInfo.gif)
4. [Добавление объявления](src/gifs/Demo-AddAdv.gif)
5. [Редактирование объявления и добавление/удаление фотографий](src/gifs/Demo-UpdateAdv.gif)
6. [Добавление комментария](src/gifs/Demo-AddComment.gif)

