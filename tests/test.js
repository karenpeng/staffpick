import {chai, expect} from 'chai'
import makeRequest from '../src/js/request/request'
import {ListModel, ItemModel} from './../src/js/model/model'
import ReactDom from 'react-dom'
import App from './../src/js/view/app'

describe('makeRequest', function(){
    
  it('should return an array of objects', function(){
    makeRequest(function(res){     
      
      expect(Array.isArray(res)).to.equal(true)
        
      res.forEach(function(o){
        expect(typeof o).to.equal('object')
      })

      expect(Object.keys(res)).to.deep.equal([
        "id",
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
        "embed_privacy"
      ])
    })
  })
})

describe('ItemModel', function(){

  it('receive an empty object should output default value', function(){
    var item = new ItemModel()     
    expect(item.id).to.equal(0)
    expect(item.title).to.equal('')
    expect(item.description).to.equal('')
    expect(item.likes).to.equal(0)
    expect(item.plays).to.equal(0)
    expect(item.comments).to.equal(0)
    expect(item.duration).to.equal(0)
    expect(item.tags).to.deep.equal([])
  })
})

describe('ListModel', function(){

  it('receive an empty object should output default value', function(){
    var list = new ListModel()     
    expect(list.items.length).to.equal(0)
    expect(list.originalItems.length).to.equal(0)
    expect(typeof list.tags).to.equal('object')
    expect(Object.keys(list.tags).length).to.equal(0)

    list.addItem(new ItemModel())
    expect(list.items.length).to.equal(1)
    expect(list.originalItems.length).to.equal(1)
    expect(typeof list.tags).to.equal('object')
    expect(Object.keys(list.tags).length).to.equal(0)
  })
})





