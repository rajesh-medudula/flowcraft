import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

const App = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr]">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
