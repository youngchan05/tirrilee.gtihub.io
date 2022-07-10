import React, { useState } from 'react'

function useClick({initialState = 0}) {
    const [ currentTab , setCurrentTab] = useState(initialState)
    const onClickCurrent = (current) => {
        setCurrentTab(current)
    }
  return {
    currentTab,
    onClickCurrent,
  }
}

export default useClick