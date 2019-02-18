import { colors } from './../../../config/styles'

export default {
    button: {
        position: 'relative',
        display: 'block',
        width: '100%',
        fontSize: '18px',
        padding: '5px 20px',
        textAlign: 'center',
        borderTop: `1px solid ${colors.primary}`,
        borderRight: `1px solid ${colors.primary}`,
        borderBottom: `1px solid ${colors.primary}`,
        borderLeft: `1px solid ${colors.primary}`,
        cursor: 'pointer',
        borderRadius: 5,

        color: colors.white,
        backgroundColor: colors.primary,
        transition: 'color 0.2s ease-in, background-color 0.2s ease-in, border-color 0.2s ease-in',

        ':hover': {
            color: colors.white,
            backgroundColor: colors.darkRed,
            borderTop: `1px solid ${colors.darkRed}`,
            borderRight: `1px solid ${colors.darkRed}`,
            borderBottom: `1px solid ${colors.darkRed}`,
            borderLeft: `1px solid ${colors.darkRed}`,
        }
    },
    disabled: {
        color: colors.lightGray,
        borderTop: `1px solid ${colors.lighterGray}`,
        borderRight: `1px solid ${colors.lighterGray}`,
        borderBottom: `1px solid ${colors.lighterGray}`,
        borderLeft: `1px solid ${colors.lighterGray}`,
    },
}