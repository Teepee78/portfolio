import "./AboutMe.css";

import downArrow from "../../assets/svg/downarrow.svg";
import greenDir from "../../assets/svg/greendiricon.svg";
import mailIcon from "../../assets/svg/mail-icon.svg";
import purpleDir from "../../assets/svg/purplediricon.svg";
import rightArrow from "../../assets/svg/rightarrow.svg";

function AboutMe() {
	return (
		<div id="aboutMe" className="aboutMe">
			<div className="about">
				<p>about me</p>
			</div>

			<div className="aboutTable">
				<div className="contents">
					<div className="about-table-left">
						<div className="personal-info-title">
							<img src={downArrow} alt="down arrow"></img>
							<p>personal-info</p>
						</div>

						<div className="tableofcontent">
							<div className="bioTable">
								<img src={rightArrow} alt="right arrow"></img>
								<img src={purpleDir} alt="purple directory icon"></img>
								<p>bio</p>
							</div>
							<div className="interestsTable">
								<img src={rightArrow} alt="right arrow"></img>
								<img src={greenDir} alt="green directory icon"></img>
								<p>interests</p>
							</div>
						</div>

						<div className="contact-big">
							<img src={downArrow} alt="down arrow"></img>
							<p>contact-me</p>
						</div>
						<div className="contact-email-big">
							<img src={mailIcon} alt="mail icon"></img>
							<p>eniolatoluwalase78@gmail.com</p>
						</div>
					</div>

					<div className="personal-info">
						<div className="bio">
							<div className="bioHeader">
								<p>// personal-info</p>
								<p>/ bio</p>
								<p>personal-info</p>
								<div className="border-left"></div>
							</div>
							<p className="bioContent">
								I am a senior software engineer with over 4 years of experience in a
								variety of programming languages and frameworks.
								<br />
								<br />
								My expertise includes Python, NodeJS, TypeScript, Go, Java, Rust, C,
								React, C++, Bash, SQL, HTML, CSS and Git tools. I have
								experience working with frameworks such as FastAPI, ExpressJS, NestJS, NextJs,
								React, Django, Flask, and Bootstrap. I have experience deploying applications
								with Docker, AWS, GCP, Digital Ocean and Vercel.
								<br />
								<br />
								I am well-versed in using Git for version control and
								collaboration.
								<br />
								<br />I am a quick learner and am always looking to expand my
								skills and knowledge in the field. I am excited to continue to
								develop my skills and work on challenging and engaging projects.
							</p>
						</div>

						<div className="interests">
							<div className="interestsHeader">
								<p>// personal-info</p>
								<p>/ interests</p>
								<p>interests</p>
								<div className="border-left"></div>
							</div>
							<div className="interestsContent">
								<p className="orange-text">writing code</p>
								<p className="grey-text">watching movies</p>
								<p className="orange-text">playing games</p>
								<p className="grey-text">making music</p>
							</div>
						</div>

						<div className="personal-info-title contact-small">
							<img src={downArrow} alt="down arrow"></img>
							<p>contact-me</p>
						</div>
						<div className="contact-email contact-small">
							<img src={mailIcon} alt="mail icon"></img>
							<p>eniolatoluwalase78@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
