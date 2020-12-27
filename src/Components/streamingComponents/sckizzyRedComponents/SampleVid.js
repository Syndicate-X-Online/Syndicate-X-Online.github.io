import React from "react"
import ReactPlayer from "react-player"

function SampleVid() {
  return (
    <section className='centerWithFlex'>
      <ReactPlayer
        url="https://www.twitch.tv/videos/838777788"
        controls
      />
    </section>
  )
}

export default SampleVid