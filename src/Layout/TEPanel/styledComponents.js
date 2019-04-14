import styled from 'styled-components'

export const Container = styled.div`
	${(props) => {
		const { theme, size } = props

		let styles = `
            position: relative;
            background-color: ${theme.white};
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;

            padding: 30px;
            margin-bottom: 30px;

            @media (max-width: 800px) {
                padding: 25px;
                margin-bottom: 25px;
            }
            @media (max-width: 650px) {
                padding: 20px;
                margin-bottom: 20px;
            }
            @media (max-width: 450px) {
                padding: 15px;
                margin-bottom: 15px;
                border-radius: 3px;
            }
        `

		switch (size) {
			case 'full':
				styles += `width: 100%;`
				break
			case 'two-third':
				styles += `
                    width: calc(66.666% - 20px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
				break
			case 'half':
				styles += `
                    width: calc(50% - 15px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
				break
			case 'third':
				styles += `
                    width: calc(33.333% - 10px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
				break
			default:
				styles += `width: 100%;`
				break
		}

		return styles
	}}
`
