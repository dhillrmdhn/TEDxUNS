import React, { useState } from "react";
import SpeakerCard from "../../../components/card/SpeakerCard";
import Speakers1 from "@images/speakers/Speakers1.jpg";
import Speakers2 from "@images/speakers/Speakers2.jpg";
import Speakers3 from "@images/speakers/Speakers3.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white space-y-10 bg-speakers-section bg-cover">
      <div>
        <h1 className="text-h4 font-bold">
          Our <span className="text-red-700">Speakers</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <FetchAllSpeakers />
      </div>
    </div>
  );
};

const FetchAllSpeakers = () => {
  const [selectedId, setSelectedId] = useState(null);

  const AllSpeakers = [
    {
      id: 1,
      speakers: "Speaker 1",
      title: "Menjadi Lebih Baik dengan Kapal Api",
      subtitle:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit ullamcorper.",
      image: Speakers1,
      speakersName: "Fahmi Firdaus",
    },
    {
      id: 2,
      speakers: "Speaker 2",
      title: "Denganmu Semua Bahagia Dengan Bahagia",
      subtitle: "Subtitle 2",
      image: Speakers2,
      speakersName: "Ahmad Ramadhan",
    },
    {
      id: 3,
      speakers: "Speaker 3",
      title: "Denganmu Semua Bahagia Dengan Bahagia",
      subtitle: "Subtitle 3",
      image: Speakers3,
      speakersName: "Ahmad Ramadhan",
    },
  ];

  return (
    <>
      {AllSpeakers.map((speakers) => (
        <motion.div
          key={speakers.id}
          layoutId={`card-${speakers.id}`}
          onClick={() => setSelectedId(speakers.id)}
        >
          <SpeakerCard
            speakers={speakers.speakers}
            image={speakers.image}
            speakersName={speakers.speakersName}
          >
            {speakers.title}
          </SpeakerCard>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content space-y-3"
              layoutId={`card-${selectedId}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {AllSpeakers.find((speaker) => speaker.id === selectedId) && (
                <>
                  <motion.img
                    src={
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .image
                    }
                    alt="Speaker Image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl mx-auto"
                  />
                  <motion.h2 className="font-bold text-h5">
                    {
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .speakersName
                    }
                  </motion.h2>
                  <motion.h2>
                    {
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .subtitle
                    }
                  </motion.h2>
                  <motion.button className="bg-red px-8 py-2 rounded" onClick={() => setSelectedId(null)}>
                    Close
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Speakers;
