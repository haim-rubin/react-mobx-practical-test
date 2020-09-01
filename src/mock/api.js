import developers from './developers.json'
import developersSkills from './developers-skillset.json'

export const getDevelopers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(developers)
    }, 1000)
  })
}

export const getDevelopersSkills = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(developersSkills)
    }, 1000)
  })
}