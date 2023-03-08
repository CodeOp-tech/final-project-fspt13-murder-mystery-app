DROP TABLE IF EXISTS questionsAnswers;

CREATE TABLE questionsAnswers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    question VARCHAR(100) NOT NULL,
    answer1 VARCHAR(300) NOT NULL,
    answer2 VARCHAR(300) NOT NULL,
    answer3 VARCHAR(300) NOT NULL, 
    correctAnswer VARCHAR(300) NOT NULL   
);

-- Easy qu1 id 1
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the correct syntax to write a comment in JavaScript?",
    "//This is a comment",
    "<!--This is a comment-->",
    "/This is a comment/",
    "//This is a comment"
 );

-- Easy qu2 id2
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
   ) VALUES (
    
    "Easy",
    "What is the correct way to declare a variable in JavaScript?",
    "var MyVariable = 1",
    "let myvariable = 1;",
    "const myVariable = 1;",
    "const myVariable = 1"
 );

-- Easy qu3 id3
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the output of the following code? console.log(5 + '5');",
    "10",
    "55",
    "Error",
    "55"
 );
-- Easy qu4 id4
INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the difference between '==' and '===' operators?",
    "'==' compares the value and type while '===' compares only the value.",
    "'===' compares the value and type while '==' compares only the value.",
    "'==' and '===' are the same.",
    "'===' compares the value and type while '==' compares only the value."
 );

-- Easy qu5 id5
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the output of the following code? console.log(typeof undefined);",
    "undefined",
    "null",
    "string",
    "undefined"
 );

-- Easy qu6 id6
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the output of the following code? console.log('10' - 5);",
    "5",
    "15",
    "Error",
    "5"
 );

 -- Easy qu7 id7
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the output of the following code? console.log('10' - 5);",
    "pop()",
    "shift()",
    "slice()",
    "pop()"
 );

-- Easy qu8 id8
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "Which loop is used to iterate over the properties of an object in JavaScript?",
    "for loop",
    "while loop",
    "for...in loop",
    "for...in loop"
 );

 -- Easy qu9 id9
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "What is the output of the following code? console.log(3 > 2 > 1);",
    "true",
    "false",
    "Error",
    "false"
 );

-- Easy qu10 id10
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Easy",
    "Which method is used to convert a string to an array in JavaScript?",
    "split()",
    "join()",
    "concat()",
    "split()"
 );

-- Intermediate qu1 id11
 INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the difference between 'let' and 'var' keywords in JavaScript?",
    "'let' creates a block-scoped variable while 'var' creates a function-scoped variable.",
    "'var' creates a block-scoped variable while 'let' creates a function-scoped variable.",
    "There is no difference between 'let' and 'var'.",
    "'let' creates a block-scoped variable while 'var' creates a function-scoped variable."
 );

-- Intermediate qu2 id12
  INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the output of the following code? console.log(typeof NaN);",
    "number",
    "string",
    "NaN is not a type",
    "number"
 );

-- Intermediate qu3 id13
  INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is a closure in JavaScript?",
    "A function that returns another function",
    "A function that takes another function as an argument",
    "A function that has access to variables in its outer scope",
    "A function that has access to variables in its outer scope"
 );

-- Intermediate qu4 id14
  INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "hat is the output of the following code? console.log(0.1 + 0.2 == 0.3);",
    "true",
    "false",
    "Error",
    "false"
 );

-- Intermediate qu5 id15
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "Which method is used to add an element to the beginning of an array in JavaScript?",
    "push()",
    "unshift()",
    "splice()",
    "unshift()"
 );

-- Intermediate qu6 id16
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the output of the following code? console.log('10' + 5);",
    "15",
    "105",
    "Error",
    "105"
 );

