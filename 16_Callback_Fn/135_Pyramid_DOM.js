// ============================================
// PYRAMID OF DOM - Real QA Scenario: E2E Login Flow
// ============================================

console.log('╔════════════════════════════════════════════════╗');
console.log('║  PYRAMID OF DOM - E2E LOGIN FLOW (QA)         ║');
console.log('╚════════════════════════════════════════════════╝\n');

// ============================================
// PART 1: SIMPLE CALLBACK HELL EXAMPLE
// ============================================

console.log('--- EXAMPLE 1: Simple E2E Login Test (Callback Hell) ---\n');

function openBrowser(callback) {

    console.log("opening the browser");

    setTimeout(function () {

        console.log("Step 1 - browser starting...");

        callback();

    }, 500);

}

function goToLoginPage(callback) {

    setTimeout(function () {

        console.log("Step 2: Login page loaded");

        callback();

    }, 500);

}

function enterCredentials(callback) {

    setTimeout(function () {

        console.log("Step 3: Credentials entered");

        callback();

    }, 500);

}

function clickLogin(callback) {

    setTimeout(function () {

        console.log("Step 4: Login button clicked");

        callback();

    }, 500);

}

// THIS IS CALLBACK HELL

openBrowser(function () {

    goToLoginPage(function () {

        enterCredentials(function () {

            clickLogin(function () {

                console.log("✅ Test Complete!\n");

            });

        });

    });

});

// ============================================
// PART 2: DEEPER PYRAMID - MORE COMPLEX FLOW
// ============================================

console.log('\n--- EXAMPLE 2: Complex E2E Login Test (Deeper Pyramid) ---\n');

function launchBrowser(callback) {
    console.log("Level 1: Launching browser...");
    setTimeout(() => {
        console.log("Level 1: Browser launched");
        callback();
    }, 300);
}

function navigateToApp(callback) {
    console.log("Level 2: Navigating to app...");
    setTimeout(() => {
        console.log("Level 2: App loaded");
        callback();
    }, 300);
}

function waitForLoginForm(callback) {
    console.log("Level 3: Waiting for login form...");
    setTimeout(() => {
        console.log("Level 3: Login form visible");
        callback();
    }, 300);
}

function fillUsername(callback) {
    console.log("Level 4: Filling username field...");
    setTimeout(() => {
        console.log("Level 4: Username: 'testuser' entered");
        callback();
    }, 300);
}

function fillPassword(callback) {
    console.log("Level 5: Filling password field...");
    setTimeout(() => {
        console.log("Level 5: Password entered");
        callback();
    }, 300);
}

function submitLoginForm(callback) {
    console.log("Level 6: Submitting login form...");
    setTimeout(() => {
        console.log("Level 6: Login form submitted");
        callback();
    }, 300);
}

function waitForDashboard(callback) {
    console.log("Level 7: Waiting for dashboard...");
    setTimeout(() => {
        console.log("Level 7: Dashboard loaded");
        callback();
    }, 300);
}

function verifyUserProfile(callback) {
    console.log("Level 8: Verifying user profile...");
    setTimeout(() => {
        console.log("Level 8: User profile verified - 'testuser' logged in");
        callback();
    }, 300);
}

// PYRAMID OF DOOM - LEVEL 8
launchBrowser(function () {
    navigateToApp(function () {
        waitForLoginForm(function () {
            fillUsername(function () {
                fillPassword(function () {
                    submitLoginForm(function () {
                        waitForDashboard(function () {
                            verifyUserProfile(function () {
                                console.log("✅ Complex E2E Test Complete!\n");
                            });
                        });
                    });
                });
            });
        });
    });
});

// ============================================
// PART 3: EVEN DEEPER - WITH ERROR HANDLING
// ============================================

console.log('\n--- EXAMPLE 3: With Error Handling (Extreme Pyramid) ---\n');

function step1_OpenBrowser(callback) {
    console.log("🔹 Level 1: Opening browser");
    setTimeout(() => {
        console.log("✓ Level 1: Browser opened");
        callback(null, { browserID: 'browser_123' });
    }, 200);
}

function step2_GoToURL(browserData, callback) {
    console.log("🔹 Level 2: Navigating to URL");
    setTimeout(() => {
        if (!browserData.browserID) {
            callback('Browser not initialized');
            return;
        }
        console.log("✓ Level 2: URL loaded");
        callback(null, { ...browserData, pageLoaded: true });
    }, 200);
}

