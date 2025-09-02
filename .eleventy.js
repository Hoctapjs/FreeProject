const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // copy nội dung public ra thẳng gốc site
  eleventyConfig.addPassthroughCopy({ "public": "." });

  eleventyConfig.addFilter("date", (value, format = "yyyy-LL-dd") => {
    const d = value instanceof Date ? value : new Date(value);
    return DateTime.fromJSDate(d).toFormat(format);
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  };
};
