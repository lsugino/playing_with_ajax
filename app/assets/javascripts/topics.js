$(document).ready(function(){

$('.new_topic').on('submit', saveTopic)






})

var saveTopic = function(submitEvent) {
  submitEvent.preventDefault();
  saveToDatabase(submitEvent)
  // debugger
}

var saveToDatabase = function(data) {
  $.ajax({
    url: '/topics',
    type: 'post',
    data: {topic: { title: data.currentTarget[2].value } },
    success: loadToPage,
    failure: giveError
  })
}

var loadToPage = function(topic) {
  topicDiv = $('.topic-template').clone().html(topic.title)
  $('#list').append(topicDiv)
  console.log('this is fucking working ')
}

var giveError = function() {
  console.log('this is not working')
}