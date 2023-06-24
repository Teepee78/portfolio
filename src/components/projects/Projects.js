import "./Projects.css";

import rec1 from "../../assets/svg/Rectangle 42.svg";
import rec2 from "../../assets/svg/Rectangle 43.svg";

function Cards(props) {
	return (
		<div id="projects" className="project">
			<div id="project-title">
				<p className="project-title">{props.title}</p>
				<p className="project-subtitle">{props.lang}</p>
			</div>

			<div className="project-card">
				<img src={props.img} alt="placeholder" />

				<p className="project-description">{props.desc}</p>

				<div className="view-project">
					<a href={props.url} target="_blank" rel="noreferrer">
						view-project
					</a>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="Projects">
			<div className="projects-title">
				<p>projects</p>
			</div>

			<div className="projects-cards">
			<Cards
					title="FashionAI"
					lang="// Typescript(Next.JS)"
					img={rec2}
					desc="FashionAI a Generative AI tool to create physical fashion an exciting, groundbreaking opportunity, which even Elon Musk has picked up on"
					url="http://www.fashionai.org/"
				/>
				<Cards
					title="Mumble"
					lang="// Typescript(Next.JS/Node.JS)"
					img={rec1}
					desc="Mumble is a digital marketplace that connects music producers, beat makers and sound engineers to their desired clients."
					url="https://mumble.com.ng"
				/>
				<Cards
					title="Innov8IQ"
					lang="// Typescript(Node.JS))"
					img={rec2}
					desc="Innov8IQ is an application that helps UI/UX designers write compelling case studies by providing existing customizable templates and arming them with resources to easily make one from scratch"
					url="https://innov8iq.com"
				/>
				<Cards
					title="ChowAI"
					lang="// python(fastAPI)"
					img={rec1}
					desc="ChowAi is an AI-powered application that provides a wide variety of recipes for African dishes and also suggests dishes based on user-inputted ingredients."
					url="https://chowai.com"
				/>
				<Cards
					title="StreetRates"
					lang="// python(fastAPI)"
					img={rec2}
					desc="StreetRates is an application that allows users to convert currencies using the parallel bank rate. It also provides users with additional information about currency fluctuations and helps them to make informed decisions about international transactions."
					url="https://streetrates.info"
				/>
				{/* <Cards
          title="ChowAI"
          lang="// python(fastAPI)"
          img={rec1}
          desc="ChowAi is an AI-powered application that provides a wide variety of recipes for African dishes and also suggests dishes based on user-inputted ingredients."
          url="https://chowai.com"
        /> */}
				{/* <Cards
          title="StreetRates"
          lang="// python (fastAPI)"
          img={rec2}
          desc="StreetRates is an application that allows users to convert currencies using the parallel bank rate. It also provides users with additional information about currency fluctuations and helps them to make informed decisions about international transactions."
          url="https://streetrates.info"
        /> */}
			</div>
		</div>
	);
}

export default Projects;
