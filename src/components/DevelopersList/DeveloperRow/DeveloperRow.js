import React from 'react'

const DeveloperRow = ({ name, totalYearsOfExperience, skillset }) => {

  return (
    <div className="developer-row">
      <div className="name">
        {name}
      </div>
      <div >
        {totalYearsOfExperience}
      </div>
      <div className="skillset">
        {
          skillset &&
          skillset.map(({ name, yearsOfxperience }) => {
            return (
              <div className="skill">
                <div>
                  {name}
                </div>
                <div>
                  ({yearsOfxperience})
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DeveloperRow