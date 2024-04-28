//软件发布管理 供应商代码维护api

import request from '#/router/axios'

// 分页 列表查询
export function infoList(query) {
  return request({
    url: `/uwf/svnsupplierlist/page`,
    method: 'get',
    params: query
  })
}

// 新增
export function addInfo(query) {
  return request({
    url: `/uwf/svnsupplierlist`,
    method: 'post',
    data: query
  })
}

// 更新
export function updateInfo(query) {
  return request({
    url: `/uwf/svnsupplierlist/updateById`,
    method: 'post',
    data: query
  })
}

/***
 * 二级供应商接口
 */

// 新增
export function saveSecondSupplier(data) {
  return request({
    url: `/uwf/svnSecondSupplierList`,
    method: 'post',
    data: data
  })
}

//删除
export function delSecondSupplier(id) {
  return request({
    url: `uwf/svnSecondSupplierList/removeById/${id}`,
    method: 'post',
  })
}
//查询单个供应商
export function getSecondSupplierDetails(id) {
  return request({
    url: `uwf/svnSecondSupplierList/${id}`,
    method: 'get',
  })
}
//查询供应商列表
export function getSecondSupplierList(query) {
  return request({
    url: `/uwf/svnSecondSupplierList/page`,
    method: 'get',
    params: query
  })
}
