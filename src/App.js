import React, { Fragment } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import { IntroSvg1, IntroSvg2, IntroSvg3 } from "./components/Intro/icon";

function App() {
  return (
    <Fragment>
      <Header />
      <Intro
        items={[
          {
            icon: <IntroSvg1 />,
            title: "Webdesign",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
          {
            icon: <IntroSvg2 />,
            title: "Webdevelopment",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
          {
            icon: <IntroSvg3 />,
            title: "Marketing",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
        ]}
      />
    </Fragment>
  );
}

export default App;
