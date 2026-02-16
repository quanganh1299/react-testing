import './App.css'
import { Skills } from './components/skills/skill'

function App() {
  return (
    <div className="App">
      <Skills skills={['HTML', 'JavaScript']} />
    </div>
  )
}

export default App
