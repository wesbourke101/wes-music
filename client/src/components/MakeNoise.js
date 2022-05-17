import React, {useState} from 'react'
// import { Tone } from 'tone/build/esm/core/Tone'
import * as Tone from "tone";


function MakeNoise() {
    const [filterState, setFilterState] = useState(0)
    const [feedBackState, setFeedBackState] = useState(0)
    const [reverbState, setReverbState] = useState(1)
    ////////////////////////////////////////////////////////
    const synth = new Tone.Synth().toDestination();
    const firstFilter = new Tone.Filter(filterState, 'lowpass').toDestination();
    const feedbackDelay = new Tone.FeedbackDelay(feedBackState, 0.5).toDestination();
    const freeverb = new Tone.Freeverb().toDestination();
    freeverb.dampening = reverbState;

    //tone *****
    function middleOne(e) {
        synth.triggerAttackRelease("C1", "4n").connect(firstFilter).connect(feedbackDelay).connect(freeverb); 
        synth.triggerAttackRelease("C1", "4n").connect(freeverb); 
    }
    //tone *****


    function filterFunctionFirst(e) {
        setFilterState(e.target.value)
        Tone.start()
    }
    function feedBackFunction(e) {
        setFeedBackState(e.target.value)
        Tone.start()
    }
    function reverbFunction(e) {
        setReverbState(e.target.value)
        Tone.start()
    }

  return (
    <div>
        <button id="button" onClick={middleOne}>[X]</button>
            {/* <input name="filter" type="range" min="0" max="20000" onChange={filterFunctionFirst} value={filterState} className="slider" />
            <input name="feedBack" type="range" min="0" max="1" onChange={feedBackFunction} value={feedBackState} className="slider" /> */}
            <label>Reverb</label>
            <input name="reverb" type="range" min="0" max="1000" onChange={reverbFunction} value={reverbState} className="slider" />

        {/* <Canvas /> */}
        {console.log(filterState)}   
    </div>
  )
}

export default MakeNoise