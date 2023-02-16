import React, { useEffect } from "react"; //named import

import { useState } from "react";

const useOnline = () => {
  //will use window event online
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      //whenever you go online this code will trigger
      //how may times need to set this
      //event addListenerwhenenvr page load it should once run
      setIsOnline(true);
    };

    const handleOffline = () => {
      //whenever you go online this code will trigger
      //how may times need to set this
      //event addListenerwhenenvr page load it should once run
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; //retun true or false
};

export default useOnline;
