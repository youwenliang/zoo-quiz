function importAll(r) {
  let svgImages = {};
  r.keys().forEach((item, index) => { svgImages[item.replace('./', '')] = r(item); });
  return svgImages;
}
const svgImages = importAll(require.context('./images', true));

export default svgImages;