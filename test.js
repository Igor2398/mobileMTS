const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./components/routes');                                                                      

chai.should();

chai.use(chaiHttp);

// Test requestów
describe('Request', () => {
  // Ścieżka Test results 
  describe('GET /data', () => {
    it('It should GET all results', (done) => {
      chai.request(server)
        .get('/data')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        })
    })

    it('It should NOT GET all results', (done) => {
      chai.request(server)
      //błędny adres
        .get('/date')
        .end((err, response) => {
          response.should.have.status(404);
          done();
        })
    })
  })
})