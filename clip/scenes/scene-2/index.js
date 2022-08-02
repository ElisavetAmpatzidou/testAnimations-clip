import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { moveLeft } from './../../library/moveLeft';
import { scale } from './../../library/scale';
import { scaleXY } from '../../library/scaleXY';
import { fontSize } from './../../library/fontSize';
import { scaleX } from "../../library/scaleX";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root2",
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
clip.addIncident(moveLeft("0%",".wrapper",500),0)
clip.addIncident(scale(1.5,".c1 .object",duration),800)

clip.addIncident(scaleXY(1.5,".c2 .object",duration),800)

clip.addIncident(scaleX(1.5,".c3 .object",duration),800)

clip.addIncident(scale(1.5,".c4 .object",duration),800)

clip.addIncident(fontSize("25px",".c5 .object",duration),800)

clip.addIncident(moveLeft("100%",".wrapper",500,duration),2500)
export default clip;
