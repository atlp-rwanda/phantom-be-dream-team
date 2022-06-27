import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const token = `Bearer ${process.env.ADMIN_TOKEN}`;
chai.use(chaiHttp);

const REQ_URL = '/api/v1/routes/';
const ROUTE_ID= '4c6f7805-36d0-4621-93e6-d56424d6869a';

describe('TESTING ROUTES END POINTS', () => {
  it('MUST CREATE ROUTE', (done) => {
    chai
        .request(server)
        .get('/api/v1/routes')
        .set('Authorization', token)
        .send({
          origin: 'Kagugu',
          destination: 'Kamonyi',
          code: (Math.random() * 10000).toString(),
          distance: (Math.random() * 10).toString(),
          routeSlug: '',
          latitude: 8.99,
          longitude: 98.99,
        })
        .then((res) => {
          chai.expect(res).to.have.status(201);
        });
    done();
  });
  it('EXIST ROUTE', (done) => {
    chai
        .request(server)
        .get('/api/v1/routes')
        .set('Authorization', token)
        .send({
          origin: 'Kagugu',
          destination: 'Kamonyi',
          code: (Math.random() * 10000).toString(),
          distance: (Math.random() * 10).toString(),
          routeSlug: '',
          latitude: 8.99,
          longitude: 98.99,
        })
        .then((res) => {
          chai.expect(res).to.have.status(401);
        });
    done();
  });
  it('MUST FETCH ROUTES', (done) => {
    chai
        .request(server)
        .get('/api/v1/routes')
        .set('Authorization', token)
        .then((res) => {
          chai.expect(res).to.have.status(200);
        });
    done();
  });
  it('BAD REQUEST, MISSING PARAMS', (done) => {
    chai
        .request(server)
        .get('/api/v1/routes')
        .set('Authorization', token)
        .send({
          origin: 'Kagugu',
          destination: 'Kamonyi',
        })
        .then((res) => {
          chai.expect(res).to.have.status(400);
        });
    done();
  });

  // it('MUST UPDATE ROUTE', (done) => {
  //   const data = {
  //     distance: (Math.random() * 100).toString(),
  //   };
  //   chai.request(server)
  //       .put(`${REQ_URL}/${ROUTE_ID}`)
  //       .set('Accept', 'application/json')
  //       .set('Authorization', token)
  //       .send(data)
  //       .then((res) => {
  //         chai.expect(res.status).to.equal(200);
  //         done();
  //       }).catch((err) => done(err));
  // });

  // it('MUST NOT UPDATE, INVALID ID', (done) => {
  //   const data = {
  //     status: 'active',
  //   };
  //   chai.request(server)
  //       .put(`${REQ_URL}/InvalidId`)
  //       .set('Accept', 'application/json')
  //       .set('Authorization', token)
  //       .send(data)
  //       .then((res) => {
  //         chai.expect(res.status).to.equal(400);
  //         done();
  //       }).catch((err) => done(err));
  // });

  // it('MUST DELETE ROUTE', (done) => {
  //   chai.request(server)
  //       .delete(`${REQ_URL}/${ROUTE_ID}`)
  //       .set('Accept', 'application/json')
  //       .set('Authorization', token)
  //       .then((res) => {
  //         chai.expect(res.status).to.equal(200);
  //         done();
  //       }).catch((err) => done(err));
  // });

  // it('MUST NOT DELETE ROUTE, INVALID ID', (done) => {
  //   chai.request(server)
  //       .delete(`${REQ_URL}/InvalidId`)
  //       .set('Accept', 'application/json')
  //       .set('Authorization', token)
  //       .then((res) => {
  //         chai.expect(res.status).to.equal(400);
  //         done();
  //       }).catch((err) => done(err));
  // });

  // it('MUST DELETE ALL ROUTE', (done) => {
  //   chai.request(server)
  //       .delete(REQ_URL)
  //       .set('Authorization', token)
  //       .then((res) => {
  //         chai.expect(res.status).to.equal(200);
  //         done();
  //       }).catch((err) => done(err));
  // });
});
