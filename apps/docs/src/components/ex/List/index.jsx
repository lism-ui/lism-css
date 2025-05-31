import { Lism } from 'lism-css/react';
import './style.scss';

export default function List({ tag = 'ul', children, ...props }) {
	return (
		<Lism tag={tag} lismClass='c--list' {...props}>
			{children}
		</Lism>
	);
}
