import React, { useState } from "react";
import SpeakerCard from "../../../components/card/SpeakerCard";
import Guest from "@images/speakers/Guest.png";
import { AnimatePresence, motion } from "framer-motion";

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white space-y-10 py-10 bg-speakers-section bg-cover">
      <div>
        <h1 className="text-h4 font-bold">
          Our <span className="text-red-700">Speakers</span>
        </h1>
      </div>
      <div className="space-y-7">
        <div className="flex flex-wrap justify-center gap-10">
          <FetchAllSpeakers />
        </div>
        <h5 className="text-[#bfbfbf] text-[16px] md:text-[20px] text-center px-4 font-bold">
          Stay tuned for more exciting speakers
        </h5>
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
      title: "Indonesian Para Swimming Athlete",
      subtitle:
        "Laura Aurelia Dinda, a para swimming athlete from Indonesia, has made remarkable achievements at both national and international levels. Born in Pekanbaru and raised in Surakarta, her dedication and passion, supported by her parents and the National Paralympic Committee (NPC), have led her to win multiple medals, including gold at the World Para Swimming Championship in Berlin 2018 and the ASEAN Para Games in 2017. Her accolades also include recognition as Indonesia's Best Sport Figure in 2018. Beyond sports, Laura is a sought-after speaker and brand representative, inspiring others through her journey.",
      image: Guest,
      speakersName: "Laura Aurelia Dinda",
    },
    {
      id: 2,
      speakers: "Speaker 2",
      title: "Student Speaker",
      subtitle:
        "Tabhita Christine ‘Aya’ Kanaya Siagian is the selected student speaker for TEDxUNS 2024. Tabhita is a fifth-semester student at the Faculty of Psychology, Universitas Sebelas Maret. With various skills such as public speaking, critical thinking, communication, and leadership, she continuously hones her abilities by joining various committees, organizations, and participating in several trainings and activities. One of her roles includes being a part-time participant in the Academic Acceleration Project Batch 8 and gaining practical experience as a psychology assistant in Cognitive (Covert Behavior) 2023.  As she successfully captivated the audience with her talk on “Metamorphosis for Empowerment,” Tabhita is set to return with even more extraordinary ideas.",
      image: Guest,
      speakersName: "Tabhita Christine ‘Aya’ Kanaya Siagian",
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
                  <motion.h2 className="font-bold text-h5 md:text-h4">
                    {
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .speakersName
                    }
                  </motion.h2>
                  <motion.h2 className="max-h-40 overflow-y-auto custom-scrollbar">
                    {
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .subtitle
                    }
                  </motion.h2>

                  <motion.button
                    className="bg-red px-8 py-2 rounded"
                    onClick={() => setSelectedId(null)}
                  >
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
