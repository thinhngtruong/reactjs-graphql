const memoize = require('lodash/memoize')

const expensiveCalculate = (a, b) => {
  let result = 0

  for (let i = 0; i < 10000000; i++) {
    result += i + a + b
  }

  return result
}

function execute(useMemoize) {
  const func = useMemoize ? memoize(expensiveCalculate) : expensiveCalculate

  console.time('memoize')

  let a = func(1, 3)
  a = func(1, 4)
  a = func(1, 5)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  a = func(1, 3)
  console.log('result: ', a)

  console.timeEnd('memoize')
}

execute(1)
