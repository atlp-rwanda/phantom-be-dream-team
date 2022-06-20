import assert from 'assert';
import chai from "chai";
import chaiHttp from 'chai-http';
import server from '../app';
chai.should();

chai.use(chaiHttp);
describe('/MAIN PAGE', () => {
  it('it should return status 200', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});
describe('/PROFILE ROOT', () => {
  it('it should return status 200 on right root', (done) => {
        chai.request(server)
        .get('/profile/1')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});
describe('/PROFILE ROOT', () => {
  it('it should return status 404 if the id is not found', (done) => {
        chai.request(server)
        .post('/profile/900')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });
});
describe('/PROFILE ROOT', () => {
  it('it should return status 404 if there is no id provided', (done) => {
        chai.request(server)
        .get('/profile')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 200 if the id is found', (done) => {
        chai.request(server)
        .post('/profile/update/1')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 400 if the id is not found', (done) => {
        chai.request(server)
        .post('/profile/update/900')
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 404 if there is no id provided', (done) => {
        chai.request(server)
        .post('/profile/update')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 404 if the id is not found', (done) => {
        chai.request(server)
        .post('/profile/update')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 404 if the method is get', (done) => {
        chai.request(server)
        .get('/profile/update/1')
        .end((err, res) => {
              res.should.have.status(404);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 400 if the user is not found', (done) => {
        chai.request(server)
        .post('/profile/update/900')
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
  });
});
describe('/UPDATE PROFILE ROOT', () => {
  it('it should return status 200 if the data is updated', (done) => {
    const name={name:"GYSSA Prince"}
        chai.request(server)
        .post('/profile/update/1')
        .send(name)
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});