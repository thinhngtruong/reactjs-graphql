const expensiveCalculate = (a, b) => {
  let result = 0

  for (let i = 0; i < 10000000; i++) {
    result += i + a + b
  }

  return result
}

const memoize = (func) => {
  let params = undefined
  let result = undefined

  return (...args) => {
    if (result && params?.every((param, i) => param === args[i])) {
      return result
    }

    params = args
    result = func(...args)

    return result
  }
}

function execute(useMemoize) {
  const func = useMemoize ? memoize(expensiveCalculate) : expensiveCalculate

  console.time('memoize')

  let a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  console.log('result: ', a)

  console.timeEnd('memoize')
}

execute(process.argv[0] || 0)
