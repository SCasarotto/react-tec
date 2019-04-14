import styled from 'styled-components'

export const BodyContainer = styled.div`
	${(props) => {
		const { sidebarWidth } = props
		return `
            position: relative;
            width: calc(100% - ${sidebarWidth}px);
            min-height: 100%;
            margin-left: ${sidebarWidth}px;
        `
	}}
`
