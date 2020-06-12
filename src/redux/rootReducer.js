export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'ADD_SITE_STATUS':
            return {
                ...state,
                [payload.site]: payload.status
            };
        default:
            return state;
    }
}