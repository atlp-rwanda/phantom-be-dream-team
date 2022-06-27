import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const token = `Bearer ${process.env.ADMIN_TOKEN}`;
chai.use(chaiHttp);


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
});
