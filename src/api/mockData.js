import Mock from "mockjs";


Mock.setup({
  timeout: '100 - 350'
})


Mock.mock('/api/list', Object.assign({}, {
  'list|10': [
    { 'id|+1': 1, 'title': '@cname', 'createTime': '@date("yyyy-MM-dd")', 'description': '@cparagraph' }
  ]
}));

export default Mock;
