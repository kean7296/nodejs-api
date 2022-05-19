var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8080");

// UNIT test begin

describe("api unit test", function() {

    it("/admin/login - admin login page", function(done) {
        server
            .get("/admin/login")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/account-login - user loggin in", function(done) {
        server
            .post("/account-login")
            .send('username=ken&password=admin123')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/admin/user/add - user add data", function(done) {
        server
            .post("/admin/user/add")
            .send('firstname=test&lastname=test&address=test address&postcode=0000&contact=12345&email=test@test.com&username=test&password=test123')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/admin/user/edit/2 - user edit data", function(done) {
        server
            .put("/admin/user/edit/2")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/admin/user/delete/2 - user delete single data", function(done) {
        server
            .delete("/admin/user/delete/2")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/admin/user/multiple-delete - user delete multiple data", function(done) {
        server
            .delete("/admin/user/multiple-delete")
            .send('ids=2&ids=3&ids=4')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it("/admin/user/get - user get list", function(done) {
        server
            .get("/admin/user/get")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res) {
                res.status.should.equal(200);
                done();
            });
    });

});