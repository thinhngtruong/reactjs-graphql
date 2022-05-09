import { Suspense, useState } from 'react'

import Child from './Child'

const Parent = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
    <button onClick={() => setLoading(!loading)}>Toggle child</button>
    <Suspense fallback={<div>Loading...</div>}>
      <Child loading={loading} />
    </Suspense>
    </>
  )
}

export default Parent
