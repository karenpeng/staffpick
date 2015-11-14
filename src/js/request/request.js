import request from 'superagent'

function makeRequest(cb){
  request
  .get('http://vimeo.com/api/v2/channel/staffpicks/videos.json')
  .end(function(err, res){
    if(err){
      console.log(err)
      return
    }
    cb(res.body)
  })
}

module.exports = makeRequest

