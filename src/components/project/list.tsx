import * as React from 'react'
import '../../assets/scss/list.scss'

import { Pages } from "../public/pages";

// 类组件
export class List extends React.Component {
  render() {
    return (
      <div>
        <article className="ts-list">
          <section>1</section>
          <section>2</section>
          <section>3</section>
          <section>4</section>
          <section>5</section>
          <section>6</section>
          <section>7</section>
          <section>8</section>
          <section>9</section>
          <section>10</section>
        </article>
        <Pages total="30" current="1" pageTotal="3"></Pages>
      </div>
    );
  }
}
