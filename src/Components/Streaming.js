import React from 'react'
import SampleVid from './streamingComponents/sckizzyRedComponents/SampleVid'
import SckizBio from './streamingComponents/sckizzyRedComponents/SckizBio'
import SckizIntro from './streamingComponents/sckizzyRedComponents/SckizIntro'

function Streaming(){
    return(
        <div className='App-header'>
            <section className='setWidthEighty'>
            
                <SckizIntro />
                <SckizBio />
                <SampleVid />
                <h3>||In Development||</h3>
             
            </section>
        </div>
    )
}

export default Streaming