import http from '@/utils/http'

// 类型
export function serviceGetBillType() {
  return http.get('/capitalFlowType')
}

export function serviceDeleteBillType(id: string) {
  return http.delete(`/capitalFlowType/${id}`, {
    headers: { successAlert: 'true' },
  })
}

export function serviceUpdateBillType(id: string, data: object) {
  return http.put(`/capitalFlowType/${id}`, data, {
    headers: { successAlert: 'true' },
  })
}

export function serviceCreateBillType(data: object) {
  return http.post('/capitalFlowType', data, {
    headers: { successAlert: 'true' },
  })
}

// 资金流动
export function serviceGetBill(params?: object) {
  return http.get('/capitalFlow', { params })
}

export function serviceDeleteBill(id: string) {
  return http.delete(`/capitalFlow/${id}`, {
    headers: { successAlert: 'true' },
  })
}

export function serviceUpdateBill(id: string, data: object) {
  return http.put(`/capitalFlow/${id}`, data, {
    headers: { successAlert: 'true' },
  })
}

export function serviceCreateBill(data: object) {
  return http.post('/capitalFlow', data)
}

export function serviceGetBillAmount(params?: object) {
  return http.get('/capitalFlow/amount/statistics', { params })
}

export function serviceGetBillAmountGroup(params: object) {
  return http.get('/capitalFlow/amount/group', { params })
}

export function serviceGetAmountById(id: string) {
  return http.get(`/capitalFlow/${id}`)
}
