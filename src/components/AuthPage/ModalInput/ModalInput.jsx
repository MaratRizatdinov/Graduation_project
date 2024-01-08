import React from 'react'
import * as S from './ModalInput.style'
export const ModalInput = ({ field, value, setValue }) => {
  const attributes = {
    email: {
      type: 'text',
      name: 'login',
      placeholder: 'email',
    },
    name: {
      type: 'text',
      name: 'name',
      placeholder: 'Имя (необязательно)',
    },
    surname: {
        type: 'text',
        name: 'surname',
        placeholder: 'Фамилия (необязательно)',
      },
    city: {
        type: 'text',
        name: 'city',
        placeholder: 'Город (необязательно)',
      },  
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
    },
    repeat: {
        type: 'password',
        name: 'password',
        placeholder: 'Повторите пароль',
      },
  }
  return (
    <S.ModalInput
      type={attributes[field].type}
      name={attributes[field].name}
      placeholder={attributes[field].placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
