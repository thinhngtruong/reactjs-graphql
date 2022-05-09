import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}
