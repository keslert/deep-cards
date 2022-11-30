import Head from "next/head";
import { startTransition, useState } from "react";
import Card from '../components/Card';
import Search from '../components/Search';
import cardData from "../core/card-data";

// const tags = _.chain(cardData).flatMap("tags").uniq().value();


function HomePage(props) {
  const [cards, setCards] = useState(props.cards)
  const [search, setSearch] = useState("");

  const handleSearch = (str) => {
    setSearch(str);

    startTransition(() => {
      if(!str) {
        setCards(props.cards);
      } else {
        const _str = str.toLowerCase();
        setCards(props.cards.filter((card) => {
          return card.text.toLowerCase().includes(_str);
        }));
      }
    });
    
  }

  return (
    <>
      <Head>
        <title>Deep Cards</title>
      </Head>

      <div className="w-100 min-h-screen bg-gray-50 p-8 pb-16">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-8">
            <Search 
              value={search}
              onChange={e => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {cards.map((card, i) => (
              <div key={i}>
                <Card key={i} card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {

  const cards = cardData.sort(() => (Math.random() < 0.5) ? -1 : 1);

  return {
    props: {
      cards,
    },
    revalidate: 84600,
  };
};