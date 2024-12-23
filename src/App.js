import "./styles.css";

import React from "react";

import "./styles.css";

export default function App() {
  const [fullscreenEnabled, setFullscreenEnabled] = React.useState(false);
  const iframeRef = React.useRef();

  const onClickFull = () => {
    document.documentElement.requestFullscreen();
  };

  const onClickExit = () => {
    document.exitFullscreen();
  };

  const enableFullscreen = () => {
    // Set the state to enable fullscreen
    setFullscreenEnabled(true);

    // Add fullscreen attributes back to iframe
    const iframe = iframeRef.current;

    iframe.setAttribute("allowfullscreen", true);
    iframe.setAttribute("webkitAllowFullScreen", true);
    iframe.setAttribute("mozAllowFullScreen", true);
    iframe.setAttribute("allow", "fullscreen");
    iframe.setAttribute(
      "sandbox",
      "allowfullscreen allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    );
  };

  const disableFullscrean = () => {
    setFullscreenEnabled(false);

    const iframe = iframeRef.current;

    iframe.removeAttribute("allowfullscreen");
    iframe.removeAttribute("webkitAllowFullScreen");
    iframe.removeAttribute("mozAllowFullScreen");
    iframe.removeAttribute("allow");

    iframe.setAttribute(
      "sandbox",
      "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    );
  };

  return (
    <div className="App">
      <div className="Fullscreen">
        <button onClick={onClickFull}>Run Full Screen Main</button>
        <button onClick={onClickExit}>Exit Full Screen Main</button>
      </div>
      <div className="Info">
        <div>
          Lobby FullScreen enabled - {`${fullscreenEnabled ? "Yes" : "No"}`}
        </div>
        <button onClick={enableFullscreen}>Enable Lobby Fullscreen</button>
        <button onClick={disableFullscrean}>Disable Lobby Fullscreen</button>
      </div>

      <div className="Frame" style={{ width: "50%", height: "50%" }}>
        <iframe
          ref={iframeRef}
          src="https://aborisenok.github.io/stoic-smoke-j3xmo5/" // Ensure this link is valid and embeddable.
          title="stoic-smoke-j3xmo5"
          style={{ width: "100%", height: "100%", border: "none" }}
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}
