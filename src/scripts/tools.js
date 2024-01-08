import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useSelector } from 'react-redux'



// ----------------------------------Вспомогательные функции приложения--------------------------------------------------

// 1. Функция проверяет наличие изображения в получаемых данных и возвращает url изображения

export const getUrl = (elem) => {
  if (elem.images.length !== 0)
    return `url("http://localhost:8090/${elem.images[0].url}")`
  return 'none'
}

// 2. Функция редактирует полученную цену в нужный формат

export const editPrice = (elem) => {
  return elem.price.toLocaleString('ru-RU') + ' ₽'
}

// 3. Функция редактирует дату - получаем фразу сколько времени прошло с момента публикации

export const editDate = (elem) => {
  let date =new Date(elem.created_on).getTime()
  let correctDate =new Date (date +10800000)    
  let formatdate =  formatDistanceToNow(correctDate, { locale: ru }) + ' назад'
  return formatdate
  
}

// 4. Функция создает текст с количеством отзывов

export const editWordEnd = (num = 0) => {
  if (num > 4 && num < 21) return num + ' отзывов'
  if ((num + 20) % 10 === 1) return num + ' отзыв'
  if ((num + 20) % 10 === 2 || (num + 20) % 10 === 3 || (num + 20) % 10 === 4)
    return num + ' отзыва'
  return num + ' отзывов'
}

// 5. Функция проводит локальную валидацию данных при регистрации и авторизации. Возвращает текст ошибки

export const checkData = ({ email, password, repeat, isLoginMode }) => {
  if (email.trim() === '') {
    return 'Поле Email не заполнено'
  }
  if (password.trim() === '') {
    return 'Поле password не заполнено'
  }
  if (!isLoginMode && password != repeat) {
    return 'Неправильно введен повторный пароль'
  }
  return
}

// 6. Маска для телефонного номера

export const maskPhone = (str) => {
  if (!str || str.length < 9) return
  return str.slice(0, str.length - 9).trim() + ' XXX XX XX'
}
// 7. Создаем строку вывода даты начала продаж и дату комментария

export const createTextSellsFrom = (date) => {
  const data = new Date(date)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return String(data.toLocaleString('ru', options)).slice(2)
}

export const createCommentDate = (date) => {
  const data = new Date(date)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return String(data.toLocaleString('ru', options))
}


// 8. Быстрое получение cостояния авторизации на сайте

export const getAuthorization = () => {
  const isAuthUser = useSelector((state) => state.user.authorization)
  return isAuthUser
}

