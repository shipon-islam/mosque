import Button from "../Button";
import Layout from "../Layout";

function KnowIslam() {
  return (
    <Layout className="mt-24">
      <div className="grid md:grid-cols-2 px-4 md:px-12 py-8 gap-x-16 bg-green-600/10 rounded-md">
        <div className="">
          <img
            className="relative -top-24 rounded-xl"
            src="/images/mosque5.png"
            alt="mosque"
          />
        </div>
        <div>
          <h5 className="capitalize text-3xl font-bold text-green-800 md:w-4/5">
            get to know more about islam
          </h5>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum
            architecto, error porro possimus doloremque enim numquam vero,
            libero accusantium distinctio fuga provident, nobis velit facere
            quas a mollitia molestiae!
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            sequi pariatur aliquid at. Veniam, sequi laboriosam! Mollitia autem
            atque maiores.
          </p>

          <Button name="discover more" />
        </div>
      </div>
    </Layout>
  );
}

export default KnowIslam;
