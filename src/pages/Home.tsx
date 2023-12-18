import "./Home.css";
import image from "../assets/headshot.jpg";

export default function Home() {
  return (
    <div className="home">
      <img className="headshot" src={image} />
      <div>
        <p>
          Lorem ipsum dolor sit amet. Qui quia aliquid ex voluptatem dolor est
          sint aliquid At sint eaque est aliquid animi sed dolor corporis a
          facere sunt. Non internos voluptas et architecto quas et dolor commodi
          sed voluptas maiores aut maxime soluta eum sint quia et sunt dolor.
        </p>
        <p>
          Non ipsam vero ut quam autem non molestiae accusamus. In aliquam
          magnam aut cumque vero et sequi tenetur et perferendis voluptatem aut
          officia accusamus aut Quis internos est tempora tempore. Non inventore
          tempore a recusandae eligendi et consequatur nihil id repudiandae
          earum.
        </p>
      </div>
    </div>
  );
}
