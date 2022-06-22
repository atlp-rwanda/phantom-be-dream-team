

import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);
describe('TESTING REGISTRATION OF USERS', () => {
  describe('POST /users/register', () => {

// add a new user who is not in the database
    it('User successfully registered', (done) => {
      chai
        .request(server)
        .post('/users/register')
        .send({
          name: 'benjamin',
          phone: '04525464',
          email: 'ben23@gmail.com',
          role: 'driver',
        })
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(201);
        });
      done();
    });
  });

  // GET all Users test

  describe('GET /users/', () => {
    it('Users retreived', (done) => {
      chai
        .request(server)
        .get('/users/')
    
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });
  // GET one user with his/her id from the database
  describe('GET /users/:id', () => {
    it('User retreived', (done) => {
      chai
        .request(server)
        .get('/users/1')
    
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });

  // update a user who is in the database by using his/her id
  describe('PUT /users/1', () => {
    it('User successfully updated', (done) => {
      chai
        .request(server)
        .put('/users/1')
        
        .send({
          name: 'theodole',
          phone: '54564564',
          email: 'theodole.bizimana54@gmail.com',
          role: 'operator',
        })
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });

  // delete a user whose id is in the database 
  describe('DELETE /users/:id', () => {
    it('User deleted', (done) => {
      chai
        .request(server)
        .delete('/users/11')
        
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });

  // find if the email exists by using an existing email from the database
  describe('Getting error messages', () => {
    it('email exists', (done) => {
      chai
        .request(server)
        .post('/users/register')
        
        .send({
          name: 'umuhanga',
          phone: '956849576',
          email: 'ben23@gmail.com',
          role: 'operator',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(400);
        });
      done();
    });
  });

  // no credentials and get error message
  describe('Getting error messages', () => {
    it('enter credentials', (done) => {
      chai
        .request(server)
        .post('/users/register')
        
        .send({
          name: '',
          phone: '',
          email: '',
          role: '',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(500);
        });
      done();
    });
  });

  // get an id which doesn't exist in the database
  describe('GET /users/:id', () => {
    it('User with Id does not exist', (done) => {
      chai
        .request(server)
        .get('/users/100')
        
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(400);
        });
      done();
    });
  });

// update the user with a wrong id
  describe('PUT /users/20', () => {
    it('The user with id does not exist', (done) => {
      chai
        .request(server)
        .put('/users/22')
        
        .send({
          name: 'theodole',
          phone: '645645645',
          email: 'theodole.bizimana@gmail.com',
          role: 'operator',
        })
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(400);
        });
      done();
    });
  });

  // delete a user with a wrong id
  describe('DELETE /users/:id', () => {
    it('no user to be deleted', (done) => {
      chai
        .request(server)
        .delete('/users/102')
        
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(404);
        });
      done();
    });
  });
});
