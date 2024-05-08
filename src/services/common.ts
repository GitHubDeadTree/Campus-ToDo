import http from '@/utils/http'

// 获取信息总览面板数据
export function serviceGetPanelData(params?: object) {
  return http.get('/panel', { params })
}


