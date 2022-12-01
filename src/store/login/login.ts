import { defineStore } from 'pinia'

import type { IAccount, ILoginResult } from '@/types/login'

import localCatche from '@/utils/cache'
import { accountLoginRequest } from '@/service/login/login'

import useSystemStore from '@/store/system/system'

const useLoginStore = defineStore('login', {
  state : () => ({
    login: {} as ILoginResult
  }),
  getters: {

  },
  actions: {
    async accountLoginAction(account: IAccount) {

      const result = await accountLoginRequest(account)
      this.login = result.data

      localCatche.setCatche('token', this.login.token)

      //初始化数据载入地点
      const systemStore = useSystemStore()
      systemStore.initialData()

    }
  }
});

export default useLoginStore
