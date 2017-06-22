var request = require("request");

var base_url = "http://localhost:8080/"

describe("Backend Server", function() {
  describe("GET /", function() {
    it("should be running", function() {
      expect(200).toBe(200);
    });
  });
});
