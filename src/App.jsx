import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

const App = () => {
  return (
    <div className="min-h-dvh">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
