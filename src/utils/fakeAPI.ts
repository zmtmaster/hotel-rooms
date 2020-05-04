import { default as data, format, Room } from './data';

/**
 * This function will be replaced by a real fetch()
 */
function fetchRooms(): Promise<Room[]> {
	return new Promise((resolve) => {
		const fake = setTimeout(() => {
			resolve(format(data));
			clearTimeout(fake);
		}, 2500);
	});
}

export default function fetchResources() {
	const roomsPromise = fetchRooms();

	return {
		rooms: wrapPromise(roomsPromise),
	};
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Throwing a Promise to be handled by Suspense component.
// Real implementations can be significantly more complex.
function wrapPromise(promise: Promise<any>): { read: Function } {
	let status = 'pending';
	let result: any;
	const suspender = promise.then(
		(r) => {
			status = 'success';
			result = r;
		},
		(e) => {
			status = 'error';
			result = e;
		}
	);
	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'error') {
				throw result;
			} else if (status === 'success') {
				return result;
			}
		},
	};
}
