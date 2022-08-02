import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { moveLeft } from './../../library/moveLeft';
import { translateX } from './../../library/translateX';

const clip = new HTMLClip({
  html,
  css,
  selector: "#root1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});


const duration = 1000;
clip.addIncident(moveLeft("100%",".obj1",duration),100)
clip.addIncident(translateX("335%",".obj2",duration),100)
clip.addIncident(moveLeft("100%",".c3 .object",duration),100)
clip.addIncident(translateX("335%",".c4 .object",duration),100)

clip.addIncident(moveLeft("100%",".wrapper",500,duration),1000)
export default clip;
