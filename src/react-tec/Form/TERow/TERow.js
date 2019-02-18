//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Row } from './styledComponents'

const TERow = (props) => {
    const { children, ...rest } = props

    return <Row {...rest}>{children}</Row>
}

TERow.propTypes = {
    size: PropTypes.string,
    last: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
}

TERow.defaultProps = {
    size: 'full',
    last: false,
}

export default TERow
