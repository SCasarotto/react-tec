export const mockOnScroll = () => {
	const { scrollTo } = window
	beforeAll(() => {
		// Replace with custom value
		window.scrollTo = jest.fn()
	})
	afterAll(() => {
		// Restore original
		window.scrollTo = scrollTo
	})
}
