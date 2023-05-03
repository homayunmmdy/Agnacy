import React, { Suspense, lazy } from 'react'
import Spinner from './components/Spinner'
const Card = lazy(() => import('./components/Card'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<><Spinner /></>}>
      <Card />
      </Suspense>
    </div>
  )
}

export default App
