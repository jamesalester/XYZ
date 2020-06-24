import React, { useState, useEffect } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import data from '../../resources/bricks';

import style from './Project.module.css';

const Project = (props) => {
	let history = useHistory();
	let { projectId } = useParams();
	const [project, setProject] = useState({});
	const [images, setImages] = useState();
	const [codeBlock, setCodeBlock] = useState();

	useEffect(() => setProject(data[projectId]), [projectId]);

	useEffect(() => {
		if (!project.images) return;

		const newImages = project.images.map((image, index) => {
			const imageComponent = <img className={style.headerImage} src={image} alt={project.title} />;
			return project.links ? (
				<a href={project.links[index]} target="_ blank">
					{imageComponent}
				</a>
			) : (
				imageComponent
			);
		});
		setImages(newImages);
	}, [project.images, project.links, project.title]);

	useEffect(() => {
		if (!project.code) return;

		const newCodeBlock = (
			<iframe
				title="Snakes and Ladders"
				className={style.codeBlock}
				height="600px"
				width="100%"
				src={project.code}
				scrolling="no"
				frameborder="no"
				allowtransparency="true"
				allowfullscreen="true"
				sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
			/>
		);
		setCodeBlock(newCodeBlock);
	}, [project.code]);

	return (
		<div className={style.container}>
			<div className={style.headerContainer}>
				<div className={style.titleContainer}>
					<h1 className={style.heading}>{project.title}</h1>
					<div className={style.underline} />
				</div>
				<div className={style.infoContainer}>
					<p>{project.description}</p>
				</div>
			</div>
			{images}
			{codeBlock}
			<Footer clicked={history.goBack} canReturn />
		</div>
	);
};

export default withRouter(Project);
