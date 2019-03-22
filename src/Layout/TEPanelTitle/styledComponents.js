import styled from 'styled-components'

export const Container = styled.div`
    ${(props) => {
        const { theme } = props
        return `
            width: 100%;
            backgroundColor: ${theme.white};
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid ${theme.lightGray};
        `
    }}
`
export const Title = styled.h1`
    ${(props) => {
        const { theme } = props
        return `
            text-align: left;
            font-size: 30px;
            margin-top: 0px;
            margin-bottom: 0px;
            color: ${theme.primary};
            line-height: 1;

            @media (max-width: 1000px) {
                font-size: 28px;
            }
            @media (max-width: 800px) {
                font-size: 24px;
            }
            @media (max-width: 650px) {
                font-size: 20px;
            }
        `
    }}
`
export const ComponentWrapper = styled.div`
    ${(props) => {
        return `
            width: auto;
        `
    }}
`
export const Subtitle = styled.p`
    ${(props) => {
        return `
            font-size: 18px;
            margin-bottom: 0px;
            margin-top: 0px;
        `
    }}
`
