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
          Stars of heaven, warm and bright, shine upon us all tonight.
        </p>

        <hr className="my-4" />
        <p className="text-center">
          <i class="bi bi-play-circle me-1"></i>
          Control
          <i class="bi bi-sliders me-1 ms-3"></i>
          Configure
          <i class="bi bi-hammer me-1 ms-3"></i>
          Create
          <i class="bi bi-share me-1 ms-3"></i>
          Collaborate
        </p>
      </div>
      <p>
        LightRunner is software designed for the Raspberry Pi (RPi) family of
        single board computers. It controls the RPi's general purpose
        input/output pins, also known as GPIO, to create signals for up to eight
        circuits of holiday lights. Each switched GPIO must be wired to a solid
        state or electromechanical relay in order to switch light circuits on
        and off.
      </p>
    </>
  );
};

export default Home;
