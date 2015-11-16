'use strict'


function ItemModel(obj){
  this.id = obj? obj.id : 0
  this.title = obj? obj.title : ''
  this.description = obj? obj.description : ''
  this.likes = obj? obj.stats_number_of_likes : 0
  this.plays = obj? obj.stats_number_of_plays : 0
  this.comments = obj? obj.stats_number_of_comments : 0
  this.duration = obj? obj.duration : 0
  this.tags = (obj && obj.tags.length) ? obj.tags.toLowerCase().split(',') : []
}

function ListModel(){
  this.originalItems = []
  this.items = []
  this.tags = {}
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
  if(value === 'all'){
    this.items = this.originalItems
    return
  }
  this.items = this.originalItems.filter( (item) =>{
    return item.tags.some((t) =>{
      return t === value
    })
  })
}

module.exports = {
  ItemModel: ItemModel,
  ListModel: ListModel
}
