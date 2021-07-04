export class Project {
  logo: string;
  title: string;
  description: string;
  timeline: string;
  expanded: string;
}

export let education : Project[] = [
	{
		logo: "arm.png",
		title: "Arm Ltd.",
		description: "Working as a Part-Time Undergraduate for Arm, with a full-time internship over the summer",
		timeline: "2020-current",
		expanded: "",
	},
	{
		logo: "imperial.jpg",
		title: "Imperial College London",
		description: "Electrical and Electronic Engineering MEng",
		timeline: "2018-2022",
		expanded: "",
	}
];

export let projects : Project[] = [
	{
		logo: "rover.jpeg",
		title: "EERover",
		description: "Built a remote-controlled rover with 4 different sensors. My team placed first in the first year project competition at Imperial College London.",
		timeline: "2019",
		expanded: "",
	},
	{
		logo: "sipnpuff.jpg",
		title: "Sip-n-Puff",
		description: "Built a Sip-n-Puff joystick for people unable to use a standard mouse. My team placed third in the second year project competition at Imperial College London.",
		timeline: "2020",
		expanded: "",
	},
	{
		logo: "gb.jpg",
		title: "Gameboy emulator",
		description: "Created an almost feature-complete emulator for the Gameboy in C++",
		timeline: "summer 2020",
		expanded: 'https://github.com/OleStrohm/gbemulator',
	},
	{
		logo: "png.png",
		title: "PNG decompressor",
		description: "A PNG decompressor made from the PNG specification. Thus implements Deflate, which is based on LZ77 and Huffman trees. Only includes the decompression as it was only used for reading png images.",
		timeline: "2017-2018",
		expanded: 'https://github.com/OleStrohm/ImageLoading',
	},
	{
		logo: "github.png",
		title: "Github projects",
		description: "My github contains all the projects I've worked on, including code and short descriptions as well as other supplementary information.",
		timeline: "",
		expanded: 'https://github.com/OleStrohm',
	}
];
