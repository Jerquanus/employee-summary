const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "templates");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email ?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee's id?"
    },
    {
        type: "list",
        name: "role",
        choices: [
            "Intern",
            "Manager",
            "Engineer"
        ]
    },

]



const employeeList = [];

employeeType = () => {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data);

            // ------------- Engineer Questions -----------
            if (data.role === "Engineer") {
                inquirer.prompt([{
                    type: "input",
                    name: "github",
                    message: "What is your Engineer's github?"
                },
                {
                    type: "list",
                    name: "addanother",
                    message: "Would you like to add another employee?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }])
                    .then(function (engineerData) {
                        const engineer = new Engineer(data.name, data.id, data.email, engineerData.github)
                        employeeList.push(engineer);

                        if (engineerData.addanother === "yes") {
                            employeeType();
                        }
                        if (engineerData.addanother === "no") {
                            fs.writeFileSync('renderEmployee/main.html', render(employeeList));
                        }
                    })
            }
            // ------------- Intern Questions -----------
            if (data.role === "Intern") {
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What school did the intern attend?"
                },
                {
                    type: "list",
                    name: "addanother",
                    message: "Would you like to add another employee?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }])
                    .then(function (internData) {
                        const intern = new Intern(data.name, data.id, data.email, internData.school)
                        employeeList.push(intern);

                        if (internData.addanother === "yes") {
                            employeeType();
                        }
                        if (internData.addanother === "no") {
                            fs.writeFileSync('renderEmployee/main.html', render(employeeList));
                        }
                    })
            }
            // ------------- Manager Questions -----------
            if (data.role === "Manager") {
                inquirer.prompt([{
                    type: "input",
                    name: "office",
                    message: "What is the manager's office number?"
                },
                {
                    type: "list",
                    name: "addanother",
                    message: "Would you like to add another employee?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }])
                    .then(function (managerData) {
                        const manager = new Manager(data.name, data.id, data.email, managerData.office)
                        employeeList.push(manager);

                        if (managerData.addanother === "yes") {
                            employeeType();
                        }
                        if (managerData.addanother === "no") {
                            fs.writeFileSync('renderEmployee/main.html', render(employeeList));
                        }

                    })
            }


        })
}
employeeType();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
