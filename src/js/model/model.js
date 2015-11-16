'use strict'

function ListModel(){
  this.originalItems = []
  this.items = []
  this.tags = {'all': true}
}

ListModel.prototype.addItem = function(item){
  this.items.push(item)
  this.originalItems.push(item)
  if(item.tags.length){
    item.tags.forEach((t) =>{
      if(!this.tags.hasOwnProperty(t) && t !== ''){
        this.tags[t] = true
      }
    })
  }
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

ListModel.prototype.filterBy = function(value){
  if(value === 'all') return
  this.items = this.originalItems.filter( (item) =>{
    return item.tags.some((t) =>{
      return t === value
    })
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
  this.tags = obj.tags.toLowerCase().split(',')
}

module.exports = {
  ListModel: ListModel,
  ItemModel: ItemModel
}
