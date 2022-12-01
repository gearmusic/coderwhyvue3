
import request from '../index'

import type { IEnumDataType } from '@/types'

function getListUrl(catalog: string) {
  return `/${ catalog }/list`
}

function getDeleteUrl(catalog: string, id: number) {
  return `/${ catalog }/${ id }`
}

function getCreateUrl(catalog: string) {
  return `/${ catalog }`
}

function getUpdateUrl(catalog: string, id: number) {
  return `/${ catalog }/${ id }`
}

export function getList(catalog: string, page: any, searchItems?: any) {

  if(searchItems) {
    return request.post<IEnumDataType>(getListUrl(catalog), {
      offset: page.offset,
      size: page.size,
      ...searchItems
    })
  }

  return request.post<IEnumDataType>(getListUrl(catalog), {
    offset: page.offset,
    size: page.size
  })
}

export function deleteData(catalog: string, id: number) {
  return request.delete(getDeleteUrl(catalog, id))
}

export function createData(catalog: string, payload: any) {
  return request.post(getCreateUrl(catalog), payload)
}

export function updateData(catalog: string, payload: any, id: number) {
  return request.patch(getUpdateUrl(catalog, id), payload)
}
