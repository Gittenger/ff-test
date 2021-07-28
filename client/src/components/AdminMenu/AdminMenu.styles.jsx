import styled from 'styled-components'

export const AdminMenuContainer = styled.ul`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 10000;
	display: none;

	&.active {
		display: block;
	}
`
