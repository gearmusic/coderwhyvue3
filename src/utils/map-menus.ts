import { useRouter } from 'vue-router'
import type { IBreadcrumb } from '@/base-ui/types'

export function getUserNamesMap() {
  const userNamesMap = new Map()

  userNamesMap.set('main', '系统管理')
  userNamesMap.set('user', '用户管理')
  userNamesMap.set('role', '角色管理')

  return userNamesMap
}

export function pathToBreadcrumb() {
  const breadcrumbs = new Array<IBreadcrumb>()
  const router = useRouter()
  const userNamesMap = getUserNamesMap()

  const paths =  router.currentRoute.value.fullPath
    .split('/')
    .filter(m => m !== '')

  let path = ''

  paths.forEach((item, index) => {
      path += '/' + item

      breadcrumbs.push({
        text: userNamesMap.has(item) ? userNamesMap.get(item) : item,
        to: index === (paths.length - 1) ? path : undefined
      })
    })

  return breadcrumbs
}

export function mapMenuToPermissions(userMenu: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    menus.forEach(menu => {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menus ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    })
  }

  _recurseGetPermission(userMenu)

  return permissions
}

export function getMenuListLeafKeys(menuList: any[]) {
  const selectedNodeIds: number[] = []

  const _recurseGetLeafKeys = (menuList: any[]) => {
    menuList.forEach(item => {
      if(item.children) {
        _recurseGetLeafKeys(item.children)
      } else {
        selectedNodeIds.push(item.id)
      }
    })
  }
  _recurseGetLeafKeys(menuList)

  return selectedNodeIds
}
