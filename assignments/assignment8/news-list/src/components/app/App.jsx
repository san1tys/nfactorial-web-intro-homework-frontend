import React from 'react';
import Header from '../header/Header'
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import cardsData from '../../data/cardsData';

// import CardPage from '../cardPage/CardPage';

function App() {
  return (
    <>
      <Header >
        <h1 className="header-subtitle">Hello, world!</h1>
      </Header>

      <div className="container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgUrl={card.imageUrl}
            author={card.author}
            topic={card.topic}
            readTime={card.readTime}
            date={card.date}
          />
        ))}
      </div>
      <Footer />
      {/* <CardPage /> */}
    </>
  );
}

export default App;
