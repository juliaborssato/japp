import {api} from '../../api'
export interface ILocalization {
    latitude?: number
    longitude?: number
}

export interface IResponseLocalization {
    id: number
    user_id: number
    latitude: number
    lonitude: number
    created_at: string
    user:{
        id:number,
        name:string,
        email:string
    }
}

class LocalizationData {
    index() {
        return api.get<IResponseLocalization[]>('/localization')
    }
    store(data:ILocalization){
        console.log(data)
        return api.post('/localization', data)
    }
}
export default new LocalizationData()