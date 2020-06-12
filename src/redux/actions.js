
// Actions
const addSiteStatus = statusObj => ({
    type: 'ADD_SITE_STATUS',
    payload: statusObj
});

// Faetch
export const getSiteStatus = (site) => dispatch => {
    const config = {
      method: 'GET',
      mode: 'cors'
    };

    fetch(site, config)
      .then(r => dispatch(addSiteStatus({ site: site, status: r.status})));
};