function step3_FindLoginForm(pageData, callback) {
    console.log("🔹 Level 3: Finding login form");
    setTimeout(() => {
        if (!pageData.pageLoaded) {
            callback('Page not loaded');
            return;
        }
        console.log("✓ Level 3: Login form found");
        callback(null, { ...pageData, formFound: true });
    }, 200);
}

function step4_EnterUsername(formData, callback) {
    console.log("🔹 Level 4: Entering username");
    setTimeout(() => {
        if (!formData.formFound) {
            callback('Form not found');
            return;
        }
        console.log("✓ Level 4: Username entered");
        callback(null, { ...formData, usernameEntered: true });
    }, 200);
}

function step5_EnterPassword(inputData, callback) {
    console.log("🔹 Level 5: Entering password");
    setTimeout(() => {
        if (!inputData.usernameEntered) {
            callback('Username not entered');
            return;
        }
        console.log("✓ Level 5: Password entered");
        callback(null, { ...inputData, passwordEntered: true });
    }, 200);
}

function step6_ClickLogin(submitData, callback) {
    console.log("🔹 Level 6: Clicking login button");
    setTimeout(() => {
        if (!submitData.passwordEntered) {
            callback('Password not entered');
            return;
        }
        console.log("✓ Level 6: Login button clicked");
        callback(null, { ...submitData, loginClicked: true });
    }, 200);
}

function step7_WaitForResponse(clickData, callback) {
    console.log("🔹 Level 7: Waiting for server response");
    setTimeout(() => {
        if (!clickData.loginClicked) {
            callback('Login not clicked');
            return;
        }
        console.log("✓ Level 7: Server responded with token");
        callback(null, { ...clickData, tokenReceived: 'token_abc123' });
    }, 200);
}

function step8_VerifyDashboard(tokenData, callback) {
    console.log("🔹 Level 8: Verifying dashboard");
    setTimeout(() => {
        if (!tokenData.tokenReceived) {
            callback('Token not received');
            return;
        }
        console.log("✓ Level 8: Dashboard verified");
        callback(null, { ...tokenData, dashboardVerified: true });
    }, 200);
}

// EXTREME PYRAMID - LEVEL 8 WITH ERROR HANDLING
step1_OpenBrowser((err1, data1) => {
    if (err1) {
        console.error('❌ Error at Level 1:', err1);
        return;
    }
    
    step2_GoToURL(data1, (err2, data2) => {
        if (err2) {
            console.error('❌ Error at Level 2:', err2);
            return;
        }
        
        step3_FindLoginForm(data2, (err3, data3) => {
            if (err3) {
                console.error('❌ Error at Level 3:', err3);
                return;
            }
            
            step4_EnterUsername(data3, (err4, data4) => {
                if (err4) {
                    console.error('❌ Error at Level 4:', err4);
                    return;
                }
                
                step5_EnterPassword(data4, (err5, data5) => {
                    if (err5) {
                        console.error('❌ Error at Level 5:', err5);
                        return;
                    }
                    
                    step6_ClickLogin(data5, (err6, data6) => {
                        if (err6) {
                            console.error('❌ Error at Level 6:', err6);
                            return;
                        }
                        
                        step7_WaitForResponse(data6, (err7, data7) => {
                            if (err7) {
                                console.error('❌ Error at Level 7:', err7);
                                return;
                            }
                            
                            step8_VerifyDashboard(data7, (err8, finalData) => {
                                if (err8) {
                                    console.error('❌ Error at Level 8:', err8);
                                    return;
                                }
                                
                                console.log("✅ E2E Test Complete with full error handling!\n");
                            });
                        });
                    });
                });
            });
        });
    });
});

// ============================================
// PROBLEMS WITH PYRAMID OF DOM
// ============================================

