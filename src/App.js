import "./styles.css";

export default function App() {
  const onClickFull = () => {
    document.documentElement.requestFullscreen();
  };

  const onClickExit = () => {
    document.exitFullscreen();
  };

  return (
    <div className="App">
      <div className="Fullscreen">
        <button onClick={onClickFull}>Run Full Screen Main</button>
        <button onClick={onClickExit}>Exit Full Screen Main</button>
      </div>
      <div
        className="Frame"
        style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
      >
        <iframe
          src="https://j3xmo5.csb.app/" // Ensure this link is valid and embeddable.
          title="stoic-smoke-j3xmo5"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}
