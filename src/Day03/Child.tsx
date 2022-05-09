import { useRef, useEffect } from 'react'

const Child = ({ loading }: { loading: boolean }) => {
  const resolveRef = useRef(null)

  useEffect(() => {
    console.log('mount')

    return () => {
      console.log('unmount')
      // @ts-ignore
      resolveRef?.current?.()
    }
  }, [])

  if (loading) {
    throw new Promise((resolve) => {
      // @ts-ignore
      resolveRef = resolve
    })
  }

  return <div>Child</div>
}

export default Child
