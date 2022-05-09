import React, { useEffect, useRef, useMemo, FC } from 'react'

// component throw 1 promise để trigger fallback của Suspense
const Suspender = () => {
  const resolveRef = useRef<() => void>()
  const promise = useMemo(
    () =>
      new Promise<void>((resolve) => {
        resolveRef.current = resolve
      }),
    [],
  )

  useEffect(() => {
    return () => {
      resolveRef.current?.()
    }
  })

  throw promise
}

// lazy: trả về 1 component mà sẽ render Suspender khi promise chưa trả về
// sau khi promise trả về 1 component khác, mình sẽ render component đó
const lazy = (getPromise: () => Promise<{ default: FC }>) => {
  const promise = getPromise()

  return class LaziedComponent extends React.Component {
    state: {
      Comp: FC | undefined
    } = {
      Comp: undefined,
    }

    componentDidMount() {
      promise.then((component) => {
        this.setState({ Comp: component.default })
      })
    }

    render() {
      const { Comp } = this.state

      if (!Comp) {
        return <Suspender />
      }

      return <Comp />
    }
  }
}

export default lazy
