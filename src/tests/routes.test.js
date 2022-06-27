import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const token = `Bearer ${process.env.ADMIN_TOKEN}`;
chai.use(chaiHttp);

const REQ_URL = '/api/v1/routes/';
const ROUTE_ID= 'e7891762-45c7-43f4-a28f-144c3034040c';

describe('TESTING ROUTES END POINTS', () => {
  it('MUST CREATE ROUTE', (done) => {
    const data = {
      origin: 'Kagugu',
      destination: 'Kamonyi',
      code: (Math.random() * 10000).toString(),
      distance: (Math.random() * 10).toString(),
      latitude: 8.99,
      longitude: 98.99,
    };
    chai.request(server)
        .post(REQ_URL)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .send(data)
        .then((res) => {
          chai.expect(res).to.have.status(201);

          done();
        }).catch((err) => done(err));
  });

  it('MUST FETCH ROUTES', (done) => {
    chai
        .request(server)
        .get(REQ_URL)
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res.status).to.equal(200);
          done();
        }).catch((err) => done(err));
  });


  it('BAD REQUEST, MISSING PARAMS', (done) => {
    const data = {
      origin: 'Kamonyi',
      destination: 'Kinyinya',
    };
    chai.request(server)
        .post(REQ_URL)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .send(data)
        .then((res) => {
          chai.expect(res).have.status(400);
          done();
        }).catch((err) => done(err));
  });

  it('MUST FETCH SINGLE ROUTE', (done) => {
    chai.request(server)
        .get(`${REQ_URL}/${ROUTE_ID}`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res.status).to.equal(200);
          done();
        }).catch((err) => done(err));
  });


  it('MUST UPDATE ROUTE', (done) => {
    const data = {
      distance: (Math.random() * 100).toString(),
    };
    chai.request(server)
        .put(`${REQ_URL}/${ROUTE_ID}`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .send(data)
        .then((res) => {
          chai.expect(res.status).to.equal(200);
          done();
        }).catch((err) => done(err));
  });

  it('MUST NOT UPDATE, INVALID ID', (done) => {
    const data = {
      status: 'active',
    };
    chai.request(server)
        .put(`${REQ_URL}/InvalidId`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .send(data)
        .then((res) => {
          chai.expect(res.status).to.equal(400);
          done();
        }).catch((err) => done(err));
  });

  it('MUST DELETE ROUTE', (done) => {
    chai.request(server)
        .delete(`${REQ_URL}/${ROUTE_ID}`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res.status).to.equal(200);
          done();
        }).catch((err) => done(err));
  });

  it('MUST NOT DELETE ROUTE, INVALID ID', (done) => {
    chai.request(server)
        .delete(`${REQ_URL}/InvalidId`)
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res.status).to.equal(400);
          done();
        }).catch((err) => done(err));
  });

  it('MUST DELETE ALL ROUTE', (done) => {
    chai.request(server)
        .delete(REQ_URL)
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res.status).to.equal(200);
          done();
        }).catch((err) => done(err));
  });
});
