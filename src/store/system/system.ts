import { defineStore } from 'pinia'

import { getList, deleteData, createData, updateData } from '@/service/system/system'

//store通用化
const useSystemStore = defineStore('system', {
  state : () => ({
    pagedlist: new Array(),
    catalog: '',
    searchItems: undefined,
    pageInfo: {
      current: 1,
      pages: 0,
      size: 10,
      total: 0
    },
    entireDepts: new Array(),
    entireRoles: new Array(),
    entireMenu: new Array(),
  }),
  getters: {
    Catalog(state) {
      return state.catalog
    },
    PagedList(state) {
      return state.pagedlist
    },
    TotalCount(state) {
      return state.pageInfo.total
    },
    CurrentPage(state) {
      return state.pageInfo.current
    },
    PageSize(state) {
      return state.pageInfo.size
    },
    SearchItems(state) {
      return state.searchItems
    },
    EntireDeptSelections(state) {
      return state.entireDepts
      .map(m => {
        return { label: m.name, value: m.id }
      })
    },
    EntireRoleSelections(state) {
      return state.entireRoles
      .map(m => {
        return { label: m.name, value: m.id }
      })
    },
    EntireMenu(state) {
      return state.entireMenu
      .map(m => {
        return { name: m.name, id: m.id, children: m.children }
      })
    }
  },
  actions: {
    async getPagedList(catalog: string, pageNum: number, pageSize: number, searchItems?: any) {
      const result = await getList(
        catalog,
        {
          offset: (pageNum - 1) * pageSize,
          size: pageSize
        },
        searchItems
      )
      this.catalog = catalog
      this.searchItems = searchItems
      this.pagedlist = result.data.list
      this.pageInfo.total = result.data.totalCount
    },

    async getSpecialPagedList(pageNum: number) {
      const result = await getList(
        this.Catalog,
        {
          offset: (pageNum - 1) * this.PageSize,
          size: this.PageSize
        },
        this.SearchItems
      )

      this.pagedlist = result.data.list
      this.pageInfo.total = result.data.totalCount
    },
    async setCurrentPage(currentPageNum: number) {
      this.pageInfo.current = currentPageNum
    },
    async setPageSize(newPageSize: number) {
      this.pageInfo.size = newPageSize
    },

    async deletePageData(catalog: string, id: number) {
      await deleteData(catalog, id)
      await this.getPagedList(catalog, 1, this.pageInfo.size)
    },

    async createPageData(catalog: string, payload: any) {
      await createData(catalog, payload)
      await this.getPagedList(catalog, 1, this.pageInfo.size)
    },

    async updatePageData(catalog: string, payload: any, id: number) {
      await updateData(catalog, payload, id)
      await this.getPagedList(catalog, 1, this.pageInfo.size)
    },

    async initialData() {
      const resultDepts = await getList(
        'department',
        {
          offset: 0,
          size: 1000
        }
      )

      this.entireDepts = resultDepts.data.list

      const resultRoles = await getList(
        'role',
        {
          offset: 0,
          size: 1000
        }
      )

      this.entireRoles = resultRoles.data.list

      const resultMenu = await getList(
        'menu',
        {
          offset: 0,
          size: 1000
        }
      )

      this.entireMenu = resultMenu.data.list

    }

  }
})

export default useSystemStore
