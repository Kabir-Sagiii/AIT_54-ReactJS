import "./CardContainer.css";
import Card from "../card/Card.jsx";
function CardContainer(props) {
  //props = {name:"",cardsData:[{image:"",title:""},{},{},{},{}]}
  return (
    <div className="cards-container">
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <Card
          image={props.cardsData[0].image}
          title={props.cardsData[0].title}
        />
        <Card
          image={props.cardsData[1].image}
          title={props.cardsData[1].title}
        />
        <Card
          image={props.cardsData[2].image}
          title={props.cardsData[2].title}
        />
        <Card
          image={props.cardsData[3].image}
          title={props.cardsData[3].title}
        />
        <Card
          image={props.cardsData[4].image}
          title={props.cardsData[4].title}
        />
      </div>
    </div>
  );
}

export default CardContainer;
