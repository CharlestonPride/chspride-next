const withMDX = require("@next/mdx")();
module.exports = withMDX({
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});
