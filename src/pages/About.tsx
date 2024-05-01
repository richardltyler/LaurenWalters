import "./About.css";
import { useCollapse } from "react-collapsed";
import Horsetooth from "../assets/horsetooth_translucent-min.png";
import Reading from "../assets/books_translucent-min.png";
import Weights from "../assets/weights_translucent-min.png";

function AboutItem({ title, image }: { title: string; image: string }) {
  const { getCollapseProps, getToggleProps } = useCollapse({});
  return (
    <div className="about-item">
      <h3 {...getToggleProps()}>{title}</h3>

      <div {...getCollapseProps()}>
        <p
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="about-image"
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

export default function About() {
  return (
    <div className="about">
      <AboutItem title="Hiking" image={Horsetooth} />
      <AboutItem title="Reading" image={Reading} />
      <AboutItem title="Gym" image={Weights} />
    </div>
  );
}
