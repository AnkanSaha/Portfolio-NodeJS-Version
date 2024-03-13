import { Routes, Route, BrowserRouter } from 'react-router-dom' // import the React router DOM module

// Main Router
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter // Export the main router
