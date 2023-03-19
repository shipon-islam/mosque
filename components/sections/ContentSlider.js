import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function ContentSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="relative">
          <img className="w-full" src="/images/baner.png" alt="" />
          <p className="absolute top-0 z-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            placeat fugit deleniti soluta a distinctio sed odio nesciunt, quidem
            asperiores magnam, ea libero eligendi? Ullam rerum suscipit, itaque
            veniam illo fugiat. Repellat, dicta quisquam modi autem nemo maxime
            nihil numquam unde minima corporis facilis alias pariatur maiores
            vitae eveniet sequi?
          </p>
        </div>
        <div className="relative">
          <img className="w-full" src="/images/baner.png" alt="" />
          <p className="absolute top-0 z-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            placeat fugit deleniti soluta a distinctio sed odio nesciunt, quidem
            asperiores magnam, ea libero eligendi? Ullam rerum suscipit, itaque
            veniam illo fugiat. Repellat, dicta quisquam modi autem nemo maxime
            nihil numquam unde minima corporis facilis alias pariatur maiores
            vitae eveniet sequi?
          </p>
        </div>
      </Slider>
    </div>
  );
}
