import Developers from './Developers'
import { inject } from 'mobx-react'
import './Developers.css'

export default inject(({ developersStore }) => ({
  list: developersStore.list,
  term: developersStore.term,
  onDeveloperClick: developersStore.developerClick,
  onTermChange: developersStore.termChange,
}))(Developers)
