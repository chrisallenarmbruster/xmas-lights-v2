import React from "react";

const Home = () => {
  const jumbotron = {
    padding: "1rem 1rem",
    "margin-bottom": "2rem",
    "background-color": "#e9ecef",
    "border-radius": ".3rem",
  };

  return (
    <>
      <div style={jumbotron}>
        <h1 className="display-4 text-center">Tis the Season of Light!</h1>
        <p className="lead text-center">
          Stars of heaven, clear and bright, shine upon this festive night.
        </p>

        <hr className="my-4" />
        <p className="text-center">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-play-circle me-2 ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
          Control
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-sliders me-2 ms-5 "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
            />
          </svg>
          Configure
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-hammer me-2 ms-5"
            viewBox="0 0 16 16"
          >
            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
          </svg>
          Create
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-share me-2 ms-5"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
          Collaborate
        </p>
      </div>
      <p>
        LightRunner is software designed for the Raspberry Pi (RPi) family of
        single board computers. It controls the RPi's general purpose
        input/output pins, also known as GPIO, to create signals for up to eight
        circuits of holiday lights. Each switched GPIO must be wired to a solid
        state relay in order to switch light circuits on and off.
      </p>
    </>
  );
};

export default Home;
