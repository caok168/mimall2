import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    'status': 0,
    'data': {
        "username": "ck",
        "age": 23
    },
    'msg': ''
})