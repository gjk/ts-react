import * as React from 'react'

import { Footer } from "./public/footer";

export interface HelloProps {

}

// 无状态的功能组件
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// 类组件
export class Home extends React.Component {
  render() {
    return (
      <div>
        <div>我是首页噢</div>
        <div>我是banner噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <div>我是正文噢</div>
        <Footer serverTel="010-12345678"></Footer>
      </div>
    );
  }
}
