import * as React from 'react'
import '../../assets/scss/list.scss'
import { Axios } from '../../api/axios'
import { Pages } from "../public/pages";

interface ProjectModel {
  id: number,
  title: string,
  createTime: Date,
  description: string
}

export class ProjectSection extends React.Component<ProjectModel, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<section>{this.props.id} + {this.props.title} + {this.props.createTime} + {this.props.description}</section>)
  }
}

interface ListObject {
  list: Array<object>
}

// 类组件
export class List extends React.Component<ListObject, {}> {
  constructor(props: any) {
    super(props);
  }

  listObject: Array<ProjectSection>

  // 挂载时的钩子
  componentDidMount() {
    Axios.list({}).then((data: object) => {
      if(data && data.code === 100) {
        // let listSection = data.list;
        this.listObject = data.list;
      }
    });
  }

  // 销毁时的钩子
  componentWillUnmount() {}

  render() {
    // let sectionList = (item: Array<ProjectSection>) => {
    //   return (<ProjectSection id={item.id} title={item.title} createTime={item.createTime} description={item.description}></ProjectSection>)
    // };
    return (
      <div>
        <article className="ts-list">
          {/* (this.listObject.map((item: any) => {
            (<ProjectSection id={item.id} title={item.title} createTime={item.createTime} description={item.description}></ProjectSection>)
          })) */}
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
