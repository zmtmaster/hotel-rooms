import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	NavContainer,
	NavCenter,
	NavHeader,
	Logo,
	NavButton,
	NavIcon,
	NavLinksContainer,
} from './style';
import { ROUTES } from 'constants/internal';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen(!open);

	return (
		<NavContainer>
			<NavCenter>
				<NavHeader>
					<Link to={ROUTES.HOME}>
						<Logo />
					</Link>
					<NavButton onClick={handleToggle}>
						<NavIcon />
					</NavButton>
				</NavHeader>
				<NavLinksContainer show={open}>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>
						<Link to={ROUTES.ROOMS}>Rooms</Link>
					</li>
				</NavLinksContainer>
			</NavCenter>
		</NavContainer>
	);
};

export default Navbar;
