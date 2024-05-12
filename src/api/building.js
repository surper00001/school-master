import request from '@/utils/request'
/**
 * 获取企业列表
 * @param {*} params 
 * @returns 
 */
export function getbuildingListAPI(params){
    return request({
        url:'/park/building',
        method:'get',
        params
        
    })
}