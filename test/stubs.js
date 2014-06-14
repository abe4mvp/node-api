module.exports = {
 validUpdate: {
    livestream_id: 648883,
    value: 'nikkon 1234',
    attribute: 'favorite_camera'
  }, 

  invalidUpdate: {
    livestream_id: 648883,
    value: 'Spike Lee',
    attribute: 'full_name'
  }, 

  validHeader: ['Authorization', 'Olphinz Web'],
  invalidHeader: ['Authorization', 'wrong name'],

 updatedResponse: { 
    livestream_id: 648883,
    full_name: 'Olphinz Web',
    dob: '1982-01-01T00:00:00.000Z',
    favorite_camera: 'nikkon 1234',
    favorite_movies: '',
    id: 1 
  },

 createdResponse: { 
    livestream_id: 648883,
    full_name: 'Olphinz Web',
    dob: '1982-01-01T00:00:00.000Z',
    favorite_camera: null,
    favorite_movies: null,
    id: 1 
  },
};