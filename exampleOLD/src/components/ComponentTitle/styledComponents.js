import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Title = styled.h2`
	display: flex;
	align-items: center;
`
export const Icon = styled(FaGithub)`
	display: block;
	margin-left: 10px;
	font-size: 20px;
	color: ${(props) => props.theme.black};
`
