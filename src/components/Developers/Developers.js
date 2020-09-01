import React from 'react'
import cx from 'classnames'
import DevelopersList from '../DevelopersList'


const Developers = ({ term, list, onDeveloperClick, onTermChange }) => {
  const Input = ({ value, onChange, className }) => {
    return (
      <input value={value} onChange={onChange} className={cx(className)} placeholder="Search..." />
    )
  }

  return (
    <div className="developers">
      <div className="search">
        <Input value={term} onChange={onTermChange} />
      </div>
      <DevelopersList list={list} onRowClick={onDeveloperClick}/>
    </div>
  )
}

export default Developers