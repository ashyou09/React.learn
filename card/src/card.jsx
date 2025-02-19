import flower from './assets/flower.jpg';

function Card() {
    return (
        <div className="card">
            <img className = "card_image" src={flower} alt="Card Image" />
            <h2 className = "card-heading" >Bro Code</h2>
            <p>Bro Code is a programming language used for web development.</p>
            <p>hello i am Ashu Going to learn React</p>
            <button>Learn More</button>
        </div>
    );
}

export default Card;