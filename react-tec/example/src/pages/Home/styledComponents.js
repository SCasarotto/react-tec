import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const LinkWrapper = styled.div`
	display: flex;
`
export const Icon = styled(FaGithub)`
	display: block;
	margin-left: 10px;
	font-size: 20px;
	color: ${(props) => props.theme.black};
`
