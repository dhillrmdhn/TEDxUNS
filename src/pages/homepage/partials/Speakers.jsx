import React, { useState } from "react";
import SpeakerCard from "../../../components/card/SpeakerCard";
import Guest from "@images/speakers/Guest.png";
import Aya from "@images/speakers/Aya.jpg";
import Dinda from "@images/speakers/Dinda.jpg";
import Kevin from "@images/speakers/Kevin.jpg";
import Anton from "@images/speakers/Anton.jpg";
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
      image: Dinda,
      speakersName: "Laura Aurelia Dinda",
    },
    {
      id: 2,
      speakers: "Speaker 2",
      title: "Founder & CEO at @ECOLLABO8",
      subtitle:
        "Kevin Vignier-Groiez is a green economy practitioner who has pioneered transforming plastic waste into high-value economic resources. As the founder of Ecollabo8, Kevin successfully recycles over 200 tons of plastic waste each month, creating more than 35 new jobs and generating over 100,000 USD in monthly revenue. His innovative approach not only contributes to reducing plastic pollution but also demonstrates that environmentally friendly businesses can be highly profitable. His achievements reflect a vision of a sustainable future where the economy and the environment work in harmony.",
      image: Kevin,
      speakersName: "Kevin Vignier-Groiez",
    },
    {
      id: 3,
      speakers: "Speaker 3",
      title: "Indonesian Youth Delegate to G20",
      subtitle:
        "Angelo is a prominent professional specializing in International Political Economy from Universitas Gadjah Mada. His academic achievements were nationally recognized when he was named UGM's Most Outstanding Student in 2018 and placed third nationally in the same year. Angelo began his career at the World Bank, contributing to the environmental team, before transitioning to the International Finance Corporation, where he focused on ESG issues. He later moved into consulting, supporting public sector practices. Angelo also represented Indonesia as a delegate to Y20, the official youth consultation forum for G20 member countries.",
      image: Anton,
      speakersName: "Angelo Wijaya",
    },
    {
      id: 4,
      speakers: "Speaker 4",
      title: "Student Speaker",
      subtitle:
        "Tabhita Christine ‘Aya’ Kanaya Siagian is the selected student speaker for TEDxUNS 2024. Tabhita is a fifth-semester student at the Faculty of Psychology, Universitas Sebelas Maret. With various skills such as public speaking, critical thinking, communication, and leadership, she continuously hones her abilities by joining various committees, organizations, and participating in several trainings and activities. One of her roles includes being a part-time participant in the Academic Acceleration Project Batch 8 and gaining practical experience as a psychology assistant in Cognitive (Covert Behavior) 2023.  As she successfully captivated the audience with her talk on “Metamorphosis for Empowerment,” Tabhita is set to return with even more extraordinary ideas.",
      image: Aya,
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
                    className="rounded-xl mx-auto w-full h-[350px] object-cover"
                  />
                  <motion.h2 className="font-bold text-h5 md:text-h4">
                    {
                      AllSpeakers.find((speaker) => speaker.id === selectedId)
                        .speakersName
                    }
                  </motion.h2>
                  <motion.h2 className="max-h-40 overflow-y-auto text-justify custom-scrollbar">
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
