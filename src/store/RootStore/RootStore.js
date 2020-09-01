import { decorate, action } from 'mobx'
import logger from '../../services/logger'

class RootStore {
  constructor({ developersStore }){
    this.developersStore = developersStore
    this.developersStore.rootStore = this
    this.appMounted = this.appMounted.bind(this)
    this.appWillUnmount = this.appWillUnmount.bind(this)
  }

  appMounted() {
    if(typeof this.onMounted === 'function'){
      this.onMounted()
    }
    this.developersStore.updateList()
    logger.log('App mounted')
  }

  appWillUnmount() {
    if (typeof this.onUnmounted === 'function') {
      this.onUnmounted()
    }
    // Put here code that needs to know when the app will unmount
    logger.log('App will unmount')
  }
}


decorate(RootStore, {
  appMounted: action,
  appWillUnmount: action,
})

export default RootStore
