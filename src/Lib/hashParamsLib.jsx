

export const turnHashParamsIntoObj = (location) => {
  if(location.hash === "") return {}
    let hashParams = location.hash.substring(1) // exclude '#'
    return JSON.parse('{ "' + hashParams.replace(/=/g, '": "').replace(/&/g, '", "') + '" }')
}

export const turnObjIntoHashParams = (hashObj) => {
  return '#' + Object.entries(hashObj)
  .map(el =>`${el[0]}=${el[1]}`)
  .join('&')
}

export const setHistoryHashParams = (hashObj, location) => {
  window.history.replaceState(null, null, turnObjIntoHashParams(hashObj))
  location.hash = turnObjIntoHashParams(hashObj)
}

