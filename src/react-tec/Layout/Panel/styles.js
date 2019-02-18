import { colors } from './../../../config/styles'

export default {
    container: (size) => {
        let style = {
            position: 'relative',
            backgroundColor: colors.white,
            borderRadius: 5,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px',

            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 30,
            paddingBottom: 30,
            marginBottom: 30,

            '@media (max-width: 800px)': {
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 25,
                paddingBottom: 25,
                marginBottom: 25,
            },
            '@media (max-width: 650px)': {
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                marginBottom: 20,
            },
            '@media (max-width: 450px)': {
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,
                marginBottom: 15,
                borderRadius: 3,
            },
        }

        switch (size) {
            case 'full':
                style = { ...style, width: '100%' }
                break
            case 'two-third':
                style = {
                    ...style,
                    width: `calc(66.666% - 20px)`,
                    '@media (max-width: 700px)': {
                        width: '100%',
                    },
                }
                break
            case 'half':
                style = {
                    ...style,
                    width: `calc(50% - 15px)`,

                    '@media (max-width: 700px)': {
                        width: '100%',
                    },
                }
                break
            case 'third':
                style = {
                    ...style,
                    width: `calc(33.333% - 10px)`,
                    '@media (max-width: 700px)': {
                        width: '100%',
                    },
                }
                break
            default:
                style = { ...style, width: '100%' }
                break
        }

        return style
    },
}
