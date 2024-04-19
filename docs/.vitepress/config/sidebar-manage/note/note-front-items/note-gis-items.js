/**
 * gis学习笔记
 */
const baseUrl = "/pages/note/front/gis-note";

// mapbox
const mapboxConfig = [
  { text: "mapbox的简单使用说明", link: `${baseUrl}/mapbox-note-1` },
];

// openlayer
const openlayerConfig = [
  { text: "openlayer的简单使用说明", link: `${baseUrl}/openlayer-note-1` },
];

module.exports = [
  // { text: "gis学习笔记", items: [] },
  { text: "gis学习笔记", link: `${baseUrl}/` },
  { text: "mapbox", items: mapboxConfig },
  { text: "openlayer", items: openlayerConfig },
];