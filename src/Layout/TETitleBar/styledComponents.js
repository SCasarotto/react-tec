import styled from 'styled-components'

export const Container = styled.div`
    ${(props) => {
        const { theme } = props
        return `
            position: relative;
            width: 100%;
            background-color: ${theme.white};
            padding-left: 30px;
            box-shadow: ${theme.shadowBottom};

            @media (max-width: 800px) {
                padding-left: 25px;
            }
            @media (max-width: 650px) {
                padding-left: 20px;
            }
            @media (max-width: 450px) {
                padding-left: 15px;
            }
        `
    }}
`
export const Content = styled.div`
    ${(props) => {
        return `
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 80px;
            padding-right: 30px;

            @media (max-width: 800px) {
                height: 70px;
                padding-right: 25px;
            }
            @media (max-width: 650px) {
                height: 65px;
                padding-right: 20px;
            }
            @media (max-width: 450px) {
                height: 60px;
                padding-right: 15px;
            }
        `
    }}
`
export const Title = styled.h1`
    ${(props) => {
        const { theme } = props
        return `
            font-size: 36px;
            margin-top: 0px;
            margin-bottom: 0px;
            color: ${theme.primary};

            @media (max-width: 1000px) {
                font-size: 32px;
            }
            @media (max-width: 800px) {
                font-size: 28px;
            }
            @media (max-width: 650px) {
                font-size: 24px;
            }
            @media (max-width: 450px) {
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
export const Subtitle = styled.h2`
    ${(props) => {
        return `
            font-size: 22px;
            margin-bottom: 0px;
            margin-top: 0px;
        `
    }}
`
