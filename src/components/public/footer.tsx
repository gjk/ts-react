import * as React from 'react'

export interface FooterProps {
  serverTel: string
}

// 类组件
export class Footer extends React.Component<FooterProps, {}> {
  render() {
    return (
      <footer>
        <div>&copy; 2018-2028 版权所有，你猜是谁</div>
        <div>服务热线：{this.props.serverTel}</div>
        <div>随便啥啦</div>
      </footer>
    );
  }
}
