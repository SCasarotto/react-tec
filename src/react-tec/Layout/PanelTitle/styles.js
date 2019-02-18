import { colors } from './../../../config/styles'

export default {
    container: {
        width: '100%',
        backgroundColor: colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        marginBottom: 20,
        borderBottom: `1px solid ${colors.lightGray}`,
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        marginTop: 0,
        marginBottom: 0,
        color: colors.primary,
        lineHeight: 1,
        fontWeight: 300,

        '@media (max-width: 1000px)': {
            fontSize: 28,
        },
        '@media (max-width: 800px)': {
            fontSize: 24,
        },
        '@media (max-width: 650px)': {
            fontSize: 20,
        },
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 300,
        marginBottom: 0,
        marginTop: 0,
    },
    componentContainer: {
        width: 'auto',
    },
}