const problems = `
╔════════════════════════════════════════════════════════════════╗
║               PROBLEMS WITH PYRAMID OF DOM                    ║
╚════════════════════════════════════════════════════════════════╝

🔴 READABILITY ISSUES:
   ✗ The code forms a pyramid/triangle shape (hence "Pyramid of Doom")
   ✗ Difficult to follow the flow of execution
   ✗ Each callback is indented further than the last
   ✗ Hard to spot where one function ends and another begins

🔴 ERROR HANDLING NIGHTMARE:
   ✗ Each level needs its own error handling (if/else)
   ✗ Errors can easily be missed
   ✗ Error propagation is unclear
   ✗ Try/catch blocks don't work with async callbacks
   ✗ No global error handling mechanism

🔴 DEBUGGING DIFFICULTIES:
   ✗ Stack traces become very deep and confusing
   ✗ Breakpoints in nested callbacks are hard to track
   ✗ Variable scope becomes unclear (closure madness)
   ✗ Hard to understand which callback level you're in

🔴 CODE MAINTENANCE:
   ✗ Adding a new step requires rewriting indentation
   ✗ Removing a step risks breaking the entire flow
   ✗ Modifying logic in middle levels affects all nested levels
   ✗ Code review becomes tedious and error-prone

🔴 MEMORY & PERFORMANCE:
   ✗ Each callback closure captures all parent variables
   ✗ Variables stay in memory longer than needed
   ✗ Can lead to memory leaks in long-running applications
   ✗ Multiple setTimeout calls accumulate

🔴 TESTING COMPLEXITY:
   ✗ Unit testing is extremely difficult
   ✗ Mocking nested callbacks is complex
   ✗ Each level needs its own test setup
   ✗ Integration testing becomes unwieldy
`;

console.log(problems);

// ============================================
// SOLUTIONS TO PYRAMID OF DOM
// ============================================

const solutions = `
╔════════════════════════════════════════════════════════════════╗
║              SOLUTIONS TO PYRAMID OF DOM                      ║
╚════════════════════════════════════════════════════════════════╝

🟢 SOLUTION 1: PROMISES - .then() Chaining
   openBrowser()
     .then(goToLoginPage)
     .then(enterCredentials)
     .then(clickLogin)
     .then(() => console.log('Test Complete!'))
     .catch((error) => console.error('Error:', error));

🟢 SOLUTION 2: ASYNC/AWAIT (Modern & Clean)
   async function runTest() {
     await openBrowser();
     await goToLoginPage();
     await enterCredentials();
     await clickLogin();
     console.log('Test Complete!');
   }
   runTest().catch(console.error);

🟢 SOLUTION 3: NAMED FUNCTIONS (Cleaner callbacks)
   function testFlow() {
     openBrowser(handleBrowserOpen);
   }
   function handleBrowserOpen() {
     goToLoginPage(handlePageLoad);
   }
   // ... continue the chain

🟢 SOLUTION 4: EVENT EMITTERS / OBSERVABLES
   - Use Node.js EventEmitter
   - Use RxJS Observables
   - Use Web APIs like Promise

🟢 SOLUTION 5: GENERATORS & ITERATORS
   - Use function* and yield
   - More control over execution flow
   - Still complex but more elegant

🟢 BEST PRACTICE: COMBINATION
   - Use Promises or async/await as base
   - Keep functions pure and testable
   - Separate concerns (validation, API calls, UI)
   - Use proper error handling (try/catch)
   - Write unit tests for each function
`;

console.log(solutions);

// ============================================
// VISUAL PYRAMID REPRESENTATION
// ============================================

const pyramid = `
╔════════════════════════════════════════════════════════════════╗
║            VISUAL PYRAMID REPRESENTATION                      ║
╚════════════════════════════════════════════════════════════════╝

CALLBACK HELL PYRAMID STRUCTURE:

  openBrowser(function() {              ▲
    goToLoginPage(function() {           ▲
      enterCredentials(function() {      ▲
        clickLogin(function() {          ▲
          // Success                     ▲
        });                              ▲
      });                                ▲
    });                                  ▲
  });                                    ▲

  Each level indents more →  Increasing depth and complexity!


PROMISES SOLUTION - FLAT STRUCTURE:

  openBrowser()
    .then(goToLoginPage)
    .then(enterCredentials)
    .then(clickLogin)
    .then(() => console.log('Success'))
    .catch(error => console.error(error))

  Linear flow → Easy to read and understand!


ASYNC/AWAIT SOLUTION - LOOKS LIKE SYNCHRONOUS CODE:

  async function runTest() {
    await openBrowser();
    await goToLoginPage();
    await enterCredentials();
    await clickLogin();
    console.log('Success');
  }

  Synchronous-like code → Natural flow and error handling!
`;

console.log(pyramid);
