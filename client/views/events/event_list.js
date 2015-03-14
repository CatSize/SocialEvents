var eventData = [
  {
    title: 'Собрание побухать',
    url: '/'
  }, 
  {
    title: 'Сегодня мы играем в шашки',
    url: '/'
  }, 
  {
    title: 'Приглашаю на собрание в парке',
    url: '/'
  }
];
Template.eventList.helpers({
  events: eventsData
});