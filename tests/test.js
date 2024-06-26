const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;


// chai.request()

// Configure chai
chai.use(chaiHttp);
chai.should();

const BASE_URL = 'http://localhost'; // Your base URL

describe('Get List Of repos', () => {
  describe('/GET api/repos', () => {
  
    it('it should GET all the repos', (done) => {
      chai.request(BASE_URL)
        .get('/api/repos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1); // Assuming you expect one item in the array

          // Validate the response object
          const repo = res.body[0];
          expect(repo).to.have.property('Name', 'mechanix-debian-repo');
          expect(repo).to.have.property('Comment', 'Created with proxy server');
          expect(repo).to.have.property('DefaultDistribution', 'apollo');
          expect(repo).to.have.property('DefaultComponent', 'main');
          
          done();
        });
    });
  });

  // Add more tests as needed
});
