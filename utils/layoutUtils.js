export function addQuiltedLayoutToExhibitImages(exhibits, options = {}) {
    const {
      maxCols = 2,
      maxRows = 2,
      allowLargeTiles = true,
    } = options;
  
    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
  
    const withLayout = {};
  
    for (const key in exhibits) {
      const exhibit = exhibits[key];
      const enhancedImages = exhibit.images.map((img) => {
        const isLargeTile = allowLargeTiles && Math.random() < 0.3;
  
        return {
          ...img,
          cols: isLargeTile ? getRandomInt(1, maxCols) : 1,
          rows: isLargeTile ? getRandomInt(1, maxRows) : 1,
        };
      });
  
      withLayout[key] = {
        ...exhibit,
        images: enhancedImages,
      };
    }
  
    return withLayout;
  }