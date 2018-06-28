import Mock from "mockjs";

let errorObj = {
  code: 0,
  msg: 'error message',
  data: {}
};

Mock.mock('/api/list', Object.assign(errorObj, {
  'list|10-50': [
    {'id:+1': 1},
    {'title': '@cname'},
    {'createTime': '@date("yyyy-MM-dd")'},
    {'description': '去我俄忍天有噢跑阿算的发个号就看了再先从不你没'}
  ]
}));

export default Mock;
