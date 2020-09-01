
import { decorate, action, observable, runInAction } from 'mobx'
import logger from '../../services/logger'

class DevelopersStore {

  constructor({ initTerm, initList }) {
    this.term = initTerm
    this.list = initList
    this.termChange = this.termChange.bind(this)
    this.updateList = this.updateList.bind(this)
    this.developerClick = this.developerClick.bind(this)
  }


  updateList() {
    logger.log('updateList')
    const updatedList = [] //This should be the updated list
    runInAction(() => {
      this.list = updatedList
    })

  }

  /* @action */
  termChange(event) {
    this.term = event.target.value
    this.updateList()
  }

  developerClick(developer) {
    logger.log(developer)
  }

}

decorate(DevelopersStore, {
  term: observable,
  list: observable,

  getDevelopers: action,
  termChange: action,
  onDeveloperClick: action,
})

export default DevelopersStore