import { defineStore } from 'pinia'

import type { IUserInfo } from '@/types/user'
import { getList } from '@/service/user/user'

const useUserStore = defineStore('user', {
  state : () => ({
    pagedlist: new Array<IUserInfo>(),
    totalCount: 0
  }),
  getters: {
    PagedList(state) {
      return state.pagedlist
    },
    TotalCount(state) {
      return state.totalCount
    }

  },
  actions: {
    async getPagedList() {
      const result = await getList()
      this.pagedlist = result.data.list
      this.totalCount = result.data.totalCount
    }

  }
});

export default useUserStore
