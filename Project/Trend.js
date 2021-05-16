var request = require('request');
var client_id = 'ID!!';
var client_secret = 'PW!!';
var api_url = 'https://openapi.naver.com/v1/datalab/search';
var request_body = {
    "startDate": "2021-01-01",
    "endDate": "2021-05-14",
    "timeUnit": "week",
    "keywordGroups": [
        {
            "groupName": "머니게임",
            "keywords": [
                "머니게임",
                "파이",
                "육지담"
            ]
        },
        {
            "groupName": "가짜사나이",
            "keywords": [
                "가짜사나이",
                "꽈뚜룹",
                "에이전트H"
            ]
        }
    ]
};

request.post({
        url: api_url,
        body: JSON.stringify(request_body),
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Content-Type': 'application/json'
        }
    },
    function (error, response, body) {
        console.log(response.statusCode);
        console.log(body);
    });