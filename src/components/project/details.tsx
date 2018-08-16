import * as React from 'react'

export interface ProjectInfo {
  title: string,
  context: string
}

// 类组件
export class Details extends React.Component {
  constructor(id: string) {
    super(id);
    this.id = id;
    // this.state = {}; // 本地状态
  }

  id: string; // 产品ID

   // 产品信息
  private _info: ProjectInfo;
  get Info(): ProjectInfo {
    return this._info;
  }
  set Info(info: ProjectInfo) {
    this._info = info;
  }

  // 挂载时，即在组件输出被渲染到 DOM 之后运行
  componentDidMount() {

    // 设置本地状态
    this.setState({});

    // 设置本地状态
    // prevState 上一次状态值
    // props 更新时的props
    this.setState((prevState, props) => {
      return {};
    });
  }

  // 卸载时，
  componentWillUnmount() {}

  render() {
    return (
      <div className="details">
        <div className="details-title">{this.Info.title}</div>
        <div className="details-context">{this.Info.context}</div>
      </div>
    );
  }
}
