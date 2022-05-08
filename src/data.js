import {
  ThunderstormOutlined,
  GrassOutlined,
  LocalFireDepartmentOutlined,
  WavesOutlined,
  Air,
  CloudOutlined,
  ForestOutlined,
  LocalCafeOutlined,
  PetsOutlined,
  BookOutlined,
  MenuBookOutlined,
  KeyboardAltOutlined,
} from "@mui/icons-material";
import windSound from "./soundtracks/wind.mp3";
import rainSound from "./soundtracks/rain.mp3";
import birdsSound from "./soundtracks/birds.mp3";
import thunderSound from "./soundtracks/thunder.mp3";
import wavesSound from "./soundtracks/waves.mp3";
import fireSound from "./soundtracks/fire.mp3";
import cafeSound from "./soundtracks/cafe.mp3";
import catSound from "./soundtracks/cat.mp3";
import keyboardSound from "./soundtracks/keyboard.mp3";
import bookSound from "./soundtracks/book.mp3";
import cricketsSound from "./soundtracks/crickets.mp3";
export const data = [
  {
    id: 1,
    name: "Rain",
    img: <CloudOutlined className="sound-icon" />,
    sound: rainSound,
  },
  {
    id: 2,
    name: "Wind",
    img: <Air className="sound-icon" />,
    sound: windSound,
  },
  {
    id: 3,
    name: "Waves",
    img: <WavesOutlined className="sound-icon" />,
    sound: wavesSound,
  },
  {
    id: 4,
    name: "Fire",
    img: <LocalFireDepartmentOutlined className="sound-icon" />,
    sound: fireSound,
  },
  {
    id: 5,
    name: "Birds",
    img: <ForestOutlined className="sound-icon" />,
    sound: birdsSound,
  },
  {
    id: 6,
    name: "Crickets",
    img: <GrassOutlined className="sound-icon" />,
    sound: cricketsSound,
  },
  {
    id: 7,
    name: "Thunder",
    img: <ThunderstormOutlined className="sound-icon" />,
    sound: thunderSound,
  },
  {
    id: 8,
    name: "Cafe",
    img: <LocalCafeOutlined className="sound-icon" />,
    sound: cafeSound,
  },
  {
    id: 9,
    name: "Purring",
    img: <PetsOutlined className="sound-icon" />,
    sound: catSound,
  },
  {
    id: 10,
    name: "Page turning",
    img: <MenuBookOutlined className="sound-icon" />,
    sound: bookSound,
  },
  {
    id: 11,
    name: "Keyboard",
    img: <KeyboardAltOutlined className="sound-icon" />,
    sound: keyboardSound,
  },
];
