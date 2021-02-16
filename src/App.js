import React, { Fragment } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";

import { IntroSvg1, IntroSvg2, IntroSvg3 } from "./components/icon";


function App() {
  return (
    <Fragment>
      <Header />
      <Intro
        items={[
          {
            id: "02J2xe789G",
            icon: <IntroSvg1 />,
            title: "Webdesign",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
          {
            id: "skCscS-Ox4",
            icon: <IntroSvg2 />,
            title: "Webdevelopment",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
          {
            id: "1CYq6h0IUT",
            icon: <IntroSvg3 />,
            title: "Marketing",
            text:
              "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
          },
        ]}
      />
      <Testimonials
        items={[
          {
            id: "HkhuVFRzwI",
            title: "We build great business",
            text:
              "Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus vitae congue mauris rhoncus aenean.",
          },
          {
            id: "S2nUCVXOLJ",
            title: "We build great business",
            text:
              "Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. ",
          },
          {
            id: "nTIbHhbTo0",
            title: "We build great business",
            text:
              "Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eleifend donec pretium vulputate sapien nec sagittis.",
          },
        ]}
      />
    </Fragment>
  );
}

export default App;
