import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);

describe("Bus simulation end point",()=>{
    it('should return All buses going in the route specified', () => {
        (done) => {
          chai
              .request(server)
              .get('/api/v1/simulation/49880')
              .end((error, response) => {
                chai.expect(response.statusCode).to.equal(200);
              });
          done();
        };
      });
      it('should return All ongoing buses', () => {
        (done) => {
          chai
              .request(server)
              .get('/api/v1/simulation/49880')
              .end((error, response) => {
                chai.expect(response.statusCode).to.equal(200);
              });
          done();
        };
      });
      it('should return status 404 on wrong route ', () => {
        (done) => {
          chai
              .request(server)
              .get('/api/v1/simulation/49880/start')
              .end((error, response) => {
                chai.expect(response.statusCode).to.equal(404);
              });
          done();
        };
      });
      it('to get all ongoing buses', () => {
        (done) => {
          chai
              .request(server)
              .get('/api/v1/simulate/alltracks/bus')
              .set('Authorization', `Bearer ${TOKEN}`)
              .end((error, response) => {
                chai.expect(response.statusCode).to.equal(200);
              });
          done();
        };
      });
      it('to get a bus by id', () => {
        (done) => {
          chai
              .request(server)
              .get('/api/v1/simulate/bus/133445')
              .end((error, response) => {
                chai.expect(response.statusCode).to.equal(200);
              });
          done();
        };
      });
      
})