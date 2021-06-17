import {makeAutoObservable} from "mobx";

export default class DeviceStore {

    constructor() {
        this._types = [
            {id: 1, name: 'type 1'},
            {id: 2, name: 'type 2'},
        ]
        this._brands = [
            {id: 1, name: 'name 1'},
            {id: 2, name: 'name 2'}
        ]
        this._devices = [
            {id: 1, name: 'device 1', price: 2500, rating: 5, img: `https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q321_purple_pdp-image-1b_2.jpg`},
            {id: 2, name: 'device 2', price: 2600, rating: 4, img: `https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q321_purple_pdp-image-1b_2.jpg`},
            {id: 3, name: 'device 3', price: 2700, rating: 4, img: `https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q321_purple_pdp-image-1b_2.jpg`},
            {id: 4, name: 'device 4', price: 2800, rating: 3, img: `https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/w/w/wwru_iphone12_q321_purple_pdp-image-1b_2.jpg`}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._types = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}