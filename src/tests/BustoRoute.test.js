import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

describe('Testing Bus to Route Assignments', () => {
  it('should return Bus to Route Assignments', () => {(done) => {
    chai
        .request(server)
        .get('/api/v1/bustoroutes/')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
    done();
  }});
  it('should not return Bus to Route Assignments', () => {(done) => {
    chai
        .request(server)
        .get('/api/v1/bustoroute/')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(500);
        });
    done();
  }});
  it('should create a new Bus to Route Assignment', () => {(done) => {
    const busId = 2;
    const routeId = 2;
    chai
        .request(server)
        .post('/api/v1/bustoroutes/busId/routeId')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
    done();
  }});
  it('should return Bus to Route Assignment by ID', () => {(done) => {
    chai
        .request(server)
        .get('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
    done();
  }});
  it('should return  Bus to Route Assignment by ID not found', () => {(done) => {
    const fakeid = 100;
       chai
        .request(server)
        .get('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(404);
        });
    done();
  }});
  it('should not get Bus to Route Assignment by ID', () => {(done) => {
    chai
        .request(server)
        .get('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(500);
        });
    done();
  }});
  it('should unAssign Bus to Route Assignment by ID', () => {(done) => {
    chai
        .request(server)
        .delete('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
        });
    done();
  }});
  it('should return unAssign Bus to Route Assignment by ID not found', () => {(done) => {
    const fakeid = 100;
       chai
        .request(server)
        .delete('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(404);
        });
    done();
  }});
  it('should not unAssign Bus to Route Assignment by ID', () => {(done) => {
    chai
        .request(server)
        .delete('/api/v1/bustoroutes/fakeid')
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(500);
        });
    done();
  }});
});
