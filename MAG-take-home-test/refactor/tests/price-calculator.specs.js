describe("priceCalculator", function() {
  describe("private user", function() {
    it("should calculate new product published today correctly", function() {
      var expected = 16;
      var actual = calculatePrice(0, 0, 1, new Date());
      expect(expected).to.equal(actual);
    });
    it("should calculate new product published in the past correctly", function() {
      var expected = 26;
      var actual = calculatePrice(0, 0, 1, new Date(1900, 1, 1));
      expect(expected).to.equal(actual);
    });
    it("should calculate old product published today correctly", function() {
      var expected = 36;
      var actual = calculatePrice(0, 1, 1, new Date());
      expect(expected).to.equal(actual);
    });
  });
	
  describe("company user", function() {
    it("should calculate new product published today correctly", function() {
      var expected = 11;
      var actual = calculatePrice(1, 0, 1, new Date());
      expect(expected).to.equal(actual);
    });
    it("should calculate new product published in the past correctly", function() {
      var expected = 21;
      var actual = calculatePrice(1, 0, 1, new Date(1900, 1, 1));
      expect(expected).to.equal(actual);
    });
    it("should calculate old product published today correctly", function() {
      var expected = 31;
      var actual = calculatePrice(1, 1, 1, new Date());
      expect(expected).to.equal(actual);
    });
  });
});
