import React from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './GlobalStyle'
import { useSelector, useDispatch } from 'react-redux'
import { logInApp } from './redux/reducers/userSlice'

function App() {
  const dispatch = useDispatch()
  if (localStorage.getItem('access')) {
    // console.log("first")
    dispatch(logInApp())
  }
  const isUser = useSelector((state) => state.user.authorization)
  // console.log(isUser)
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes isUser={isUser} />
    </div>
  )
}

export default App
