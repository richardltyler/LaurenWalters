import "./About.css";
import { useState } from "react";
import Horsetooth from "../assets/horsetooth-unsplash.png";
import Reading from "../assets/reading-unsplash.png";
import Weights from "../assets/weights-unsplash.png";

function AboutItem() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="about-item">
      <div className="input-container">
        <label htmlFor="hiking">
          <input
            id="hiking"
            type="checkbox"
            name="hiking"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
            className="hidden"
          />
          <h3>Hiking</h3>
        </label>
      </div>

      <p className={`about-image ${checked ? "expanded" : ""}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
        ante, consequat id faucibus quis, maximus id dui. Maecenas posuere ac
        leo sed auctor. Maecenas id nisl ac nisi mattis sollicitudin. Nulla quis
        ex orci. Mauris maximus rhoncus pretium. Nulla consectetur urna ut
        placerat sagittis. Curabitur faucibus magna sed odio molestie imperdiet.
        Duis tincidunt eleifend ipsum, in tristique quam vehicula a. Proin
        eleifend at est sit amet euismod. Donec eget libero nunc. Mauris
        scelerisque magna ut nunc interdum, eu vulputate nisl dignissim.
        Pellentesque pellentesque, neque quis tempor luctus, mauris ligula
        bibendum purus, ut sagittis nulla tellus eget diam. Proin libero lacus,
        volutpat nec ipsum a, dapibus tempus eros. Proin vehicula dapibus
        mauris, in interdum nunc ornare sed. Praesent molestie congue purus
        vitae tempor. Ut et enim nisl. Quisque elementum varius bibendum.
        Praesent consectetur erat a lacus pellentesque, id aliquam ex tincidunt.
        Morbi purus lacus, maximus quis volutpat eget, suscipit et nunc. Vivamus
        tempus id diam volutpat vehicula. Etiam arcu justo, sagittis non
        fringilla at, laoreet id ligula. Sed in ex sodales lacus ullamcorper
        consectetur vel in eros. Curabitur malesuada orci eget lorem
        condimentum, id iaculis purus iaculis. Suspendisse molestie risus leo,
        ut pulvinar metus mollis et.
      </p>
    </div>
  );
}

export default function About() {
  const [selectedView, setSelectedView] = useState("");
  return (
    <div className="about">
      <div className="about-item">
        <div className="input-container">
          <label htmlFor="hiking">
            <input
              id="hiking"
              type="checkbox"
              name="hiking"
              checked={selectedView === "hiking"}
              onChange={() => {
                setSelectedView(selectedView === "hiking" ? "" : "hiking");
              }}
              className="hidden"
            />
            <h3>Hiking</h3>
          </label>
        </div>

        <p
          className={`about-image ${
            selectedView === "hiking" ? "expanded" : ""
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
          ante, consequat id faucibus quis, maximus id dui. Maecenas posuere ac
          leo sed auctor. Maecenas id nisl ac nisi mattis sollicitudin. Nulla
          quis ex orci. Mauris maximus rhoncus pretium. Nulla consectetur urna
          ut placerat sagittis. Curabitur faucibus magna sed odio molestie
          imperdiet. Duis tincidunt eleifend ipsum, in tristique quam vehicula
          a. Proin eleifend at est sit amet euismod. Donec eget libero nunc.
          Mauris scelerisque magna ut nunc interdum, eu vulputate nisl
          dignissim. Pellentesque pellentesque, neque quis tempor luctus, mauris
          ligula bibendum purus, ut sagittis nulla tellus eget diam. Proin
          libero lacus, volutpat nec ipsum a, dapibus tempus eros. Proin
          vehicula dapibus mauris, in interdum nunc ornare sed. Praesent
          molestie congue purus vitae tempor. Ut et enim nisl. Quisque elementum
          varius bibendum. Praesent consectetur erat a lacus pellentesque, id
          aliquam ex tincidunt. Morbi purus lacus, maximus quis volutpat eget,
          suscipit et nunc. Vivamus tempus id diam volutpat vehicula. Etiam arcu
          justo, sagittis non fringilla at, laoreet id ligula. Sed in ex sodales
          lacus ullamcorper consectetur vel in eros. Curabitur malesuada orci
          eget lorem condimentum, id iaculis purus iaculis. Suspendisse molestie
          risus leo, ut pulvinar metus mollis et.
        </p>
      </div>
      <div className="about-item">
        <div className="input-container">
          <label htmlFor="gym">
            <input
              id="gym"
              type="checkbox"
              name="gym"
              checked={selectedView === "gym"}
              onChange={() => {
                setSelectedView(selectedView === "gym" ? "" : "gym");
              }}
              className="hidden"
            />
            <h3>Gym</h3>
          </label>
        </div>

        <p
          className={`about-image ${selectedView === "gym" ? "expanded" : ""}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
          ante, consequat id faucibus quis, maximus id dui. Maecenas posuere ac
          leo sed auctor. Maecenas id nisl ac nisi mattis sollicitudin. Nulla
          quis ex orci. Mauris maximus rhoncus pretium. Nulla consectetur urna
          ut placerat sagittis. Curabitur faucibus magna sed odio molestie
          imperdiet. Duis tincidunt eleifend ipsum, in tristique quam vehicula
          a. Proin eleifend at est sit amet euismod. Donec eget libero nunc.
          Mauris scelerisque magna ut nunc interdum, eu vulputate nisl
          dignissim. Pellentesque pellentesque, neque quis tempor luctus, mauris
          ligula bibendum purus, ut sagittis nulla tellus eget diam. Proin
          libero lacus, volutpat nec ipsum a, dapibus tempus eros. Proin
          vehicula dapibus mauris, in interdum nunc ornare sed. Praesent
          molestie congue purus vitae tempor. Ut et enim nisl. Quisque elementum
          varius bibendum. Praesent consectetur erat a lacus pellentesque, id
          aliquam ex tincidunt. Morbi purus lacus, maximus quis volutpat eget,
          suscipit et nunc. Vivamus tempus id diam volutpat vehicula. Etiam arcu
          justo, sagittis non fringilla at, laoreet id ligula. Sed in ex sodales
          lacus ullamcorper consectetur vel in eros. Curabitur malesuada orci
          eget lorem condimentum, id iaculis purus iaculis. Suspendisse molestie
          risus leo, ut pulvinar metus mollis et.
        </p>
      </div>
      <div className="about-item">
        <div className="input-container">
          <label htmlFor="reading">
            <input
              id="reading"
              type="checkbox"
              name="reading"
              checked={selectedView === "reading"}
              onChange={() => {
                setSelectedView(selectedView === "reading" ? "" : "reading");
              }}
              className="hidden"
            />
            <h3>Hiking</h3>
          </label>
        </div>

        <p
          className={`about-image ${
            selectedView === "reading" ? "expanded" : ""
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui
          ante, consequat id faucibus quis, maximus id dui. Maecenas posuere ac
          leo sed auctor. Maecenas id nisl ac nisi mattis sollicitudin. Nulla
          quis ex orci. Mauris maximus rhoncus pretium. Nulla consectetur urna
          ut placerat sagittis. Curabitur faucibus magna sed odio molestie
          imperdiet. Duis tincidunt eleifend ipsum, in tristique quam vehicula
          a. Proin eleifend at est sit amet euismod. Donec eget libero nunc.
          Mauris scelerisque magna ut nunc interdum, eu vulputate nisl
          dignissim. Pellentesque pellentesque, neque quis tempor luctus, mauris
          ligula bibendum purus, ut sagittis nulla tellus eget diam. Proin
          libero lacus, volutpat nec ipsum a, dapibus tempus eros. Proin
          vehicula dapibus mauris, in interdum nunc ornare sed. Praesent
          molestie congue purus vitae tempor. Ut et enim nisl. Quisque elementum
          varius bibendum. Praesent consectetur erat a lacus pellentesque, id
          aliquam ex tincidunt. Morbi purus lacus, maximus quis volutpat eget,
          suscipit et nunc. Vivamus tempus id diam volutpat vehicula. Etiam arcu
          justo, sagittis non fringilla at, laoreet id ligula. Sed in ex sodales
          lacus ullamcorper consectetur vel in eros. Curabitur malesuada orci
          eget lorem condimentum, id iaculis purus iaculis. Suspendisse molestie
          risus leo, ut pulvinar metus mollis et.
        </p>
      </div>
    </div>
  );
}
