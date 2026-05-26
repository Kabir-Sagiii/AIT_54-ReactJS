import "./App.css";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Footer from "./components/footer/Footer.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <CardContainer
        name={"Shop for cool Summer"}
        cardsData={[
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.7qgzzKWs4e1nauyPZuftoQHaLH?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://www.handrlondon.com/product_image/1673454363566%20K%20FRONT.jpg",
            title: "upto 50% off",
          },
          {
            image:
              "https://i.pinimg.com/736x/82/6b/07/826b0734d8eec457ffd5b57d64e9f81d.jpg",
            title: "upto 80% off",
          },
          {
            image:
              "https://tse2.mm.bing.net/th/id/OIP.eIl1wSaPtcY90qs4lrL4MwHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.JVGjllUSd3KWtWEMoxv1-wHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 20% off",
          },
        ]}
      />

      <CardContainer
        name={"Shop for cool Summer"}
        cardsData={[
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.7qgzzKWs4e1nauyPZuftoQHaLH?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://www.handrlondon.com/product_image/1673454363566%20K%20FRONT.jpg",
            title: "upto 50% off",
          },
          {
            image:
              "https://i.pinimg.com/736x/82/6b/07/826b0734d8eec457ffd5b57d64e9f81d.jpg",
            title: "upto 80% off",
          },
          {
            image:
              "https://tse2.mm.bing.net/th/id/OIP.eIl1wSaPtcY90qs4lrL4MwHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.JVGjllUSd3KWtWEMoxv1-wHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 20% off",
          },
        ]}
      />

      <CardContainer
        name={"Shop for cool Summer"}
        cardsData={[
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.7qgzzKWs4e1nauyPZuftoQHaLH?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://www.handrlondon.com/product_image/1673454363566%20K%20FRONT.jpg",
            title: "upto 50% off",
          },
          {
            image:
              "https://i.pinimg.com/736x/82/6b/07/826b0734d8eec457ffd5b57d64e9f81d.jpg",
            title: "upto 80% off",
          },
          {
            image:
              "https://tse2.mm.bing.net/th/id/OIP.eIl1wSaPtcY90qs4lrL4MwHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 30% off",
          },
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.JVGjllUSd3KWtWEMoxv1-wHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
            title: "upto 20% off",
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
