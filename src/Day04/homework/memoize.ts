const memoize = <GenericFunction extends (...args: any[]) => any>(
  func: GenericFunction,
) => {
  // Lưu 1 map các params và result
  // Sẽ bị tràn bộ nhớ nếu params thay đổi quá nhiều
  // Nên sẽ cần phải giới hạn lương cache dựa trên Map.size :D
  const resultMap = new Map<string, ReturnType<GenericFunction>>()

  return (...args: Parameters<GenericFunction>) => {
    // Mỗi key được tạo ra sẽ unique dựa trên hàm JSON.stringify
    const key = JSON.stringify(args)

    if (resultMap.has(key)) {
      return resultMap.get(key)
    }

    const result = func(...args)
    resultMap.set(key, result)

    return result
  }
}

export default memoize
