const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'bob',
        room: 'node'
      }, {
        id: '2',
        name: 'billy',
        room: 'something'
      }, {
        id: '3',
        name: 'mike',
        room: 'node'
      }];
  });
  it ('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'bob',
      room: 'room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '123';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node room', () => {
    var userList = users.getUserList('node');

    expect(userList).toEqual(['bob', 'mike']);
  });

  it('should return names for something room', () => {
    var userList = users.getUserList('something');

    expect(userList).toEqual(['billy']);
  });
});
