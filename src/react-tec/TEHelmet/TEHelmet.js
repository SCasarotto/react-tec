//
//TE Version 0.2.0
//

//
// TODO:
// - Review good defaults
// - Setup good context provider
//

//Bug: https://github.com/nfl/react-helmet/issues/373#issuecomment-392650715

import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class TEHelmet extends Component {
    render() {
        const { charSet = 'utf-8', title = '', description = '' } = this.props

        return (
            <Helmet
                title={title}
                meta={[
                    {
                        name: 'charSet',
                        content: charSet,
                    },
                    {
                        name: 'description',
                        content: description,
                    },
                ]}
            />
        )
    }
}

TEHelmet.propTypes = {}

TEHelmet.defaultProps = {}

export default TEHelmet
