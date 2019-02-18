import { colors } from './../../../config/styles'

export default {
    container: {
        position: 'relative',
        width: '100%',
        backgroundColor: colors.white,
        paddingLeft: 30,
        boxShadow: colors.shadowBottom,

        '@media (max-width: 800px)': {
            paddingLeft: 25,
        },
        '@media (max-width: 650px)': {
            paddingLeft: 20,
        },
        '@media (max-width: 450px)': {
            paddingLeft: 15,
        }
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        // borderTop 			: `1px solid ${colors.lightGray}`,
        paddingRight: 30,

        '@media (max-width: 800px)': {
            height: 70,
            paddingRight: 25,
        },
        '@media (max-width: 650px)': {
            height: 65,
            paddingRight: 20,
        },
        '@media (max-width: 450px)': {
            height: 60,
            paddingRight: 15,
        }
    },
    title: {
        fontSize: 36,
        color: colors.primary,
        fontWeight: 100,
        letterSpacing: 0.5,
        marginTop: 0,
        marginBottom: 0,

        '@media (max-width: 1000px)': {
            fontSize: 32,
        },
        '@media (max-width: 800px)': {
            fontSize: 28,
        },
        '@media (max-width: 650px)': {
            textAlign: 'left',
            fontSize: 24,
        },
        '@media (max-width: 450px)': {
            fontSize: 20,
        }
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 300,
    },
    componentContainer: {
        width: 'auto',
    }
}