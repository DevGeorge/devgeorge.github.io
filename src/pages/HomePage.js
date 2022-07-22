import React, { useState } from "react";
import "./layouts/layout.css";

const URLS = [
  {
    url: "https://drive.google.com/uc?id=1pNG72PoE-SpnJlmAlfyIxpghCdzGYXaZ",
    type: "video",
  },
  {
    url: "https://drive.google.com/uc?id=1EldexAbpa2sxJBTmqG4Zsm3MHbPAXpU3",
    type: "video",
  },
  {
    url: "https://drive.google.com/uc?id=1ZqGOhwquYlvj02bp1SbYjwiF7ChxMVUt",
    type: "video",
  },
  {
    url: "https://drive.google.com/uc?id=1Mj4zZ4WvY7UiFrztwgR080fBx-gRgjQe",
    type: "video",
  },
  {
    url: "https://drive.google.com/uc?id=1V7Q0Zry0Hxx9n-sQ5jonZgtPRzaTAk-U",
    type: "video",
  },
  {
    url: "https://drive.google.com/uc?id=1h0GfH84iK6biqpHWHj4Q0-hRowssqPfK",
    type: "image",
  },
];
const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const SelectedPageComponent = () => {
    if (selectedPage) {
      if (selectedPage.type === "video") {
        return (
          <div
            className="video-container"
            onClick={() => {
              if (!selectedPage) setSelectedPage(selectedPage?.url);
              else setSelectedPage(null);
            }}
          >
            <iframe
              className="group"
              title="video"
              src={selectedPage?.url}
              frameBorder="0"
              controlsList="nodownload"
              style={{ flex: URLS.length > 1 ? "0 0 50%" : "0 0 100%" }}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      } else if (selectedPage.type === "image") {
        return (
          <div
            className="image-container"
            onClick={() => {
              if (!selectedPage) setSelectedPage(selectedPage?.url);
              else setSelectedPage(null);
            }}
          >
            <img
              className="group"
              src={selectedPage?.url}
              alt=""
              style={{ flex: URLS.length > 1 ? "0 0 50%" : "0 0 100%" }}
            />
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <section className="layout">
      <SelectedPageComponent />

      {URLS.map((url, index) => {
        if (url.type === "video") {
          return (
            <div
              className="video-container"
              key={index}
              onClick={() => {
                if (!selectedPage) setSelectedPage(url);
                else {
                  setSelectedPage(null);
                }
              }}
            >
              <iframe
                className="group"
                title="video"
                src={url.url}
                frameBorder="0"
                controlsList="nodownload"
                style={{ flex: 1 / URLS.length }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        } else {
          return (
            <div className="image-container" key={index}>
              <img
                className="group"
                src={url.url}
                alt=""
                style={{ flex: URLS.length > 1 ? "0 0 50%" : "0 0 100%" }}
              />
            </div>
          );
        }
      })}
    </section>
  );
};

export default HomePage;
