import React, { Component } from "react";
import Gallery from "react-photo-gallery";

export default class Sample extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}
const PHOTO_SET = [
  {
    src: "http://example.com/example/img1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://example.com/example/img2.jpg",
    width: 1,
    height: 1
  }
];
