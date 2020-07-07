export const mockOnScroll = () => {
	const { scrollTo } = window
	beforeAll(() => {
		// Delete the existing
		delete window.scrollTo
		// Replace with custom value
		window.scrollTo = jest.fn()
	})
	afterAll(() => {
		// Restore original
		window.scrollTo = scrollTo
	})
}
