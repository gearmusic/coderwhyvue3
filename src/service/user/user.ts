import request from '../index'

import type { IEnumDataType } from '@/types'
import type { IUserInfo } from '@/types/user'

enum UserAPI{
  GetList = '/users/list'
}

export function getList(searchItems?: any) {
  if(searchItems) {
    return request.post<IEnumDataType<IUserInfo>>(UserAPI.GetList, searchItems)
  }

  return request.post<IEnumDataType<IUserInfo>>(UserAPI.GetList)
}
