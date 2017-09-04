const fs = require("fs");

const SIDE = 360;
const LD = SIDE * 2;
const SD = SIDE * Math.sqrt(3);
const SP = 90;

let index = 0;

const hex = (x = 0, y = 0) => {
  const points = [
    [543, 625.769145],
    [183, 625.769145],
    [3, 314],
    [183, 2.230855],
    [543, 2.230855],
    [723, 314]
  ];

  const adjustedPoints = points.map(pair => [pair[0] + x, pair[1] + y]);

  return `
	<g>
		<polygon 
			points="${adjustedPoints.join(" ")}" 
			x="${x}"
			y="${y}"
			fill="white" 
			stroke="black" 
			stroke-width="1"/>
		<!-- <text font-size="200" x="${adjustedPoints[0][0] -
      SIDE / 2}" y="${adjustedPoints[0][1] - LD / 2}">${index++}</text> -->
	</g>
	`;
};

function gen() {
  return `
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-2000 -2000 5000 5000">
	${hex()}
	${hex(LD - SIDE / 2 + SP, SD / 2 + SP / 2)}
	${hex(LD - SIDE / 2 + SP, -1 * (SD / 2 + SP / 2))}
	${hex(LD - SIDE / 2 + SP, -3 * (SD / 2 + SP / 2))}
	${hex(-1 * (LD - SIDE / 2 + SP), -3 * (SD / 2 + SP / 2))}
	${hex(LD - SIDE / 2 + SP, 3 * (SD / 2 + SP / 2))}
	${hex(-1 * (LD - SIDE / 2 + SP), SD / 2 + SP / 2)}
	${hex(-1 * (LD - SIDE / 2 + SP), 3 * (SD / 2 + SP / 2))}
	${hex(-1 * (LD - SIDE / 2 + SP), -1 * (SD / 2 + SP / 2))}
	${hex(-2 * (LD - SIDE / 2 + SP), 0)}
	${hex(2 * (LD - SIDE / 2 + SP), 0)}
	${hex(-2 * (LD - SIDE / 2 + SP), 2 * (SD / 2 + SP / 2))}
	${hex(2 * (LD - SIDE / 2 + SP), 2 * (SD / 2 + SP / 2))}
	${hex(-2 * (LD - SIDE / 2 + SP), -2 * (SD / 2 + SP / 2))}
	${hex(2 * (LD - SIDE / 2 + SP), -2 * (SD / 2 + SP / 2))}
	${hex(0, -2 * (SD / 2 + SP / 2))}
	${hex(0, 2 * (SD / 2 + SP / 2))}
	${hex(0, -4 * (SD / 2 + SP / 2))}
	${hex(0, 4 * (SD / 2 + SP / 2))}
	</svg>
	`;
}

fs.writeFileSync("./board.svg", gen());
