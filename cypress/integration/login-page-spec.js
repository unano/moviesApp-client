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
    cy.get("nav").find("li").eq(6).find("a").click();
    cy.contains("regist").click();
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get("#passwordButton").next().click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Please entr username/password with enough length')
    })
  });
  it("should alert when password is too short", () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.regist("user","123").then(() => {
      expect(stub.getCall(0)).to.be.calledWith('password too short, please change a longer one.')
    })
  });
  it("should alert when username is used by outher users", () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.regist("user","123456").then(() => {
      expect(stub.getCall(0)).to.be.calledWith('regist success')
    })
    cy.regist("user","1234567").then(() => {
      expect(stub.getCall(1)).to.be.calledWith('Username is used by other users')
    })
  });
});

describe("Login", () => {
  beforeEach(() => {
      cy.visit(`/`);
      cy.get("nav").find("li").eq(6).find("a").click();  
    });
    it("should regist in adminstrator account", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.Adminlogin().next().click().then(() => {
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
    it("should alert when logining again after login", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.contains("Username:").next().clear() ;
      cy.contains("Password:").next().clear() ;
      cy.get("#usernameButton").type("user") ;
      cy.get("#passwordButton").type("123456") ;
      cy.get("#passwordButton").next().click().then(() => {
        expect(stub.getCall(2)).to.be.calledWith('You have already logined')
      })
    });
    it("should alert when username is used by outher users", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","12345678").then(() => {
        expect(stub.getCall(1)).to.be.calledWith('wrong username/password')
      })
    });
    it("should be able to log out after login", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(7).contains("Log out");
    });

    it("should be able to do 'add to favorite' after login", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get(".card").eq(0).should('be.visible')
    });
  });
  describe("Log out", () => {
    beforeEach(() => {
      cy.visit(`/`);
      cy.get("nav").find("li").eq(6).find("a").click();  
    });
    it("should be able to login after logi out", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(7).click();
      cy.get("nav").find("li").eq(6).contains("Login");
    });
    it("should not be able to do 'add to favorite' after log out", () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.regist("user","123456");
      cy.login("user","123456");
      cy.get("nav").find("li").eq(7).click();
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click().then(() => {
        expect(stub.getCall(2)).to.be.calledWith('please login first')
      })
    })
  })