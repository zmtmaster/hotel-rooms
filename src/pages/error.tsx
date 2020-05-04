import React from 'react';
import { Link } from 'react-router-dom';
import Hero, { HType } from 'components/hero';
import Banner from 'components/banner';
import { ROUTES } from 'constants/internal';

const Error = () => {
	return (
		<Hero hero={HType.Default}>
			<Banner title="404" subtitle="page not found">
				<Link className="btn-primary" to={ROUTES.HOME}>
					Return home
				</Link>
			</Banner>
		</Hero>
	);
};

export default Error;
