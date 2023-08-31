import Header from "./Components/Header";

import SlideImage from "./Components/ProductsComponents/SlideImage";
import TitleAnim from "./Components/TitleAnim";

function HomePage({ products }) {
  return (
    <div>
      <div id="header-space" className="bg-light px-3 pt-2">
        <Header />
        <div className="container mt-5 pt-5">
          <div>
            <h3 id="salutaion">Hello . </h3>
            <TitleAnim />
            <div className="mt-3" id={"Home_p"}>
              <p className="slogan">Empowering Your Electronics Experience.</p>
              <p className="description w-50">
                ElectraHub: Your one-stop destination for cutting-edge
                electronics. Explore a world of innovation with our curated
                selection of phones, laptops, and more. Experience seamless
                technology solutions and exceptional service at ElectraHub.
                Elevate your digital lifestyle today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-light">
        <SlideImage  />
      </div>
      
      
    </div>
  );
}

export default HomePage;
