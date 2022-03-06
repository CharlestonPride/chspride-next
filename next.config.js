module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/bylaws": { page: "/bylaws" },
      "/donate": { page: "/donate" },
      // "/friends-of-pride": { page: "/friends-of-pride" },
      "/mailing-list": { page: "/mailing-list" },
      "/our-team": { page: "/our-team" },
      "/serve-on-the-board": { page: "/serve-on-the-board" },
      "/store": { page: "/store" },
      "/volunteer": { page: "/volunteer" },
    };

    return paths;
  },
};
