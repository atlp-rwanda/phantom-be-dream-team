import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

chai.should();
chai.use(chaiHttp);
describe('TESTING REGISTRATION OF USERS', () => {
  describe('POST /users/register', () => {


    it('User successfully registered', (done) => {
      chai
        .request(server)
        .post('/users/register')
        .send({
          name: 'kalimba',
          phone: '04525464',
          email: 'umusaz3@gmail.com',
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
  // GET one user tset
  describe('GET /users/:id', () => {
    it('User retreived', (done) => {
      chai
        .request(server)
        .get('/users/4')
    
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });

  describe('PUT /users/1', () => {
    it('User successfully updated', (done) => {
      chai
        .request(server)
        .put('/users/1')
        
        .send({
          name: 'KEVIN',
          phone: '54564564',
          email: 'kevin.kalimba54@gmail.com',
          role: 'operator',
        })
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
      done();
    });
  });

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

  describe('Getting error messages', () => {
    it('email exists', (done) => {
      chai
        .request(server)
        .post('/users/register')
        
        .send({
          name: 'umuhanga',
          phone: '956849576',
          email: 'kevin.kalimba54@gmail.com',
          role: 'operator',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(400);
        });
      done();
    });
  });

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

  describe('PUT /users/20', () => {
    it('The user with id does not exist', (done) => {
      chai
        .request(server)
        .put('/users/22')
        
        .send({
          name: 'kevin',
          phone: '645645645',
          email: 'kevin.kalimba@gmail.com',
          role: 'operator',
        })
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(400);
        });
      done();
    });
  });

  describe('DELETE /users/:id', () => {
    it('no user to be deleted', (done) => {
      chai
        .request(server)
        .delete('/users/12')
        
        .end((err, response) => {
          chai.expect(response.statusCode).to.equal(404);
        });
      done();
    });
  });
});
