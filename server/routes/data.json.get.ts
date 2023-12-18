export default defineCachedEventHandler(async () => {
	const data = (await import('../data.json')).default
	return data
}, {
	swr: true,
	maxAge: 1000 * 60 * 60,
})