module.exports = {
  output: 'standalone',
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/bylaws": { page: "/bylaws" },
      "/donate": { page: "/donate" },
      "/our-team": { page: "/our-team" },
      "/serve-on-the-board": { page: "/serve-on-the-board" },
      "/store": { page: "/store" },
      "/volunteer": { page: "/volunteer" },
      "/vendor-registration": { page: "/vendor-registration" },
      "/gold-membership": { page: "/gold-membership" },
    };

    return paths;
  },
};
