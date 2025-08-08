//This is the data for the timetable 
const timetable = [
    {term: "Fall",
     courses: [
        {code: "CSD105", name: "Python", hrs: 3},
        {code: "CMM115", name: "Communications I", hrs: 3},
        {code: "CSD120", name: "Intro to Web Dev", hrs: 4},
        {code: "CSO104", name: "Intro to Operating Systems and LAN", hrs: 4},
        {code: "MTH122", name: "Computer Mathemetics", hrs: 3},
        {code: "TNY130", name: "Technology in Society", hrs: 2}
     ]},
    {term: "Winter",
        courses: [
            {code: "CSA103", name: "Business Applications I", hrs: 4},
            {code: "CSD102", name: "Programming using C++", hrs: 5},
            {code: "CSD212", name: "Web Scripting Languages", hrs: 4},
            {code: "CSO102", name: "Intro to Linux", hrs: 4},
            {code: "CST104", name: "PC Hardware and Networking", hrs: 5}
        ]
    }
];

function generateTimeTable(data){
    let totalHrs = 0;
    let rows = "";

    data.forEach(termObj => {
        termObj.courses.forEach((course, idx) => {
            totalHrs += course.hrs;
            rows += `<tr>
                ${idx === 0 ? `<th rowspan="${termObj.courses.length}">${termObj.term}</th>` : ""}
                <td>${course.code}</td>
                <td>${course.name}</td>
                <td>${course.hrs}</td>
            </tr>`;
        });
    });

    return `<table>
        <caption>Table 1. Current Courses</caption>
        <thead>
            <tr>
                <th rowspan="2">Term</th>
                <th colspan="3">Course</th>
            </tr>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Hrs/Week</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3">Total</th>
                <td>${totalHrs}</td>
            </tr>
        </tfoot>
    </table>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("making-a-table").innerHTML = generateTimeTable(timetable);
});