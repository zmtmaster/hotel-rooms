import styled, { css } from 'styled-components/macro';
import { isUndefined, isNull } from 'lodash';

import defaultBcg from 'images/defaultBcg.jpeg';
import Room2 from 'images/room-2.jpeg';

export enum HType {
	Default = 1,
	Room = 2,
}

interface HeroProps {
	type: HType;
	uri?: string | null | undefined;
}

const base = css`
	min-height: calc(100vh - 66px);
	background: url('./images/defaultBcg.jpeg') center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Header = styled.header<HeroProps>`
	${(props) => {
		const { type, uri } = props;

		if (!isNull(uri) && !isUndefined(uri)) {
			return `
				${base}
				min-height: 60vh;
				background: url(${uri}) center/cover no-repeat;
			`;
		}

		if (!isNull(type) && !isUndefined(type)) {
			if (type === HType.Room) {
				return `
						${base}
						min-height: 60vh;
						background: url(${Room2}) center/cover no-repeat;
					`;
			}

			return `
					${base}
					background-image: url(${defaultBcg});
			`;
		}
	}}
`;
