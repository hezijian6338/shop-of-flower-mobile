export function inject(origin, insert) {
  if (origin === null || origin === undefined) {
    origin = []
  }
  if (insert === null || insert === undefined) {
    origin = []
  }
  let insertArray = []
  let originArray = []
  // 检索传递的内容是否为数组
  if (Array.isArray(origin)) {
    originArray = origin.concat([])
  } else {
    originArray = origin.trim().split(',')
  }
  if (Array.isArray(insert)) {
    insertArray = insert.concat([])
  } else {
    insertArray = insert.trim().split(',')
  }

  console.log(insertArray)
  console.log(originArray)
  console.log(insertArray.concat(originArray))

  return insertArray.concat(originArray)
}

export function pass(origin, remove) {
  if (origin === null || origin === undefined) {
    origin = []
  }
  if (remove === null || remove === undefined) {
    remove = []
  }
  let removeArray = []
  let originArray = []
  // 检索传递的内容是否为数组
  if (Array.isArray(origin)) {
    originArray = origin.concat([])
  } else {
    originArray = origin.trim().split(',')
  }
  if (Array.isArray(remove)) {
    removeArray = remove.concat([])
  } else {
    removeArray = remove.trim().split(',')
  }

  for (const r of removeArray) {
    originArray = originArray.filter((o) => o !== r).concat([])
  }

  return originArray
}
