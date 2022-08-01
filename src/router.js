import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './views/not-found/not-found'
import Home from './views/home/home'
import { memo } from 'react'

export const APP_PATHS = {
  HOME: '/',
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_PATHS.HOME} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default memo(Router)
