import React, { useState } from "react";
import RedButton from "@components/button/RedButton";
import ReactCardFlip from "react-card-flip";

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="text-center" data-aos="fade-left">
        <h1 className="text-h5 font-light">Get to Know Us Better</h1>
      </div>
      <div className="text-center" data-aos="fade-right">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <TED flip={handleFlip} />
          </div>
          <div>
            <TEDUNS flip={handleFlip} />
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

const TEDUNS = ({ flip }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <h1 className="text-h2 text-red-700 font-bold">
        TEDx <span className="text-white">Sebelas Maret University</span>
      </h1>
      <div className="w-[90%] text-center border-2 border-red-700 p-5 rounded-3xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque,
          nostrum corrupti dicta id ullam deserunt explicabo! Libero, numquam!
          Sit facere obcaecati non repellat repellendus? Nemo dolorum unde,
          tenetur earum itaque nisi saepe voluptatibus esse iste officia, magni
          quaerat placeat asperiores labore? Numquam officiis itaque deleniti
          eius, enim fuga dolorem minima consectetur, repellendus ratione
          commodi sint corporis officia similique voluptatibus, assumenda
          ducimus. Ratione, in obcaecati optio doloribus aspernatur magni
          laborum eveniet, sed cumque eligendi iste debitis delectus animi sint
          et mollitia odit molestias ullam dicta assumenda ipsam aut reiciendis.
          Dignissimos quis officia quasi cumque reprehenderit similique maiores
          voluptatem commodi tempore.
        </p>
      </div>
      <RedButton onClick={flip}>Learn More About TED</RedButton>
    </div>
  );
};

const TED = ({ flip }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <h1 className="text-h2 text-red-700 font-bold">
        TED <span className="text-white">Organization</span>
      </h1>
      <div className="w-[90%] text-center border-2 border-red-700 p-5 rounded-3xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque,
          nostrum corrupti dicta id ullam deserunt explicabo! Libero, numquam!
          Sit facere obcaecati non repellat repellendus? Nemo dolorum unde,
          tenetur earum itaque nisi saepe voluptatibus esse iste officia, magni
          quaerat placeat asperiores labore? Numquam officiis itaque deleniti
          eius, enim fuga dolorem minima consectetur, repellendus ratione
          commodi sint corporis officia similique voluptatibus, assumenda
          ducimus. Ratione, in obcaecati optio doloribus aspernatur magni
          laborum eveniet, sed cumque eligendi iste debitis delectus animi sint
          et mollitia odit molestias ullam dicta assumenda ipsam aut reiciendis.
          Dignissimos quis officia quasi cumque reprehenderit similique maiores
          voluptatem commodi tempore.
        </p>
      </div>
      <RedButton onClick={flip}>Learn More About TEDx UNS</RedButton>
    </div>
  );
};

export default About;
