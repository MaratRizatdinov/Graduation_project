import React, { useEffect, useState, useRef } from 'react'
import * as S from './ModalAdv.style'
import { ModalSVG } from './ModalSVG'
import { useNavigate, useParams } from 'react-router-dom'
import small_logo from './logo-mob.svg'
import {
  useAddImgMutation,
  useDeleteImgMutation,
  useGetAdvQuery,
  useUpdateAdvMutation,
  useAddAdvMutation,
} from '../../redux/reducers/adsApi'
import { Footer } from '../Footer/footer'
import arrow from './Vector.svg'

export const ModalAdv = ({ modal, setModal, role }) => {
  const advId = useParams().id
  const inputRef = useRef(0)
  const navigate = useNavigate()

  const [deleteImg] = useDeleteImgMutation()
  const { data } = useGetAdvQuery(advId)
  const [addAdv] = useAddAdvMutation()
  const [addImg] = useAddImgMutation()
  const [updateAdv] = useUpdateAdvMutation()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [image, setImage] = useState([])
  const [dataImg, setDataImg] = useState([])
  const [focus, setFocus] = useState(false)

  const clickToexit = () => {
    setModal('unvisible')
    setTitle('')
    setDescription('')
    setPrice('')
    setImage([])
    setDataImg([])
    inputRef.current.value = ''
  }

  const handleClickToAdd = (e) => {
    e.preventDefault()
    const body = { title, description, price }
    role === 'newAdv'
      ? addAdv({ body })
          .unwrap()
          .then((fulfilled) => {
            const id = fulfilled.id
            const fileCount = image.length > 5 ? 5 : image.length
            for (let i = 0; i < fileCount; i++) {
              const body = new FormData()
              body.append('file', image[i])
              addImg({ id, body })
            }
          })
          .then(() => {
            setModal('unvisible')
            setTitle('')
            setDescription('')
            setPrice('')
            setImage([])
            setDataImg([])
            inputRef.current.value = []
          })
      : updateAdv({ id: advId, body })
          .then(() => {
            const fileCount = image.length > 5 ? 5 : image.length
            for (let i = 0; i < fileCount; i++) {
              const body = new FormData()
              body.append('file', image[i])
              addImg({ id: advId, body })
            }
          })

          .then(() => {
            setModal('unvisible')
            setTitle('')
            setDescription('')
            setPrice('')
            setImage([])
            setDataImg([])
            inputRef.current.value = []
          })
  }

  const handleClickToImgArea = () => {
    inputRef.current.click()
  }

  const handleClickToImg = (e, key) => {
    e.stopPropagation()
    setImage((prev) => prev.filter((elem, index) => index != key))
  }

  const handleImageChange = async (event) => {
    let count=event.target.files.length
    for (let i=0; i<count;i++){
      if(image.length<=5){
        setImage((prev) => [...prev, event.target.files[i]])  
      }      
    }    
  }

  const prepareImg = (key) => {
    return URL.createObjectURL(image[key])
  }

  const handleClickToDeleteImg = (e, urlId, key) => {
    e.stopPropagation()
    const file_url = new URLSearchParams()
    file_url.append('file_url', urlId)
    deleteImg({ id: advId, file_url })
    setDataImg((prev) => prev.filter((elem, index) => elem[index] != elem[key]))
  }

  if (role === 'editAdv') {
    useEffect(() => {
      setTitle(data.title)
      setDescription(data.description)
      setPrice(data.price)
      setDataImg(data.images)
    }, [data])
  }

  useEffect(() => {
    if (title.trim() && description.trim() && price) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [title, description, price])

  return (
    <S.ModalForm modal={modal}>
      <S.HeaderNav>
        <S.SmallLogo
          alt="logo"
          src={small_logo}
          onClick={() => {
            clickToexit()
            navigate('/')
          }}
        />
      </S.HeaderNav>
      <form className="unvisible">
        <input
          type="file"
          name="files[]"
          ref={inputRef}
          multiple
          onChange={(e) => handleImageChange(e)}
        />
      </form>
      <S.ModalExit onClick={() => clickToexit()} />
      <S.ModalFormArea>
        <S.ModalTitle>
          <S.ModalArrow alt='' src ={arrow} onClick={() => clickToexit()} /> 
          {role === 'newAdv' ? (
            'Новое объявление'
          ) : (
            <S.HiddenSpan>Редактировать</S.HiddenSpan>
          )}
        </S.ModalTitle>
        <S.ModalLabel htmlFor="title">Название</S.ModalLabel>
        <S.ModalInput
          name="title"
          value={title}
          placeholder="Введите название"
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.ModalLabel htmlFor="description">Описание</S.ModalLabel>
        <S.ModalTextarea
          name="description"
          placeholder="Введите описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <S.ModalLabel htmlFor="photos">
          <span>Фотографии товара &nbsp;</span>
          <span style={{ opacity: '0.3' }}>не более 5 фотографий</span>
        </S.ModalLabel>
        <S.ModalPhotosContainer>
          <S.ModalPhoto onClick={() => handleClickToImgArea()}>
            {role === 'newAdv' ? (
              image[0] ? (
                <S.ModalImg
                  src={prepareImg(0)}
                  onClick={(e) => handleClickToImg(e, 0)}
                  alt="Фото"
                />
              ) : (
                <ModalSVG />
              )
            ) : dataImg[0] ? (
              <S.ModalImg
                src={`http://localhost:8090/${dataImg[0].url}`}
                onClick={(e) => handleClickToDeleteImg(e, dataImg[0].url, 0)}
                alt="Фото"
              />
            ) : image[0] ? (
              <S.ModalImg
                src={prepareImg(0)}
                onClick={(e) => handleClickToImg(e, 0)}
              />
            ) : (
              <ModalSVG />
            )}
          </S.ModalPhoto>
          <S.ModalPhoto onClick={() => handleClickToImgArea()}>
            {role === 'newAdv' ? (
              image[1] ? (
                <S.ModalImg
                  src={prepareImg(1)}
                  onClick={(e) => handleClickToImg(e, 1)}
                />
              ) : (
                <ModalSVG />
              )
            ) : dataImg[1] ? (
              <S.ModalImg
                src={`http://localhost:8090/${dataImg[1].url}`}
                alt="Фото"
                onClick={(e) => handleClickToDeleteImg(e, dataImg[1].url)}
              />
            ) : image[1 - dataImg.length] ? (
              <S.ModalImg
                src={prepareImg(1 - dataImg.length)}
                onClick={(e) => handleClickToImg(e, 1 - dataImg.length)}
                alt="Фото"
              />
            ) : (
              <ModalSVG />
            )}
          </S.ModalPhoto>
          <S.ModalPhoto onClick={() => handleClickToImgArea()}>
            {role === 'newAdv' ? (
              image[2] ? (
                <S.ModalImg
                  src={prepareImg(2)}
                  onClick={(e) => handleClickToImg(e, 2)}
                />
              ) : (
                <ModalSVG />
              )
            ) : dataImg[2] ? (
              <S.ModalImg
                src={`http://localhost:8090/${dataImg[2].url}`}
                alt="Фото"
                onClick={(e) => handleClickToDeleteImg(e, dataImg[2].url)}
              />
            ) : image[2 - dataImg.length] ? (
              <S.ModalImg
                src={prepareImg(2 - dataImg.length)}
                onClick={(e) => handleClickToImg(e, 2 - dataImg.length)}
                alt="Фото"
              />
            ) : (
              <ModalSVG />
            )}
          </S.ModalPhoto>
          <S.ModalPhoto onClick={() => handleClickToImgArea()}>
            {role === 'newAdv' ? (
              image[3] ? (
                <S.ModalImg
                  src={prepareImg(3)}
                  onClick={(e) => handleClickToImg(e, 3)}
                />
              ) : (
                <ModalSVG />
              )
            ) : dataImg[3] ? (
              <S.ModalImg
                src={`http://localhost:8090/${dataImg[3].url}`}
                alt="Фото"
                onClick={(e) => handleClickToDeleteImg(e, dataImg[3].url)}
              />
            ) : image[3 - dataImg.length] ? (
              <S.ModalImg
                src={prepareImg(3 - dataImg.length)}
                onClick={(e) => handleClickToImg(e, 3 - dataImg.length)}
                alt="Фото"
              />
            ) : (
              <ModalSVG />
            )}
          </S.ModalPhoto>
          <S.ModalPhoto onClick={() => handleClickToImgArea()}>
            {role === 'newAdv' ? (
              image[4] ? (
                <S.ModalImg
                  src={prepareImg(4)}
                  onClick={(e) => handleClickToImg(e, 4)}
                />
              ) : (
                <ModalSVG />
              )
            ) : dataImg[4] ? (
              <S.ModalImg
                src={`http://localhost:8090/${dataImg[4].url}`}
                alt="Фото"
                onClick={(e) => handleClickToDeleteImg(e, dataImg[4].url)}
              />
            ) : image[4 - dataImg.length] ? (
              <S.ModalImg
                src={prepareImg(4 - dataImg.length)}
                onClick={(e) => handleClickToImg(e, 4 - dataImg.length)}
                alt="Фото"
              />
            ) : (
              <ModalSVG />
            )}
          </S.ModalPhoto>
        </S.ModalPhotosContainer>
        <S.ModalLabel htmlFor="price">Цена</S.ModalLabel>
        <S.ModalPriceContainer focus={focus}>
          <S.ModalPrice
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />{' '}
          ₽
        </S.ModalPriceContainer>
        <S.ModalButton disabled={disabled} onClick={(e) => handleClickToAdd(e)}>
          {role === 'newAdv' ? 'Опубликовать' : 'Сохранить'}
        </S.ModalButton>
      </S.ModalFormArea>
      <Footer blocked={true} />
    </S.ModalForm>
  )
}
