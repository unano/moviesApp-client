let movies;

describe("Regist", () => {
  beforeEach(() => {
    cy.visit("/")
  });
  it("should regist with a valid input", () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.regist("user","123456").then(() => {
      expect(stub.getCall(0)).to.be.calledWith('regist success')
    })
  });
  it("should alert when user regists without entering anything", () => {
    cy.get("nav").find("li").eq(5).find("a").click();
    cy.contains("regist").click();
    cy.get("button").click();
    cy.get(".warn").should("have.text","Please enter username/password");
  });
  it("should alert when password is too short", () => {
    cy.regist("user","123");
    cy.get(".warn").should("have.text","password too short(at least 6)");
  });
  it("should alert when username is used by outher users", () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.regist("user","123456").then(() => {
      expect(stub.getCall(0)).to.be.calledWith('regist success')
    })
    cy.regist("user","1234567");
    cy.get(".warn").should("have.text","Username is used");
  });
});

describe("Login", () => {
  beforeEach(() => {
      cy.visit(`/`);
      cy.get("nav").find("li").eq(5).find("a").click();  
    });
    it("should regist in adminstrator account", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.Adminlogin().then(() => {
        expect(stub.getCall(0)).to.be.calledWith('login success')
      })
    });
    it("should login in a newly registed account", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456").then(() => {
        expect(stub.getCall(1)).to.be.calledWith('login success')
      })
    });
    it("should alert when password is wrong", () => {
      cy.regist("user","123456");
      cy.login("user","12345678");
      cy.get(".warn").should("have.text",'wrong username/password');
      });

    it("should be able to log out after login", () => {
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(6).contains("Log out");
    });

    it("should be able to do 'add to favorite' after login", () => {
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("div").contains("Personal area").click().get("#simple-menu").contains("Favorites").click().then(() => {
      cy.get(".card").eq(0).should('be.visible');
    });
  });
    it("should be able to enter 'Personal area' after login", () => {
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.PersonAreaIcons("Favorite");
      cy.get(".title").contains("Favorite Movies");
    });
  });
  describe("Log out", () => {
    beforeEach(() => {
      cy.visit(`/`);
      cy.get("nav").find("li").eq(5).find("a").click();  
    });
    it("should be able to login after logi out", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(6).click();
      cy.get("nav").find("li").eq(5).contains("Login");
    });
    it("should not be able to do 'add to favorite' after log out", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(6).click();
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("button").click().then(() => {
        expect(stub.getCall(2)).to.be.calledWith('please login first')
      })
    })
  })