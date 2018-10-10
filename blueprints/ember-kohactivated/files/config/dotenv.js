module.exports = function (/* env */) {
  return {
    clientAllowedKeys: [
      <%= allowedKeys %>
    ],
    failOnMissingKey: false
  };
};
