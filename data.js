const questions = [
  {
    message: 'How do you feel today?',
    choice: ['happy', 'soso', 'sad']
  },
  {
    message: 'What do you need to make the adventure?',
    choice: ['courage', 'power', 'wisdom']
  },
  {
    message: 'What if you were to take it to a deserted island?',
    choice: ['knife', 'saucepan', 'mattress']
  },
  {
    message: 'How large will the trip be?',
    choice: ['domestic', 'overseas', 'no']
  },
  {
    message: 'What would you do if you had a million dollars?',
    choice: ['buy things', 'investment', 'save money']
  },
  {
    message: 'Which kind of pet would you get?',
    choice: ['animals', 'insects', 'fishes']
  },
  {
    message: 'How much sleep do you get each day? <Select the value that is closest to yours>',
    choice: ['3h', '7h', '10h']
  }
]

const characters = [
  'You are an active person. You are interested in and involved in many things.',
  'You are a showoff. You want to gain the attention of those around you at all times, but sometimes it is good to keep a low profile.',
  'You are honest. You do not lie, which gives you the trust of those around you, but you might want to know that sometimes a gentle lie is necessary.',
  'You are lazy. You have things that need to be done, but you will have a hard time moving on. First, make it your goal to accomplish small things.',
  'You are diligent. It is great that you study hard in whatever you do. Sometimes it is good to take a little breather.',
  'You have a temper. You are easily irritated by any matter. When you get irritated, try to look at your feelings objectively.',
  'You are a planner. You are able to set a firm schedule, which gives you the trust of those around you.',
  'You are an unplanned person. You do not have a plan for everything, which can cause you to lose trust. Try to train yourself to make plans from small things.',
  'You are a cautious person. You will never fail to research everything in advance and rarely make a mistake. However, you can be too cautious and get into a situation where you can\'t do anything. Be careful.',
  'You are a good-natured person. While you can be kind to everyone, you may also be overly sensitive to the needs of others. Sometimes, you should speak your mind.',
  'You are a responsible person. You are able to accomplish everything well.',
  'You are a forceful person. You may need to be forceful at times, but you also need to listen to the opinions of others.',
  'You are a romantic. You are attracted to extraordinary things. Sometimes you need to look at reality.',
  'You are a realist. You have a firm grasp of the reality of all things. However, that is not true for some people, so you might want to be careful what you say and do at times.',
  'You are a narcissist. You have a high sense of self-esteem. However, if you say too much about it to those around you, they may not like it.',
  'You are a curious person. You show interest and curiosity in all things and sometimes try to do things on your own.',
  'You are a self-motivated person. You can tackle anything on your own.',
  'You are a generous person. You can accept anything without getting angry.',
  'You hate to lose. You do not like to lose in any matter and can develop your abilities. However, it is good to be able to accept that sometimes you will lose.',
  'You are ambitious. It is great that you can strive to improve in whatever you do.',
  'You are optimistic. You are not pessimistic about any matter, but it is important to take responsibility for things that have some impact on others.',
  'You are a sociable person. You get along well with all kinds of people.',
  'You are a person of taste. You can do things better than others the first time. You do not only rely on your sense, but you also need to work hard.',
  'You are shy. It is sometimes difficult for you to open up to new people. However, you are also someone who can express yourself by taking the time to get to know each other, so try to find a way to have a long-lasting relationship.',
  'You are rough around the edges. While you have a good point about not caring about small mistakes, you could sometimes use some attention to the details of your own behavior.',
  'You are an insensitive person. Be careful that you may act without considering the feelings of others in any matter. However, there may be times when you can use your insensitivity to speak up.'
]

const requestion = {
  message: 'Would you like to run the personality test again?',
  choice: ['Yes', 'No']
}

const messages = [
  'I could see your personality.',
  'Hava a nice day! Bye bye~♪.'
]

exports.questions = questions
exports.characters = characters
exports.requestion = requestion
exports.messages = messages
