import React from 'react'
import { List } from 'react-virtualized'
import DeveloperRow from './DeveloperRow'

const rowRenderer = ({ list, onRowClick }) => ({
  key,
  index,
})  => {
  const { totalYearsOfExperience, name, skillset } = list[index]
  return (
    <DeveloperRow
      key={key}
      name={name}
      totalYearsOfExperience={totalYearsOfExperience}
      skillset={skillset} onClick={onRowClick}/>
  )
}

const DevelopersList = ({ list, onRowClick }) => {
  return (
    <List
      width={1000}
      height={600}
      rowCount={list.length}
      rowHeight={60}
      rowRenderer={rowRenderer({ list, onRowClick })}
    />
  )
}

export default DevelopersList