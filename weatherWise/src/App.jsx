import { tabs } from './constants'
import CityTab from './components/CityTab'
import './App.css'

function App() {

  return (
    <div className='tabs-grid'>
      {tabs.map((city, index) => <CityTab key={index} city={city} />)}
    </div>
  )
}

export default App
