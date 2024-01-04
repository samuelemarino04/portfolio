import './App.css'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'


function App() {

  return (
    <div className="app">

      <Navigation />

      <AppRoutes />

      <Footer />

    </div>
  )
}

export default App
