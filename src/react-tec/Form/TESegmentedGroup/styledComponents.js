import { colors } from './../../../config/styles'

export default {
    row: (inline) => {
        if (inline) {
            return {
                display: 'flex',
                justifyContent: 'space-between',
            }
        } else {
            return {}
        }
    },
    title: (inline) => ({
        width: inline ? 'auto' : '100%',
        alignSelf: inline ? 'center' : 'auto',
        textAlign: 'left',
        display: 'block',
        marginBottom: inline ? 0 : 5,
        paddingRight: inline ? 10 : 0,
        fontWeight: 100,
        letterSpacing: 0.5,
        fontSize: 18,

        '@media (max-width: 550px)' {
            fontSize: 16,
        },
    }),
    segmentedContainer: (inline) => {
        if (inline) {
            return {
                display: 'inline-block',
                width: 'auto',
                whiteSpace: 'nowrap',
                alignSelf: 'center',
            }
        } else {
            return {}
        }
    },
    labelWrapper: {
        display: 'inline-block',
        width: 'auto',
    },
    input: {
        display: 'none',
    },
    label: (first, last, checked, disabled) => {
        let style = {
            display: 'inline-block',
            width: 'auto',
            borderTop: `1px solid ${colors.lightGray}`,
            borderLeft: `1px solid ${colors.lightGray}`,
            borderRight: `1px solid ${colors.lightGray}`,
            borderBottom: `1px solid ${colors.lightGray}`,
            cursor: 'pointer',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 10,
            paddingTop: 10,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 0,
            backgroundColor: colors.white,
            fontSize: 14,
            color: colors.darkGray,
            fontWeight: 300,

            transition: 'color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in',

            ':hover': {
                color: colors.white,
                backgroundColor: colors.primary,
                borderTop: `1px solid ${colors.primary}`,
                borderLeft: `1px solid ${colors.primary}`,
                borderRight: `1px solid ${colors.primary}`,
                borderBottom: `1px solid ${colors.primary}`,
            },
            ':active': {
                color: colors.white,
                backgroundColor: colors.primary,
                borderTop: `1px solid ${colors.primary}`,
                borderLeft: `1px solid ${colors.primary}`,
                borderRight: `1px solid ${colors.primary}`,
                borderBottom: `1px solid ${colors.primary}`,
            },
        }

        if (first) {
            style = { ...style,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
            }
        }
        if (last) {
            style = { ...style,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            }
        }

        if (checked) {
            style = { ...style,
                color: colors.white,
                backgroundColor: colors.primary,
                borderTop: `1px solid ${colors.primary}`,
                borderLeft: `1px solid ${colors.primary}`,
                borderRight: `1px solid ${colors.primary}`,
                borderBottom: `1px solid ${colors.primary}`,
            }
        }

        if (disabled) {
            style = { ...style,
                cursor: 'not-allowed',
                pointerEvents: 'none',
            }

            if (!checked) {
                style = { ...style,
                    ':hover': {
                        color: colors.darkGray,
                        backgroundColor: colors.white,
                        borderTop: `1px solid ${colors.lightGray}`,
                        borderLeft: `1px solid ${colors.lightGray}`,
                        borderRight: `1px solid ${colors.lightGray}`,
                        borderBottom: `1px solid ${colors.lightGray}`,
                    },
                    ':active': {
                        color: colors.darkGray,
                        backgroundColor: colors.white,
                        borderTop: `1px solid ${colors.lightGray}`,
                        borderLeft: `1px solid ${colors.lightGray}`,
                        borderRight: `1px solid ${colors.lightGray}`,
                        borderBottom: `1px solid ${colors.lightGray}`,
                    },
                }
            }
        }

        return style
    }
}
