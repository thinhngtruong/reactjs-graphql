import { Suspense } from 'react'

import lazy from './homework/lazy'

const LazyChild = lazy(() => import('./LazyChild'))

const LazyParent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyChild />
    </Suspense>
  )
}

export default LazyParent
