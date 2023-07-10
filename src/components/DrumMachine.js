import React from "react";
import { useState, useEffect, useRef } from "react";

export default function DrumMachine() {

  const audio = {
    audio1: require("../audio/Heater-1.mp3"),
    audio2: require("../audio/Heater-2.mp3"),
    audio3: require("../audio/Heater-3.mp3"),
    audio4: require("../audio/Heater-4.mp3"),
    audio5: require("../audio/clap.mp3"),
    audio6: require("../audio/Open-HH.mp3"),
    audio7: require("../audio/Kick_n_Hat.mp3"),
    audio8: require("../audio/kick.mp3"),
    audio9: require("../audio/Closed-HH.mp3"),
  }

  const [volume, setVolume] = useState(50);
  const handleVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };
  const updateDeviceVolume = () => {
    const deviceVolume = volume / 100;
    const audioElement = document.getElementById("myAudio");
    if (audioElement) {
      audioElement.volume = deviceVolume;
    }
  };

  useEffect(() => {
    updateDeviceVolume();
  }, [volume]);

  // test
  const handlePlay = () => {
    const audioElement = document.getElementById('Q');
    if (audioElement) {
      audioElement.play();
    }
  };

  const elementRef = useRef(null);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 81) {
        event.preventDefault();
        elementRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <div
        id="drum-machine"
        style={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "pink",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            <div onClick={handlePlay} ref={elementRef} className="drum-pad"><audio id="Q" src={audio.audio1} />Q</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="W" src={audio.audio2} />W</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="E" src={audio.audio3} />E</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="A" src={audio.audio4} />A</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="S" src={audio.audio5} />S</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="D" src={audio.audio6} />D</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="Z" src={audio.audio7} />Z</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="X" src={audio.audio8} />X</div>
            <div ocClick={handlePlay} className="drum-pad"><audio id="C" src={audio.audio9} />C</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <button>ON/OFF</button>
            <input
              type="range"
              onChange={handleVolume}
              min="0"
              max="100"
              value={volume}
              className="slider"
              id="volumeSlider"
            />
            <p>Volume: {volume}</p>
            

            <div
              id="display"
              style={{
                backgroundColor: "grey",
              }}
            >
              DISPLAY
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
