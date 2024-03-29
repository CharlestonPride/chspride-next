module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/bylaws": { page: "/bylaws" },
      "/donate": { page: "/donate" },
      // "/friends-of-pride": { page: "/friends-of-pride" },
      "/tacos-and-tattas": { page: "/tacos-and-tattas" },
      "/our-team": { page: "/our-team" },
      "/serve-on-the-board": { page: "/serve-on-the-board" },
      "/store": { page: "/store" },
      "/volunteer": { page: "/volunteer" },
      "/parade-registration": { page: "/parade-registration" },
      // "/pageant-registration": { page: "/pageant-registration" },
      "/pageant": { page: "/events/pageant" },
      "/vendor-registration": { page: "vendor-registration" },
      "/gold-membership": { page: "/gold-membership" },
      "/kaleidoscope": { page: "events/kaleidoscope" },
    };

    return paths;
  },
};
