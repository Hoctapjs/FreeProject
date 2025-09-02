const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "." });

  eleventyConfig.addFilter("date", (value, format = "yyyy-LL-dd") => {
    const d = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(d).toFormat(format);
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  };
};
