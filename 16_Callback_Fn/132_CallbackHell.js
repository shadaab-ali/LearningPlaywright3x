// ============================================
// CALLBACK HELL - The Pyramid of Doom
// ============================================

// Simulating async operations (like API calls, file operations, etc.)

// Function 1: Get user data
function getUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "John", email: "john@example.com" };
        console.log("✓ User fetched:", user.name);
        callback(user);
    }, 1000);
}

// Function 2: Get user posts
function getUserPosts(userId, callback) {
    setTimeout(() => {
        const posts = [
            { id: 1, title: "First Post", content: "Hello World" },
            { id: 2, title: "Second Post", content: "Learning JS" }
        ];
        console.log("✓ Posts fetched for user", userId);
        callback(posts);
    }, 1000);
}

// Function 3: Get post comments
function getPostComments(postId, callback) {
    setTimeout(() => {
        const comments = [
            { id: 1, author: "Alice", text: "Great post!" },
            { id: 2, author: "Bob", text: "Thanks for sharing" }
        ];
        console.log("✓ Comments fetched for post", postId);
        callback(comments);
    }, 1000);
}

// Function 4: Get comment replies
function getCommentReplies(commentId, callback) {
    setTimeout(() => {
        const replies = [
            { id: 1, author: "Charlie", text: "Agreed!" },
            { id: 2, author: "Diana", text: "Well said" }
        ];
        console.log("✓ Replies fetched for comment", commentId);
        callback(replies);
    }, 1000);
}

// Function 5: Save processed data
function saveProcessedData(data, callback) {
    setTimeout(() => {
        console.log("✓ Data saved successfully");
        callback(data);
    }, 500);
}

// ============================================
// THE CALLBACK HELL (Pyramid of Doom)
// ============================================
console.log("\n--- CALLBACK HELL EXAMPLE ---\n");
console.log("Fetching user data and all nested information...\n");

getUser(1, function(user) {
    console.log("Step 1: Got user -", user.name);
    
    getUserPosts(user.id, function(posts) {
        console.log("Step 2: Got", posts.length, "posts");
        
        getPostComments(posts[0].id, function(comments) {
            console.log("Step 3: Got", comments.length, "comments");
            
            getCommentReplies(comments[0].id, function(replies) {
                console.log("Step 4: Got", replies.length, "replies");
                
                saveProcessedData({
                    user: user,
                    posts: posts,
                    comments: comments,
                    replies: replies
                }, function(finalData) {
                    console.log("Step 5: Data processed and saved!");
                    console.log("\n✓ All operations completed successfully");
                    console.log("Final data structure:", JSON.stringify(finalData, null, 2));
                    
                    // This is the END - notice the many closing braces!
                });
            });
        });
    });
});

// ============================================
// PROBLEMS WITH CALLBACK HELL:
// ============================================
/*
    1. READABILITY ISSUES
       - Hard to follow the flow of execution
       - Pyramid-shaped indentation (Pyramid of Doom)
       - Code becomes hard to maintain

    2. ERROR HANDLING
       - Each callback needs its own error handling
       - Error propagation becomes difficult
       - Easy to miss error cases

    3. DEBUGGING
       - Stack traces become hard to read
       - Difficult to understand the call chain
       - Breakpoints less effective

    4. CODE REUSE
       - Callbacks are tightly coupled
       - Hard to compose functions
       - Duplication of patterns

    5. VARIABLE SCOPE
       - All variables in outer scopes remain in memory
       - Can lead to memory leaks
       - Scope conflicts possible

    6. FLOW CONTROL
       - Hard to implement loops, conditionals
       - Difficult to run operations in parallel
       - Sequential nature not always necessary
*/


// ============================================
// Even DEEPER CALLBACK HELL
// ============================================
console.log("\n\n--- EVEN DEEPER CALLBACK HELL ---\n");

getUser(2, function(user) {
    if (!user) {
        console.log("Error: User not found");
        return;
    }
    
    getUserPosts(user.id, function(posts) {
        if (!posts || posts.length === 0) {
            console.log("Error: No posts found");
            return;
        }
        
        // Nested loop with callbacks - ULTIMATE HELL!
        posts.forEach(function(post, index) {
            getPostComments(post.id, function(comments) {
                if (!comments) return;
                
                comments.forEach(function(comment, cIndex) {
                    getCommentReplies(comment.id, function(replies) {
                        if (!replies) return;
                        
                        replies.forEach(function(reply, rIndex) {
                            saveProcessedData({
                                post: post,
                                comment: comment,
                                reply: reply
                            }, function(data) {
                                console.log(`Saved: Post ${index} > Comment ${cIndex} > Reply ${rIndex}`);
                                
                                // Notice: Very deep nesting + looping = Nightmare!
                            });
                        });
                    });
                });
            });
        });
    });
});


// ============================================
// WHY THIS IS CALLED "CALLBACK HELL"
// ============================================
/*
    - The indentation creates a visual "pyramid" or "death star"
    - Each nested callback adds another level of indentation
    - Multiple nested callbacks become unreadable
    - The code flows in a confusing way
    - Error handling is scattered throughout
    - Debugging feels like descending into a maze
    
    SOLUTIONS:
    1. Use Promises (.then(), .catch())
    2. Use async/await (modern approach)
    3. Use named functions instead of anonymous callbacks
    4. Use libraries like async.js
    5. Refactor into smaller functions
*/
