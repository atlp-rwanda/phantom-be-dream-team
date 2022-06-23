import chai from "chai";
import chaiHttp from 'chai-http';
import server from '../index';
chai.should();

chai.use(chaiHttp);

describe('TESTING USER AUTHENTICATION', () => {
  it('User login success', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12@gmail.com',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
          chai.expect(response.body).to.have.property('token');
        });
    done();
  });

  it('User login fail(message:Incorrect email)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12kk@gmail.com',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai
              .expect(response.body.message)
              .to.equal('Incorrect email or password');
        });
    done();
  });
  it('User login fail(message:Incorrect email)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12kk@gmaom',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai
              .expect(response.body.message)
              .to.equal('Incorrect email or password');
        });
    done();
  });
  it('User login fail(message:Incorrect password)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12kk@gmail.m',
          password: 'kigali',
        })
        .end((error, response) => {
          chai
              .expect(response.body.message)
              .to.equal('Incorrect email or password');
        });
    done();
  });
});

  it('it should return status 200 on right root', (done) => {
        chai.request(server)
        .get('/api/v1/profile/1')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });


  it('it should return status 200 on right root', (done) => {
        chai.request(server)
        .post('/api/v1/profile/1')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });

  it('it should return status 400 if the id is not found', (done) => {
    chai.request(server)
    .get('/api/v1/profile/900')
    .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.equal('No user who has this id  900')
      done();
    });
});

  it('it should return status 400 if the id is not found in FRENCH', (done) => {
        chai.request(server)
        .get('/api/v1/profile/900')
        .set('Accept-Language', 'fr') 
        .end((err, res) => {
              res.should.have.status(400);
              res.body.message.should.be.equal('Aucun utilisateur ne possède cet identifiant  900')
          done();
        });
  });

  it('it should return status 400 if the id is not found in KINYARWANDA', (done) => {
    chai.request(server)
    .get('/api/v1/profile/900')
    .set('Accept-Language', 'kiny') // Works.
    .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.equal('Nta mukoresha ufite uyu mubare umuranga 900')
      done();
    });
});

it('it should return status 400 if the id is not found in English', (done) => {
  chai.request(server)
  .get('/api/v1/profile/900')
  .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('No user who has this id  900')
    done();
  });
});

  it('it should return status 404 if there is no id provided', (done) => {
        chai.request(server)
        .get('/api/v1/profile')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });

  it('it should return status 200 if the id is found', (done) => {
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .end((err, res) => {
              res.should.have.status(401);
          done();
        });
  });


  it('it should return status 400 if the id is not found', (done) => {
        chai.request(server)
        .patch('/api/v1/profile/update/900')
        .end((err, res) => {
              res.should.have.status(401);
          done();
        });
  });


  it('it should return status 404 if there is no id provided', (done) => {
        chai.request(server)
        .post('/api/v1/profile/update')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });

  it('it should return status 404 if the id is not found', (done) => {
        chai.request(server)
        .post('/api/v1/profile/update')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });

  it('it should return status 404 if the method is get', (done) => {
        chai.request(server)
        .get('/api/v1/profile/update/1')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });

  it('it should return status 400 if the user is not found', (done) => {
        chai.request(server)
        .patch('/api/v1/profile/update/900')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
  });

  it('it should return status 200 if the data is update', (done) => {
    const name={firstName:"GYSSA Prince"}
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
  it('it should return status 200 if the data is update', (done) => {
    const name={firstName:"GYSSA Prince"}
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.message.should.be.equal('Profile updated successfully')

          done();
        });
  });
  it('it should return status 200 if the data is update', (done) => {
    const name={firstName:"GYSSA Prince"}
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .set('Accept-Language', 'fr') 
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.message.should.be.equal('Mise à jour du profil réussie')

          done();
        });
  });

  it('it should return status 200 if the data is update', (done) => {
    const name={firstName:"GYSSA Prince"}
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .set('Accept-Language', 'kiny') 
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.message.should.be.equal('umwirondoro wavuguruwe neza')

          done();
        });
  });
  it('it should not update password if the old is incorrect', (done) => {
    const name={Newpassword:"GYSSA Prince",Oldpassword:"indsm d"}
        chai.request(server)
        .patch('/api/v1/profile/update/1')
        .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU5OTMyNTUsImV4cCI6MTY1NTk5Njg1NX0.sH5S2NShcTQn3q8YubGStPsF4YL8TSU2U26WViazFHE') 
        .set('Accept-Language', 'eng') 
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.message.should.be.equal('Wrong old password')

          done();
        });
  });
  
