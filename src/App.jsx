import './App.css'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className="app">

      <Sidebar />

      <AppRoutes />

      <Footer />

    </div>
  )
}

export default App
