import * as React from 'react'

interface PagesProp {
  current: string,
  total: string,
  pageTotal: string
}

// 类组件
export class Pages extends React.Component<PagesProp, {}> {
  render() {
    return (
      <article className="m-auto">
        <section>总页数：{this.props.pageTotal}</section>
        <section>{this.props.current}/{this.props.total}</section>
      </article>
    );
  }
}
