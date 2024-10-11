import Keychain from "@images/merchandise/Keychain-1.svg";
import Keychain2 from "@images/merchandise/Keychain-2.png";
import Totebag from "@images/merchandise/Totebag.svg";
import Bundling from "@images/merchandise/Bundling-1.svg";
import Bundling2 from "@images/merchandise/Bundling-2.svg";
import Bundling3 from "@images/merchandise/Bundling-3.svg";
import Sticker from "@images/merchandise/StickerPack.svg";
import BaseballCap from "@images/merchandise/BaseballCap.svg";
import Kaos1 from "@images/merchandise/Kaos-1.svg";
import Kaos2 from "@images/merchandise/Kaos-2.svg"

export const merchandise = [
  {
    id: 1,
    name: "T-Shirt TEDx Special Edition",
    description:
      "Unleash your passion for ideas with our TEDx UNS Special Edition t-shirt. This exclusive design embodies the essence of creativity and collaboration—perfect for those who dare to think differently!",
    imgSrc: [
      Kaos1, Kaos2
    ],
    price: "Rp. 80.000",
  },
  {
    id: 2,
    name: "Keychain TEDx Special Edition",
    description:
      "Unlock your potential with the TEDx UNS Special Edition keychain! This unique accessory not only keeps your keys organized but also symbolizes your commitment to spreading transformative ideas.",
    imgSrc: [
      Keychain, 
    ],
    price: "Rp. 8.000",
  },
  {
    id: 3,
    name: "Tote Bag TEDx Special Edition",
    description:
      "Embrace creativity on the go with the TEDx UNS Special Edition tote bag. A perfect blend of functionality and flair, this bag is your go-to companion for all your endeavors, whether at the office or the next big event!",
    imgSrc: [Totebag],
    price: "Rp. 30.000",
  },
  {
    id: 4,
    name: "Sticker Pack TEDx Special Edition",
    description:
      "Unleash your creativity with the TEDx UNS Special Edition sticker pack! Packed with vibrant designs and inspiring messages, these stickers are perfect for personalizing your belongings and spreading ideas worth sharing!",
    imgSrc: [Sticker],
    price: "Rp. 10.000",
  },
  {
    id: 5,
    name: "Baseball Cap TEDx Special Edition",
    description:
      "Top off your look with the TEDx UNS Special Edition cap! This stylish accessory not only shields you from the sun but also showcases your passion for innovative ideas and inspiring conversations.",
    imgSrc: [BaseballCap],
    price: "Rp. 35.000",
  },
  {
    id: 5,
    name: "Bundling Package",
    description:
      "Unlock the ultimate experience with our TEDx UNS Special Edition bundle! Combining exclusive items like a stylish tote bag, inspiring stickers, and a trendy cap, this package is designed for those who embrace innovation and creativity in every aspect of their lives.",
    imgSrc: [
      Bundling,
      Bundling2,
      Bundling3,
    ],
    price: "",
  },
];
