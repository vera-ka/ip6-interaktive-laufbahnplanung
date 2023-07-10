import React from "react";
import Sketch from "react-p5";

let sides = 20;
let sidesArray = [];
let wheelText = ["Altenpflegehelfer/in",
    "Altenpfleger/in",
    "Anlagenmechaniker/in",
    "Anästhesietechnische/r Assistent/in",
    "Assistent/in für Geovisualisierung",
    "Assistent/in für Produktdesign",
    "Atem-, Sprech- und Stimmlehrer:in",
    "Augenoptiker/in",
    "Ausbaufacharbeiter/in",
    "Ausbaumanager/in",
    "Automobilkaufmann/-frau",
    "Außenhandelsassistent/in",
    "Bankkaufmann/-frau",
    "Baugeräteführer/in",
    "Baustoffprüfer/in",
    "Bauten- und Objektbeschichter/in",
    "Bauzeichner/in",
    "Bergbautechnologe/-in",
    "Berufsfeuerwehrmann/-frau",
    "Berufskraftfahrer/in",
    "Bestattungsfachkraft",
    "Beton- und Stahlbetonbauer/in",
    "Betriebsassistent/in im Handwerk",
    "Betriebswirt/in für Textil",
    "Betriebswirt/in für Verkehr/Logistik",
    "Betriebswirt/in im Außenhandel",
    "Binnenschiffer/-in"
];

function FortuneWheelSketch() {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < sides; i++) {
      sidesArray.push(new Side(i, wheelText[i], p5));
    }
  };

  const draw = (p5) => {
    for (let i of sidesArray) {
      i.spin();
      i.show();
    }
    //pointer
    p5.colorMode(p5.RGB);
    p5.textAlign(p5.LEFT, p5.CENTER);
    p5.stroke(0);
    p5.fill(0);
    p5.triangle(
      p5.width * 0.5 - 10,
      p5.height * 0.09,
      p5.width * 0.5 + 10,
      p5.height * 0.09,
      p5.width * 0.5,
      p5.height * 0.09 + 20
    );

    p5.textSize(17);
  };

  const mousePressed = (event) => {
    for (let i of sidesArray) {
      i.pushWheel();
    }
  };
  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
}

export default FortuneWheelSketch;

class Side {
  constructor(i, t, p5) {
    this.i = i;
    this.angle = (this.i * p5.TAU) / sides;
    this.velocity = 0;
    // rainbow colors
    this.hue = (i / sides) * 300;
    this.text = wheelText[i];
    this.p5 = p5;
  }

  show() {
    this.p5.noStroke();
    this.p5.fill(100, this.hue, 100);
    this.p5.push();
    this.p5.translate(this.p5.width * 0.5, this.p5.height * 0.5);
    this.p5.arc(
      0,
      0,
      0.8 * this.p5.height,
      0.8 * this.p5.height,
      this.angle,
      this.angle + this.p5.TAU / sides,
      this.p5.PIE
    );
    this.p5.rotate(this.angle + (this.p5.TAU / sides) * 0.5);
    this.p5.fill(0);
    this.p5.text(this.text, this.p5.width * 0.06, 0);
    this.p5.pop();
  }

  pushWheel() {
    this.velocity += 0.3;
  }

  spin() {
    this.angle += this.velocity;
    // friction force
    if (this.velocity > 0 && this.velocity > 0.0005) {
      this.velocity *= 0.99;
    } else {
      this.velocity = 0;
    }
  }
}
