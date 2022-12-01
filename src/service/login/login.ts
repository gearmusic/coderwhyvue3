import request from '../index'

import type { IDataType, IAccount, ILoginResult } from '@/types/login'

enum LoginAPI{
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return request.post<IDataType<ILoginResult>>(LoginAPI.AccountLogin, account)
}
