import React, { useState, useEffect } from "react"
import InputRange from "react-input-range"

const RangeSlider = ({ activeData, updateActiveValues }) => {
  const [value, setValue] = useState({
    min: 0,
    max: activeData.labels.length - 1,
  })

  const initialRange = activeData.labels.length - 1

  useEffect(() => {
    updateActiveValues(value)
    //eslint-disable-next-line
  }, [value])

  useEffect(() => {
    setValue({ min: 0, max: activeData.labels.length - 1 })
  }, [activeData])

  const handleChange = (value) => {
    if (value.min < 0) {
      value.min = 0
    } else if (value.max > initialRange) {
      value.max = initialRange
    }
    setValue(value)
  }

  return (
    <div className="slidercontainer">
      <div className="slider">
        <InputRange
          maxValue={initialRange}
          minValue={0}
          draggableTrack={true}
          formatLabel={(value) => {
            if (typeof value === "undefined") {
              return ""
            } else {
              let string =
                activeData.labels[value] || activeData.labels[value - 1] || ""
              if (string.split(".").length === 2) {
                string = string.split(".")[0]
              }
              return `${string}`
            }
          }}
          value={value}
          onChange={(value) => handleChange(value)}
        />
      </div>
    </div>
  )
}

export default RangeSlider
