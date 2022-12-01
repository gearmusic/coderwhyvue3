export interface IDataType<T = any> {
  code: number,
  data: T
}

export interface IEnumDataType<T = any> {
  code: number,
  data: {
    list: Array<T>,
    totalCount: number
  }
}


