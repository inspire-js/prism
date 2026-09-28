export default {
	overrides: {
		// A peer dependency: the demo deck needs it, but nudeps maps only dependencies by default
		"@inspirejs/core": { include: true },
	},
};
