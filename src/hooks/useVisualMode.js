import {useState} from "react";

 const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (mode, replace = false) => {
    setMode(mode);
    
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), mode])
      return;
    }
    setHistory(prev => [
      ...prev,
      mode
    ]);
  }
  const back = () => {
  console.log("I'm Back")
    if (history.length > 1) {
      setMode(history[history.length - 2])
      setHistory(prev => [
        ...prev.slice(0, prev.length - 1)

      ]);
    }
  }
  return { mode, transition, back };
 }

export default useVisualMode;

