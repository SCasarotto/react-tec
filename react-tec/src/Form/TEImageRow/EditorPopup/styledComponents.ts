import styled from 'styled-components'
import { FaUndo, FaRedo } from 'react-icons/fa'

import TERow from '../../TERow'
import TEButton from '../../TEButton'

export const Container = styled.div`
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 15px;
`
export const Row = styled(TERow)`
	text-align: center;
`
export const RotateButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const RotateButton = styled(TEButton)`
	width: auto;
	margin-left: 10px;
	margin-right: 10px;
`
export const UndoRotationIcon = styled(FaUndo)`
	display: block;
`
export const RedoRotationIcon = styled(FaRedo)`
	display: block;
`
