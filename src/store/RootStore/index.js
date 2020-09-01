import RootStore from './RootStore'
import DevelopersStore from '../DevelopersStore'

export default new RootStore({
  developersStore: new DevelopersStore({
    initTerm: '', initList: []
  })
})