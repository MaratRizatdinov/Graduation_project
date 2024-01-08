import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/main'
import { Login } from './pages/login'
import { Registration } from './pages/registration'
import { NotFound } from './pages/notfound'
import { Profile } from './pages/profile'
import { MainPage } from './components/Mainpage/Mainpage'
import { Profiles } from './components/Profiles/Profiles'
import { SellerPage } from './components/SellerPage/SellerPage'
import { AdvPage } from './components/AdvPage/AdvPage'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const AppRoutes = ({isUser}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/*" element={<Main />}>
        <Route index element={<MainPage />} />
        <Route path="ads/:id" element={<AdvPage />} />
        <Route path="profile/*" element={<Profiles />}>
          <Route index element={<NotFound />} />
          <Route path=":id" element={<SellerPage />} />
          <Route element={<ProtectedRoute isAllowed={isUser} />}>
            <Route path="me" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
