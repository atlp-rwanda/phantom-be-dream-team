import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
chai.should();
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTY0MjM4MzQsImV4cCI6MTY1NjUxMDIzNH0.Sc7QMHGx13LhmUEp_33cx72AHyfzjS9P35ij8u6aJJg';

chai.use(chaiHttp);

it('it should return status 200 on right root', (done) => {
  chai.request(server)
      .get('/api/v1/profile/2')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
});


it('it should return status 200 on right root', (done) => {
  chai.request(server)
      .post('/api/v1/profile/2')
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
        res.body.message.should.be.equal('No user who has this id  900');
        done();
      });
});

it('it should return status 400 if the id is not found in FRENCH', (done) => {
  chai.request(server)
      .get('/api/v1/profile/900')
      .set('Accept-Language', 'fr')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('Aucun utilisateur ne possède cet identifiant  900');
        done();
      });
});

it('it should return status 400 if the id is not found in KINYARWANDA', (done) => {
  chai.request(server)
      .get('/api/v1/profile/900')
      .set('Accept-Language', 'kiny') // Works.
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('Nta mukoresha ufite uyu mubare umuranga 900');
        done();
      });
});

it('it should return status 400 if the id is not found in English', (done) => {
  chai.request(server)
      .get('/api/v1/profile/900')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.message.should.be.equal('No user who has this id  900');
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
      .patch('/api/v1/profile/update/2')
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
      .get('/api/v1/profile/update/2')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
});

it('it should return status 400 if the user is not found', (done) => {
  chai.request(server)
      .patch('/api/v1/profile/update/900')
      .set('auth-token', token)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
});

it('it should return status 200 if the data is update', (done) => {
  const name={firstName: 'GYSSA Prince'};
  chai.request(server)
      .patch('/api/v1/profile/update/2')
      .set('auth-token', token)
      .send(name)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
});
it('it should return status 200 if the data is update', (done) => {
  const name={firstName: 'GYSSA Prince'};
  chai.request(server)
      .patch('/api/v1/profile/update/2')
      .set('auth-token', token)
      .send(name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('Profile updated successfully');

        done();
      });
});
it('it should return status 200 if the data is update', (done) => {
  const name={firstName: 'GYSSA Prince'};
  chai.request(server)
      .patch('/api/v1/profile/update/2')
      .set('auth-token', token)
      .set('Accept-Language', 'fr')
      .send(name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('Mise à jour du profil réussie');

        done();
      });
});

it('it should return status 200 if the data is update', (done) => {
  const name={firstName: 'GYSSA Prince'};
  chai.request(server)
      .patch('/api/v1/profile/update/2')
      .set('auth-token', token)
      .set('Accept-Language', 'kiny')
      .send(name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('umwirondoro wavuguruwe neza');

        done();
      });
});
it('it should not update password if the old is incorrect', (done) => {
  const name={Newpassword: 'GYSSA Prince', Oldpassword: 'indsm d'};
  chai.request(server)
      .patch('/api/v1/profile/update/2')
      .set('auth-token', token)
      .set('Accept-Language', 'eng')
      .send(name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.be.equal('Wrong old password');

        done();
      });
});

