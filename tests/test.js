var chai = require('chai')
var expect = chai.expect
var makeRequest = require('../src/js/request/request')

describe('makeRequest', function(){
    
  it('should return an array of objects', function(){
    makeRequest(function(res){     
      //it('an array', function(){
        expect(Array.isArray(res)).to.equal(true)
      //}) 
      //it('of object', function(){      
        res.forEach(function(o){
          expect(typeof o).to.equal('object')
        })

        expect(Object.keys(res)).to.deep.equal(
        ["id",
        "title",
        "description",
        "url",
        "upload_date",
        "mobile_url",
        "thumbnail_small",
        "thumbnail_medium",
        "thumbnail_large",
        "user_id",
        "user_name",
        "user_url",
        "user_portrait_small",
        "user_portrait_medium",
        "user_portrait_large",
        "user_portrait_huge",
        "stats_number_of_likes",
        "stats_number_of_plays",
        "stats_number_of_comments",
        "duration",
        "width",
        "height",
        "tags",
        "embed_privacy"])
      //})
    })
  })
}) 


