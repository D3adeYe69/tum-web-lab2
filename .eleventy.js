module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("reset.css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("products", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/products/*.md")
      .sort((a, b) => Number(a.data.id) - Number(b.data.id));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