-- Intermediate qu7 id17
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the purpose of the 'this' keyword in JavaScript?",
    "It refers to the current function",
    "It refers to the global object",
    "It refers to the object that the function is a method of",
    "It refers to the object that the function is a method of"
 );

 -- Intermediate qu8 id18
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the difference between 'map()' and 'forEach()' methods in JavaScript?",
    "'map()' creates a new array while 'forEach()' doesn't.",
    "'forEach()' creates a new array while 'map()' doesn't.",
    "There is no difference between 'map()' and 'forEach()'",
    "'map()' creates a new array while 'forEach()' doesn't."
 );


 -- Intermediate qu9 id19
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is the output of the following code? console.log(typeof typeof 1);",
    "string",
    "number",
    "Error",
    "string"
 );

 -- Intermediate qu10 id20
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Intermediate",
    "What is a callback function in JavaScript?",
    "A function that is called when an event occurs",
    "A function that is passed as an argument to another function and is executed when the parent function is called",
    "A function that is used to validate user input",
    "A function that is passed as an argument to another function and is executed when the parent function is called"
 );

 -- Advanced qu1 id21
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between '==' and '===' in JavaScript?",
    "'==' compares the values of two variables, while '===' compares both the values and the types of the variables",
    "'===' compares the values of two variables, while '==' compares both the values and the types of the variables",
    "'==' and '===' are interchangeable and do not have any difference in JavaScript",
    "'==' compares the values of two variables, while '===' compares both the values and the types of the variables"
 );

 -- Advanced qu2 id22
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is hoisting in JavaScript?",
    "Hoisting is the ability to access a variable before it is declared",
    "Hoisting is the ability to access a function before it is declared",
    "Both 1 and 2",
    "Both 1 and 2"
 );

  -- Advanced qu3 id23
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between 'let' and 'const' in JavaScript?",
    "'let' is used to declare a variable that can be reassigned, while 'const' is used to declare a variable that cannot be reassigned",
    "'const' is used to declare a variable that can be reassigned, while 'let' is used to declare a variable that cannot be reassigned",
    "Both 'let' and 'const' are used to declare constants in JavaScript",
    "'let' is used to declare a variable that can be reassigned, while 'const' is used to declare a variable that cannot be reassigned"
 );

  -- Advanced qu4 id24
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is a closure in JavaScript?",
    "A closure is a function that can be called from another function",
    "A closure is a function that can be accessed from outside its lexical scope",
    "A closure is a function that has access to variables in its outer (enclosing) function’s scope",
    "A closure is a function that has access to variables in its outer (enclosing) function’s scope"
 );

  -- Advanced qu5 id25
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the purpose of the 'bind()' method in JavaScript?",
    "To create a new function with a specified 'this' value and arguments",
    "To create a new array with the results of calling a function for every array element",
    "To create a new object with the same prototype as an existing object",
    "To create a new function with a specified 'this' value and arguments"
 );

  -- Advanced qu6 id26
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between 'null' and 'undefined' in JavaScript?",
    "'null' represents a deliberate non-value, while 'undefined' represents an uninitialized value",
    "'undefined' represents a deliberate non-value, while 'null' represents an uninitialized value",
    "Both 'null' and 'undefined' represent uninitialized values",
    "'null' represents a deliberate non-value, while 'undefined' represents an uninitialized value"
 );

  -- Advanced qu7 id27
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the output of the following code? console.log(1 + '2' + 3 + '4');",
    "1234",
    "10",
    "1342",
    "1234"
 );

  -- Advanced qu8 id28
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between 'var', 'let', and 'const' in JavaScript?",
    "'var' is function-scoped, while 'let' and 'const' are block-scoped",
    "'let' and 'const' are function-scoped, while 'var' is block-scoped",
    "'var', 'let', and 'const' are all interchangeable in JavaScript",
    "'var' is function-scoped, while 'let' and 'const' are block-scoped"
 );

  -- Advanced qu9 id29
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between 'map()' and 'forEach()' in JavaScript?",
    "'map()' returns a new array with the results of calling a function for every array element, while 'forEach()' simply iterates over the array",
    "'forEach()' returns a new array with the results of calling a function for every array element, while 'map()' simply iterates over the array",
    "'map()' and 'forEach()' are interchangeable and do not have any difference in JavaScript",
    "'map()' returns a new array with the results of calling a function for every array element, while 'forEach()' simply iterates over the array"
 );

  -- Advanced qu10 id30
   INSERT INTO questionsAnswers (category, question, answer1, answer2, answer3, correctAnswer
 ) VALUES (
    
    "Advanced",
    "What is the difference between call and apply methods in JavaScript?",
    "There is no difference between call and apply methods",
    "Call method can only pass arguments as an array while apply method can pass arguments individually",
    "Apply method can only be used with functions that take a single argument while call method can be used with functions that take multiple arguments",
    "Call method can only pass arguments as an array while apply method can pass arguments individually"
 );

  

