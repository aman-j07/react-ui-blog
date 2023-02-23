import eyes from "../assets/images/eyes.png";

type PropType = {
  title: string;
  articles: { img: string; title: string }[];
  size?: "lg" | "";
};

function Suggestions(props: PropType) {
  return (
    <section className={`articles ${props.size === "lg" && "articles--full"}`}>
      {props.size === "lg" && (
        <img className="articles--full__eyes" src={eyes} alt="eyes pic" />
      )}
      <h3 className="articles__head">{props.title}</h3>
      <div className="articles__wrapper">
        {props.articles.map((ele) => {
          return (
            <article key={ele.img} className="blog blog--sm">
              <img className="blog__photo" src={ele.img} alt={`pic for ${ele.title}`} />
              <h3 className="blog__head">{ele.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Suggestions;
