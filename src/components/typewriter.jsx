import React, { useState, useEffect } from "react";

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1) {
      setTimeout(() => {
        setSubIndex(0);
        setIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
      }, 1000);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  return <>{`${words[index].substring(0, subIndex)}`}</>;
};

export default TypeWriter;
