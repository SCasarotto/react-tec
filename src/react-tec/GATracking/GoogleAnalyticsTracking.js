//
//TE Version 0.2.0
//

//TODO: Check if this should really be something that just simply returns children and not wrapping something.....

import React from 'react'
import GoogleAnalytics from 'react-ga'

import settings from './../../config/settings'

GoogleAnalytics.initialize(settings.GOOGLE_ANALYTICS_KEY, { debug: false })

const GoogleAnalyticsTracking = (WrappedComponent) => {
    const trackPage = (page) => {
        GoogleAnalytics.set({ page })
        GoogleAnalytics.pageview(page)
    }

    const HOC = (props) => {
        //TODO: Add "Routes to Exclude".
        //
        // Initial thoughts
        // - Array of strings and Use react-router matchPath on each string
        //

        const { pathname } = props.location
        //Disable on dev
        const { dev } = settings
        if (!dev) {
            trackPage(pathname)
        }

        return (
            <WrappedComponent {...props} />
        )
    }

    return HOC
}

export default GoogleAnalyticsTracking