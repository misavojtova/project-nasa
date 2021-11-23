import React, { createContext, useState } from "react";

const FetchTodayContext = createContext(null);

export function FetchTodayContextProvider({ children }) {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [photoData, setPhotoData] = useState(date);
  const [trackValue, setTrackValue] = useState(date);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [hide, setHide] = useState(true);

  const onSubmitDate = () => {
    fetchData();
    async function fetchData() {
      // BACKEND API

      // const apiUrl = process.env.REACT_APP_API_URL;
      // console.log(process.env);
      // console.log(`${apiUrl}/${trackValue}`);
      // const resp = await fetch(`${apiUrl}/${trackValue}`);

      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=xuC3PWta7HvP8j9uPYWGjhSbewPgr3sKMcrKZ7WI&start_date=${trackValue}&end_date=${trackValue}`
      );

      const data = await resp.json();
      if (resp.status !== 200) {
        setHide(false);
        setErrorMessage(`Pick date between 1995-06-16 and ${date} `);
        return;
      } else if (data != null) {
        setHide(true);
        setPhotoData(data[0]);
      }
    }
  };

  return (
    <FetchTodayContext.Provider
      value={{
        date,
        photoData,
        setPhotoData,
        trackValue,
        setTrackValue,
        ErrorMessage,
        setErrorMessage,
        hide,
        setHide,
        onSubmitDate,
      }}
    >
      {children}
    </FetchTodayContext.Provider>
  );
}

export default FetchTodayContext;
