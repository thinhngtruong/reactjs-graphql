import { useState, useCallback } from 'react'

import memo from './homework/memo'

const Child = memo(({ onClick }: { onClick: () => void }) => {
  console.log('child render')
  return <button onClick={onClick}>Toggle</button>
})

const Component = () => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen)
  }, [])

  return (
    <>
      <Child onClick={toggle} />
      <p>Open: {String(open)}</p>
    </>
  )
}

export default Component
