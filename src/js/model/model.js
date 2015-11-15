'use strict'

function ListModel(){
  this.items = []
}

ListModel.prototype.addItem = function(item){
  this.items.push(item)
}

ListModel.prototype.sortBy = function(value){
  this.items.sort(function(a, b){
    //if(value === 'duration'){
      //return +a[value] - +b[value]
    //}else{
      return +b[value.toLowerCase()] - +a[value.toLowerCase()]
    //}
  })
}

function ItemModel(obj){
  this.id = obj.id
  this.title = obj.title
  this.description = obj.description
  this.user_name= obj.user_name
  this.user_url= obj.user_url
  this.likes = obj.stats_number_of_likes
  this.plays = obj.stats_number_of_plays
  this.comments = obj.stats_number_of_comments
  this.duration = obj.duration
}

module.exports = {
  ListModel: ListModel,
  ItemModel: ItemModel
}
