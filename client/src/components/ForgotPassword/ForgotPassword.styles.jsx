import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const ForgotPasswordContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);

	& > *:first-child {
		margin-bottom: var(--m-S);
	}
`

export const Form = styled.form`
	margin-bottom: var(--m-XS);
	label {
		margin-right: var(--m-XS);
	}
`

export const EmailInput = styled.input`
	padding: 0.3rem;
	font-family: var(--fontMain);
	font-size: 1.125em;
`

export const SubmitButton = styled.button`
	padding: 0.4rem;
	border-radius: var(--bRadSm);
	border: none;
	transform: translateY(0);
	transition: transform 0.1s;

	&:active {
		transform: translateY(1px);
	}

	margin-bottom: var(--m-XS);
`
