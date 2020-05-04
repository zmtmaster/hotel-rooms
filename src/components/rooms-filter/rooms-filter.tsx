import React, { useContext, useReducer, useCallback } from 'react';

import { reducer, initialState, FilterArg } from 'reducers/filter';
import { RoomContext } from 'contexts/rooms';
import { ON_FORM_INPUT_CHANGE, FILTER_ROOMS } from 'constants/actionsTypes';
import { useRoomTypes } from 'hooks';

import {
	Container,
	Form,
	FormGroup,
	Select,
	Input,
	SizeInputs,
	SizeInput,
	SingleExtra,
} from './style';
import Title from 'components/title';

const RoomsFilter = () => {
	const { dispatch } = useContext(RoomContext);
	const { roomTypes, guessTypes } = useRoomTypes();
	const [state, set] = useReducer(reducer, initialState);
	const {
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = state;
	const onFilter = useCallback(() => {
		dispatch?.({ type: FILTER_ROOMS, payload: state as FilterArg });
	}, [dispatch, state]);

	const onChange = useCallback(
		(event) => {
			const { target } = event;
			const value =
				target.type === 'checkbox'
					? (target as HTMLInputElement).checked
					: (target as HTMLInputElement).value;
			const { name } = target as HTMLInputElement;

			set({ type: ON_FORM_INPUT_CHANGE, payload: { name, value } });
		},
		[set]
	);

	return (
		<Container>
			<Title title="Search rooms" />
			<Form>
				<FormGroup>
					<label htmlFor="type">room type</label>
					<Select name="type" id="type" value={type} onChange={onChange}>
						{roomTypes.map((item: string, key) => (
							<option key={key} value={item}>
								{item}
							</option>
						))}
					</Select>
				</FormGroup>
				<FormGroup>
					<label htmlFor="capacity">Guest</label>
					<Select
						name="capacity"
						id="capacity"
						value={capacity}
						onChange={onChange}
					>
						{guessTypes.map((item: string, key) => (
							<option key={key} value={item}>
								{item}
							</option>
						))}
					</Select>
				</FormGroup>
				<FormGroup>
					<label htmlFor="price">room price ${price}</label>
					<Input
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						type="range"
						value={price}
						onChange={onChange}
					/>
				</FormGroup>
				<FormGroup>
					<label htmlFor="size">room size</label>
					<SizeInputs>
						<SizeInput
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={onChange}
						/>
						<SizeInput
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={onChange}
						/>
					</SizeInputs>
				</FormGroup>
				<FormGroup>
					<SingleExtra>
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={onChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</SingleExtra>
					<SingleExtra>
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={onChange}
						/>
						<label htmlFor="pets">pets</label>
					</SingleExtra>
				</FormGroup>
				<FormGroup>
					<div className="btn-primary" onClick={onFilter}>
						Filter
					</div>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default RoomsFilter;
