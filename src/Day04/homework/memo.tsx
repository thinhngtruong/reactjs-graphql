import { PureComponent, FC } from 'react'

// React.memo chỉ là một HOC để implement shouldComponentUpdate thôi
// ở đây mình sử dụng luôn PureComponent cho đỡ mệt nha
const memo = <T extends {}>(Component: FC<T>) => {
  return class MemoizedComponent extends PureComponent<T> {
    render() {
      return <Component {...this.props} />
    }
  }
}

export default memo
