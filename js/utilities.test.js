//utilities.test.js
//This is a unit test for utilities.js
//Tests writtern by JEST framework

import {calcAnnualTax,calcAnnualSuper} from './utilities.js';

describe("no salary, no sacrifice", () => {
    it("should return zero tax amount", () => {
      expect(calcAnnualTax(0,0)).toEqual(0);
    });

    it("should return zero superannutaion", () => {
        expect(calcAnnualSuper(0,0)).toEqual(0);
      });
  });

describe("salary in 1st bracket (below 18200 - salary 15000), no sacrifice", () => {
    it("should return zero tax amount", () => {
      expect(calcAnnualTax(15000,0)).toEqual(0);
    });

    it("should return 1500 superannutaion (10%)", () => {
        expect(calcAnnualSuper(15000,0)).toEqual(1500);
      });
  });

  describe("salary in 1st bracket (below 18200 - salary 15000), sacrifice 100 per month", () => {
    it("should return zero tax amount", () => {
      expect(calcAnnualTax(15000,100)).toEqual(0);
    });

    it("should return 2700 superannutaion (10%) = 1500 + 1200", () => {
        expect(calcAnnualSuper(15000,100)).toEqual(2700);
      });
  });

  describe("salary in 1st bracket (below 18200 - exactly 18200), no sacrifice", () => {
    it("should return zero tax amount", () => {
      expect(calcAnnualTax(18200,0)).toEqual(0);
    });

    it("should return 1820 superannutaion (10%)", () => {
        expect(calcAnnualSuper(18200,0)).toEqual(1820);
      });
  });

  describe("salary in 1st bracket (below 18200 - exactly 18200), sacrifice 100 per month", () => {
    it("should return zero tax amount", () => {
      expect(calcAnnualTax(18200,100)).toEqual(0);
    });

    it("should return 3020 superannutaion (10%) = 1820 + 1200", () => {
        expect(calcAnnualSuper(18200,100)).toEqual(3020);
      });
  });

  describe("salary in 2nd bracket (18201 to 37000 - salary 20000), no sacrifice", () => {
    it("should return 342 tax amount", () => {
      expect(calcAnnualTax(20000,0)).toEqual(342);
    });

    it("should return 2000 superannutaion (10%)", () => {
        expect(calcAnnualSuper(20000,0)).toEqual(2000);
      });
  });

  describe("salary in 2nd bracket (18201 to 37000 - salary 20000), sacrifice 100 per month", () => {
    it("should return 114 tax amount", () => {
        expect(calcAnnualTax(20000,100)).toEqual(114);
      });
  
      it("should return 3200 superannutaion (10%) = 2000+1200", () => {
          expect(calcAnnualSuper(20000,100)).toEqual(3200);
        });
    });

  describe("salary in 2nd bracket (18201 to 37000 - exactly 37000), no sacrifice", () => {
    it("should return 3572 tax amount", () => {
      expect(calcAnnualTax(37000,0)).toEqual(3572);
    });

    it("should return 3700 superannutaion (10%)", () => {
        expect(calcAnnualSuper(37000,0)).toEqual(3700);
      });
  });

  describe("salary in 2nd bracket (18201 to 37000 - exactly 37000), sacrifice 100 per month", () => {
    it("should return 3344 tax amount", () => {
      expect(calcAnnualTax(37000,100)).toEqual(3344);
    });

    it("should return 4900 superannutaion (10%) = 3700 + 1200", () => {
        expect(calcAnnualSuper(37000,100)).toEqual(4900);
      });
  });

  describe("salary in 3rd bracket (37001 to 90000 - salary 40000), no sacrifice", () => {
    it("should return 4547 tax amount", () => {
      expect(calcAnnualTax(40000,0)).toEqual(4547);
    });

    it("should return 4000 superannutaion (10%)", () => {
        expect(calcAnnualSuper(40000,0)).toEqual(4000);
      });
  });

  describe("salary in 3rd bracket (37001 to 90000 - salary 40000), sacrifice 100 per month", () => {
    it("should return 4157 tax amount", () => {
      expect(calcAnnualTax(40000,100)).toEqual(4157);
    });

    it("should return 4000 superannutaion (10%) = 4000 + 1200", () => {
        expect(calcAnnualSuper(40000,100)).toEqual(5200);
      });
  });

  describe("salary in 3rd bracket (37001 to 90000 - exactly 90000), no sacrifice", () => {
    it("should return 20797 tax amount", () => {
      expect(calcAnnualTax(90000,0)).toEqual(20797);
    });

    it("should return 9000 superannutaion (10%)", () => {
        expect(calcAnnualSuper(90000,0)).toEqual(9000);
      });
  });

  describe("salary in 3rd bracket (37001 to 90000 - exactly 90000), sacrifice 100 per month", () => {
    it("should return 20407 tax amount", () => {
      expect(calcAnnualTax(90000,100)).toEqual(20407);
    });

    it("should return 10200 superannutaion (10%) = 9000 + 1200", () => {
        expect(calcAnnualSuper(90000,100)).toEqual(10200);
      });
  });

  describe("salary in 4th bracket (90001 to 180000 - salary 95000), no sacrifice", () => {
    it("should return 22647 tax amount", () => {
      expect(calcAnnualTax(95000,0)).toEqual(22647);
    });

    it("should return 9500 superannutaion (10%)", () => {
        expect(calcAnnualSuper(95000,0)).toEqual(9500);
      });
  });

  describe("salary in 4th bracket (90001 to 180000 - salary 95000), sacrifice 100 per month", () => {
    it("should return 22203 tax amount", () => {
        expect(calcAnnualTax(95000,100)).toEqual(22203);
      });
  
      it("should return 10700 superannutaion (10%) = 9500+1200", () => {
          expect(calcAnnualSuper(95000,100)).toEqual(10700);
        });
    });

  describe("salary in 4th bracket (90001 to 180000 - exactly 180000), no sacrifice", () => {
    it("should return 54097 tax amount", () => {
      expect(calcAnnualTax(180000,0)).toEqual(54097);
    });

    it("should return 18000 superannutaion (10%)", () => {
        expect(calcAnnualSuper(180000,0)).toEqual(18000);
      });
  });

  describe("salary in 4th bracket (90001 to 180000 - exactly 180000), sacrifice 100 per month", () => {
    it("should return 53653 tax amount", () => {
      expect(calcAnnualTax(180000,100)).toEqual(53653);
    });

    it("should return 19200 superannutaion (10%) = 18000 + 1200", () => {
        expect(calcAnnualSuper(180000,100)).toEqual(19200);
      });
  });

  describe("salary in 5th bracket (more than 180001 - salary 200000), no sacrifice", () => {
    it("should return 63097 tax amount", () => {
      expect(calcAnnualTax(200000,0)).toEqual(63097);
    });

    it("should return 20000 superannutaion (10%)", () => {
        expect(calcAnnualSuper(200000,0)).toEqual(20000);
      });
  });

  describe("salary in 5th bracket (more than 180001 - salary 200000), sacrifice 100 per month", () => {
    it("should return 62557 tax amount", () => {
      expect(calcAnnualTax(200000,100)).toEqual(62557);
    });

    it("should return 21200 superannutaion (10%) = 20000 + 1200", () => {
        expect(calcAnnualSuper(200000,100)).toEqual(21200);
      });
  });