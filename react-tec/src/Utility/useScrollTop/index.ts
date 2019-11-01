import { useEffect } from 'react'

import { RouteComponentProps } from 'react-router-dom'

const useScrollTop = (location: RouteComponentProps['location']) => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])
}

export default useScrollTop
