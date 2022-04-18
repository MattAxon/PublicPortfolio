import React from 'react';
import Card from 'react-bootstrap/Card';
import FoodItThumbnail from '../media/food.itThumbnail.PNG';
import AxomDevThumbnail from '../media/portfolioSiteThumbnail.PNG';
import solerevThumbail from '../media/SoleRevThumbnail.PNG';
import spamfilterThumbnail from '../media/spamfilterThumbnail.PNG';
import IntelligenceThumbnail from '../media/IntelligenceThumbnail.png';


const ProjectCard = () => {

    const cardInfo = [
        {link: 'https://intelligencedeploy.vercel.app/', thumbnail: IntelligenceThumbnail, title: 'Intelligence Community Report', text: "I made the website for an AP Gov project with NextJS and Tailwind. I really liked using both of those technologies and feel very tempted to remake my portfolio site with them."},
        { link: 'http://filterbreaker.us-east-2.elasticbeanstalk.com/', thumbnail: spamfilterThumbnail, title: 'Filter Breaker', text: "This app uses a SVM to test if a user's input will get caught in a spam filter. This project is made possible with Flask, Pandas, and SKlearn."},
        { link: 'https://solerevcustoms.com', thumbnail: solerevThumbail, title: 'Customer Sneaker Site', text: 'I made this website for a custom sneaker creator/seller using SCSS, JQuery and Github-pages. I plan to add stripe compatability to it soon.'},
        { link: 'https://axom.dev', thumbnail: AxomDevThumbnail, title: 'Portfolio Site', text: 'This website, as you can see, houses my portfolio and information about me. It was made using React, React-Bootstrap, Github Pages, and SCSS.' },
        { link: 'https://github.com/MattAxon/food.it/', thumbnail: FoodItThumbnail, title: 'Food.it', text: 'This application allows you to look up foods from around the world using data from themealdb.com. This project is made possible with API calls, Bootstrap, and Jquery.' }];

    function RenderCard(card, index) {
        return (
            <Card className='box' style={{minWidth: "350px"} } key={index}>
                <a href={card.link}>
                    <Card.Img variant='top' src={card.thumbnail} />
                </a>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>

            </Card>

        )
    }


    return (
        <div className='grid'>
            {cardInfo.map(RenderCard)}
        </div>
    )
}
export default ProjectCard;