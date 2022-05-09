import { useState, useMemo } from 'react'

const expensiveFunction = (a: number, b: number) => {
  console.log('called')
  return 5 ** 8
}

const memoized = memoize(expensiveFunction)

const Component = ({ a = 3, b = 3 }: { a?: number; b?: number }) => {
  const [open, setOpen] = useState(false)

  const result = useMemo(() => memoized(a, b), [a, b])

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        Toggle
      </button>
      <p>Open: {String(open)}</p>
      <p>a^b = {result}</p>
    </>
  )
}

export default Component
