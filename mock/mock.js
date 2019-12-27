
const Mock = require("mockjs");

const Random = Mock.Random;

const {mockXHR} = Mock;
console.log(mockXHR);

const data = function (opt) {
  console.log('opt',opt);
  let articles = [];
  for (let i=0; i<30; i++) {
    let newArcticles = {
      title: Random.csentence(5,30),
      author_name: Random.cname,
      date: Random.date() + ' '+ Random.time(),
      pic: Random.dataImage('300x250','图片'),
      phone: Random.phone
    }
    articles.push(newArcticles);
  }
  return {
    error_code: '200',
    data: articles,
    message: 'success'
  }
}

Mock.mock('/user',/post|get/i,data);