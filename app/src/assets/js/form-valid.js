import mobileValid from './mobile-valid'

export default function validForm(val) {
  const value = JSON.parse(JSON.stringify(val))
  let error = false
  Object.keys(value).forEach(key => {
    if (
      typeof value[key]['required'] === 'boolean' &&
      !value[key]['required']
    ) {
      return
    }
    value[key]['error'] = isNone(value[key]['value'])
    if (key === 'mobile') {
      value[key]['error'] = !mobileValid(value[key]['value'])
    }
    if (value[key]['error']) {
      error = true
    }
  })
  return { value, error }
}

function isNone(data) {
  return !data
}
