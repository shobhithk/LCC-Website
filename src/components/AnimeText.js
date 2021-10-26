import React from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "CONGREGATE",
    "CREATE",
    "CONTRIBUTE"
  ];

const Animetext = () => {
    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition style={{color: 'white', marginTop: '1rem', fontWeight: '600', fontSize: '2rem', overflowY: 'hidden'}}
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
}

export default Animetext;
