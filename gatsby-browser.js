// trigger an immediate page refresh when an update is found
exports.onServiceWorkerUpdateReady = () => {
    if (
      window.confirm(
        "This site has been updated with new data. Do you wish to reload the site to get the new data?"
      )
    ) {
      window.location.reload(true);
    }
  };