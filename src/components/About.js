import React, { Component } from 'react'
export class About extends Component {
  render() {
    return (
      <div>
        <div className="accordion " id="accordionAbout" style={{width: '700px', margin: 'auto'}} >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Introduction</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Welcome to News Cafe, your one-stop destination for comprehensive and up-to-the-minute news from around the world. We are dedicated to bringing you the latest updates, in-depth coverage, and engaging stories across a wide range of topics. Our website is designed to cater to your diverse interests and keep you informed and entertained.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Section Overview</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    1: Business<br/>

                    In the "Business" section, we dive deep into the world of finance, commerce, and industry. Stay informed about market trends, investment opportunities, and the latest developments in the business world. Our team of expert journalists brings you exclusive interviews, analysis, and insights to help you make informed decisions in the world of finance and economics. <br /><br />

                    2: Entertainment<br/>

                    Discover the glitz and glamour in our "Entertainment" section, where we cover the latest in movies, music, television, and celebrity news. Whether you're a movie buff, a music lover, or a pop culture enthusiast, we've got you covered with reviews, interviews, and features on your favorite stars and the entertainment industry. <br /><br />

                    3: General<br/>

                    Our "General" section is your go-to for breaking news, trending topics, and features on a wide array of subjects. From politics and social issues to human interest stories, this section keeps you informed about the most pressing issues and fascinating stories happening globally. <br /><br />

                    4: Health<br/>

                    In the "Health" section, we prioritize your well-being by providing the latest updates on medical breakthroughs, wellness tips, and coverage of healthcare issues. Stay in the know about emerging health trends, mental and physical wellness, and expert advice to help you lead a healthier life. <br /><br />

                    5: Science<br/>

                    Our "Science" section is your gateway to the world of discovery and innovation. Explore the frontiers of human knowledge, from space exploration to cutting-edge technology, environmental breakthroughs, and more. Our team of science enthusiasts brings you articles, features, and updates that will inspire your curiosity. <br /><br />

                    6: Sports<br/>

                    For all the sports enthusiasts out there, our "Sports" section offers comprehensive coverage of the latest games, matches, and athletic achievements. Whether you're a fan of football, basketball, soccer, or any other sport, we've got you covered with highlights, analyses, and exclusive interviews with your favorite athletes. <br /><br />

                    7: Technology<br/>

                    In our "Technology" section, we keep you at the forefront of the digital revolution. Stay updated on the latest gadgets, software developments, artificial intelligence, and the ever-evolving tech landscape. Our tech-savvy team provides reviews, insights, and features to help you navigate the rapidly changing world of technology. <br /><br />
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Our Commitment</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    At News Cafe, we are committed to delivering accurate, unbiased, and engaging news content. Our team of experienced journalists and writers work tirelessly to ensure that you have access to the most current and relevant information in each section. We pride ourselves on our dedication to journalistic integrity and providing a platform where you can explore the diverse aspects of our ever-changing world. <br /><br />
                    We invite you to interact with our content by leaving comments, sharing articles with your friends, and subscribing to our newsletter to stay updated on the latest developments. You can also follow us on social media for real-time updates and engaging discussions.
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default About