import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app'

chai.should();
chai.use(chaiHttp);


describe('/forgotpassword', () => {
    it('A registered email should be able to reset password/default language', (done) => {
        const user = {
            email: "kwiste06@gmail.com",
        }

        chai
            .request(server)
            .post('/api/v1/users/forgotpassword')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.message.should.be.equal('Please check your email to reset your password')
                done()
            })
    })

    it('Email not sent/default language', (done) => {
        const user = {
            email: "dreamtm8@gmail.com",
        }

        chai
            .request(server)
            .post('/api/v1/users/forgotpassword')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.message.should.be.equal('Email not sent')
                done()
            })
    })

})




describe('/resetpassword', () => {
    it('The password entered do not match/default language', (done) => {

        const user = {
            email: "kwiste06@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream123"
        }
        chai
            .request(server)
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJTdGV2ZW4iLCJsYXN0TmFtZSI6Ikt3aXplcmEiLCJlbWFpbCI6Imt3aXN0ZTA2QGdtYWlsLmNvbSIsInJvbGUiOiJvcGVyYXRvciIsInBhc3N3b3JkIjoiJDJhJDEwJGVUUGtBeTZzUEExdnM4bTJjWlROT09lRktSYzZVbmoydHJ5TzRSZ3ZsUWNLem5mUS5Tc3p1IiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIn0sImlhdCI6MTY1NjQxMzM0MiwiZXhwIjoxNjU2NDQ5MzQyfQ.Z7WHW7jw0p1nNDt5ewRv9vqZy-R4Q_RmF9ufdO6Aw0M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(401)
                res.body.message.should.be.equal('The password entered do not match')
                done()
            })
    })


    it('The user with the email not found/default language', (done) => {

        const user = {
            email: "dreamtm8@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJTdGV2ZW4iLCJsYXN0TmFtZSI6Ikt3aXplcmEiLCJlbWFpbCI6Imt3aXN0ZTA2QGdtYWlsLmNvbSIsInJvbGUiOiJvcGVyYXRvciIsInBhc3N3b3JkIjoiJDJhJDEwJGVUUGtBeTZzUEExdnM4bTJjWlROT09lRktSYzZVbmoydHJ5TzRSZ3ZsUWNLem5mUS5Tc3p1IiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIn0sImlhdCI6MTY1NjQxMzM0MiwiZXhwIjoxNjU2NDQ5MzQyfQ.Z7WHW7jw0p1nNDt5ewRv9vqZy-R4Q_RmF9ufdO6Aw0M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
                res.body.message.should.be.equal('The user with the email not found')
                done()
            })
    })

    it('Your password is reset/default language', (done) => {

        const user = {
            email: "kwiste06@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJTdGV2ZW4iLCJsYXN0TmFtZSI6Ikt3aXplcmEiLCJlbWFpbCI6Imt3aXN0ZTA2QGdtYWlsLmNvbSIsInJvbGUiOiJvcGVyYXRvciIsInBhc3N3b3JkIjoiJDJhJDEwJGVUUGtBeTZzUEExdnM4bTJjWlROT09lRktSYzZVbmoydHJ5TzRSZ3ZsUWNLem5mUS5Tc3p1IiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIn0sImlhdCI6MTY1NjQxMzM0MiwiZXhwIjoxNjU2NDQ5MzQyfQ.Z7WHW7jw0p1nNDt5ewRv9vqZy-R4Q_RmF9ufdO6Aw0M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.message.should.be.equal('Your password is reset')
                done()
            })
    })

    it('The user with the email not found/default language', (done) => {

        const user = {
            email: "dreamtm8@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJTdGV2ZW4iLCJsYXN0TmFtZSI6Ikt3aXplcmEiLCJlbWFpbCI6Imt3aXN0ZTA2QGdtYWlsLmNvbSIsInJvbGUiOiJvcGVyYXRvciIsInBhc3N3b3JkIjoiJDJhJDEwJGVUUGtBeTZzUEExdnM4bTJjWlROT09lRktSYzZVbmoydHJ5TzRSZ3ZsUWNLem5mUS5Tc3p1IiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yOFQwNjoyMjoyNy43MDJaIn0sImlhdCI6MTY1NjQxMzM0MiwiZXhwIjoxNjU2NDQ5MzQyfQ.Z7WHW7jw0p1nNDt5ewRv9vqZy-R4Q_RmF9ufdO6Aw0M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
                res.body.message.should.be.equal('The user with the email not found')
                done()
            })
    })

})