import React from "react";
import { useEffect, useState } from "react";
const nasaPicDataDefault = {
  url: "",
  date: "",
  title: "",
  media_type: "",
  explanation: "",
};

function App() {
  const [date, setDate] = useState(null);
  const [nasaPicData, setNasaPicData] = useState(nasaPicDataDefault);
  useEffect(() => {
    const fetchImage = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY")

        .then((res) => {
          setNasaPicData(res.data);
        })
        .catch((beef) => {
          console.log("Failure in App.js", beef);
        });
    };
    fetchImage();
  }, []);

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div className="App">
      <Content nasaPicData={nasaPicData} />
    </div>
    // <main>
    //   <h1>Create React App + Go API</h1>
    //   <h2>
    //     Deployed with{' '}
    //     <a
    //       href="https://vercel.com/docs"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       Vercel
    //     </a>
    //     !
    //   </h2>
    //   <h2> THIS IS HOW YOU SPELL CHEESE!</h2>
    //   <h2> THIS IS HOW YOU SPELL CHEESE!</h2>
    //   <p>
    //     <a
    //       href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       This project
    //     </a>{' '}
    //     was bootstrapped with{' '}
    //     <a href="https://facebook.github.io/create-react-app/">
    //       Create React App
    //     </a>{' '}
    //     and contains three directories, <code>/public</code> for static assets,{' '}
    //     <code>/src</code> for components and content, and <code>/api</code>{' '}
    //     which contains a serverless <a href="https://golang.org/">Go</a>{' '}
    //     function. See{' '}
    //     <a href="/api/date">
    //       <code>api/date</code> for the Date API with Go
    //     </a>
    //     .
    //   </p>
    //   <br />
    //   <h2>The date according to Go is:</h2>
    //   <p>{date ? date : 'Loading date...'}</p>
    // </main>
  );
}

export default App;
