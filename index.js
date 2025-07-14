document.addEventListener('DOMContentLoaded', () => {
    const studentListDiv = document.getElementById('studentList');
    const submitButton = document.getElementById('submitAttendanceBtn');
    const currentDatePara = document.getElementById('currentDate');

    // NEW ELEMENTS FOR PASSWORD
    const passwordOverlay = document.getElementById('passwordOverlay');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const attendanceApp = document.getElementById('attendanceApp'); // The main app content

    // Set your password here
    const CORRECT_PASSWORD = "Chinna"; // <--- THIS IS YOUR SET PASSWORD

    // --- Password Authentication Logic ---
    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordOverlay.style.display = 'none'; // Hide the overlay
            attendanceApp.style.display = 'block'; // Show the main application
            errorMessage.textContent = ''; // Clear any previous error
            // Initialize the app only after successful login
            initializeAttendanceApp();
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
            passwordInput.value = ''; // Clear input field
            passwordInput.focus(); // Keep focus on the password field
        }
    }

    loginButton.addEventListener('click', checkPassword);

    passwordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Display current date
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    currentDatePara.textContent = today.toLocaleDateString('en-IN', options);

    // Simulated student data (replace with your actual section's data)
    const students = [{
            rollNo: 'D3',
            name: 'KUNDETI HEMALATHA',
            status: 'default'
        },
        {
            rollNo: 'D4',
            name: 'LAGUDU YAGNA SIVA TEJA',
            status: 'default'
        },
        {
            rollNo: 'D5',
            name: 'LEKKALA KIRAN',
            status: 'default'
        },
        {
            rollNo: 'D6',
            name: 'LIKITHA SRI MADDIPATLA',
            status: 'default'
        },
        {
            rollNo: 'D7',
            name: 'MADU RAMYA',
            status: 'default'
        },
        {
            rollNo: 'D8',
            name: 'MAGANTI RESHMA',
            status: 'default'
        },
        {
            rollNo: 'D9',
            name: 'MAHITH KRISHNA MULPURI',
            status: 'default'
        },
        {
            rollNo: 'E0',
            name: 'MALLAVOLU VENKATA SAI',
            status: 'default'
        },
        {
            rollNo: 'E1',
            name: 'MANAM KARTHIK',
            status: 'default'
        },
        {
            rollNo: 'E2',
            name: 'MANCHALLA SRIJA',
            status: 'default'
        },
        {
            rollNo: 'E3',
            name: 'MANDA VANAJA',
            status: 'default'
        },
        {
            rollNo: 'E4',
            name: 'MANDADAPU PRAVARSHA',
            status: 'default'
        },
        {
            rollNo: 'E5',
            name: 'MANUPATI CHETANA',
            status: 'default'
        },
        {
            rollNo: 'E6',
            name: 'MARUMANTHI KRISHNAVENI',
            status: 'default'
        },
        {
            rollNo: 'E7',
            name: 'MATTA SRAVANTHI',
            status: 'default'
        },
        {
            rollNo: 'E8',
            name: 'MEDAM LOKA CHANDRA',
            status: 'default'
        },
        {
            rollNo: 'E9',
            name: 'MEDARAMETLA LAVANYA',
            status: 'default'
        },
        {
            rollNo: 'F0',
            name: 'MEDICHARLA KUSMITHA',
            status: 'default'
        },
        {
            rollNo: 'F1',
            name: 'MENDEM JEENA MADHURI',
            status: 'default'
        },
        {
            rollNo: 'F2',
            name: 'MENTADA SRAVANI ',
            status: 'default'
        },
        {
            rollNo: 'F3',
            name: 'MOHAMMAD RAHETHUNNISA',
            status: 'default'
        },
        {
            rollNo: 'F4',
            name: 'MOHAMMAD SANAAFROZE',
            status: 'default'
        },
        {
            rollNo: 'F5',
            name: 'MOHAMMED SEEMASADIYA',
            status: 'default'
        },
        {
            rollNo: 'F6',
            name: 'MOHMMAD UMAR SHARIFF',
            status: 'default'
        },
        {
            rollNo: 'F7',
            name: 'MONDI RAVI TEJA',
            status: 'default'
        },
        {
            rollNo: 'F8',
            name: 'MORU RAMYA SREE',
            status: 'default'
        },
        {
            rollNo: 'F9',
            name: 'MOSALI MANGARAJU',
            status: 'default'
        },
        {
            rollNo: 'G0',
            name: 'MOYYA SAI DILLESWARARAO',
            status: 'default'
        },
        {
            rollNo: 'G1',
            name: 'MUDIYAM LAKSHMI NIVAS REDDY',
            status: 'default'
        },
        {
            rollNo: 'G2',
            name: 'MUKKAMALA SAI SRI LASYA',
            status: 'default'
        },
        {
            rollNo: 'G3',
            name: 'MULLANGI VARSHITHA',
            status: 'default'
        },
        {
            rollNo: 'G4',
            name: 'MUNJETI AMULYA',
            status: 'default'
        },
        {
            rollNo: 'G5',
            name: 'MUTYALA SRI LAKSHMI',
            status: 'default'
        },
        {
            rollNo: 'G6',
            name: 'NAGIREDDY HARSHA VARDHAN REDDY',
            status: 'default'
        },
        {
            rollNo: 'G7',
            name: 'NAGULA GAYATHRI',
            status: 'default'
        },
        {
            rollNo: 'G8',
            name: 'NALLAMELLI SIRI',
            status: 'default'
        },
        {
            rollNo: 'G9',
            name: 'PRIYALATHA NALLI',
            status: 'default'
        },
        {
            rollNo: 'H0',
            name: 'NAMBURI BHARGAVA SRI SAI',
            status: 'default'
        },
        {
            rollNo: 'H1',
            name: 'NANDETI MANASA',
            status: 'default'
        },
        {
            rollNo: 'H2',
            name: 'NANDIGAM VIJAYA',
            status: 'default'
        },
        {
            rollNo: 'H3',
            name: 'NARISETTI JAHNAVI',
            status: 'default'
        },
        {
            rollNo: 'H4',
            name: 'NEKKANTI SARANYA',
            status: 'default'
        },
        {
            rollNo: 'H5',
            name: 'NETHALA CHARISHMA',
            status: 'default'
        },
        {
            rollNo: 'H6',
            name: 'NUNNA MOHAN SUMANTH',
            status: 'default'
        },
        {
            rollNo: 'H7',
            name: 'NUTANGI PRASANTHI',
            status: 'default'
        },
        {
            rollNo: 'H8',
            name: 'NUTHALAPATI HARIKA',
            status: 'default'
        },
        {
            rollNo: 'H9',
            name: 'PALLIKONDA SOWJANYA',
            status: 'default'
        },
        {
            rollNo: 'I0',
            name: 'PAMARTHI TEJASWI',
            status: 'default'
        },
        {
            rollNo: 'I1',
            name: 'PAMARTHY VENKATESWARARAO',
            status: 'default'
        },
        {
            rollNo: 'I2',
            name: 'PAMIREDDY DHANUSH REDDY',
            status: 'default'
        },
        {
            rollNo: 'I3',
            name: 'PANDHI JEEVANA JYOTHI',
            status: 'default'
        },
        {
            rollNo: 'I4',
            name: 'PARVATHANENI SAI SRINIVAS',
            status: 'default'
        },
        {
            rollNo: 'I5',
            name: 'PASALAPUDI GREESHMA SRI',
            status: 'default'
        },
        {
            rollNo: 'I6',
            name: 'PEDDINTI GANESH',
            status: 'default'
        },
        {
            rollNo: 'I7',
            name: 'PERURI SRI SAI SURYA RAGHAVA',
            status: 'default'
        },
        {
            rollNo: 'I8',
            name: 'PILLA SATISH KUMAR',
            status: 'default'
        },
        {
            rollNo: 'I9',
            name: 'PINAPATHINA TULASI SRIRAM',
            status: 'default'
        },
        {
            rollNo: 'J0',
            name: 'POLAVARAPU DEVI SATYA SRI',
            status: 'default'
        },
        {
            rollNo: 'J1',
            name: 'PONNANA MOUNIKA',
            status: 'default'
        },
        {
            rollNo: 'J2',
            name: 'POTHAMSETTY NIKHIL SRI ADITYA RAM',
            status: 'default'
        },
        {
            rollNo: 'J3',
            name: 'POTHINEDI VENKATA HANUMAN',
            status: 'default'
        },
        {
            rollNo: 'J4',
            name: 'POTHINENI MANASA',
            status: 'default'
        },
        {
            rollNo: 'J5',
            name: 'PRATHIPATI SONIYA',
            status: 'default'
        },
        {
            rollNo: 'J6',
            name: 'PIRIYA HARSHA VARDHAN',
            status: 'default'
        },
        {
            rollNo: 'J7',
            name: 'PUSHYA SOMESWARI',
            status: 'default'
        },
        {
            rollNo: 'J8',
            name: 'RAGHUMANDA SUSHMA',
            status: 'default'
        },
        {
            rollNo: '514',
            name: 'MAHAMMAD ILIYAZ',
            status: 'default'
        },
        {
            rollNo: '515',
            name: 'MALLA MOUNIKA',
            status: 'default'
        },
        {
            rollNo: '516',
            name: 'MOHAMMAD RAFIUDDIN',
            status: 'default'
        },
        {
            rollNo: '517',
            name: 'NAIDU LAKSHMI GNANA PRASANNA',
            status: 'default'
        },
        {
            rollNo: '518',
            name: 'PAILA JYOTHSNA',
            status: 'default'
        },
        {
            rollNo: '519',
            name: 'POLAVARAPU HEMANJALI',
            status: 'default'
        },

        // Add more students as needed for your section
    ];

    // Function to render the student list - now called only after login
    function renderStudentList() {
        studentListDiv.innerHTML = ''; // Clear previous list
        students.forEach(student => {
            const studentRow = document.createElement('div');
            studentRow.classList.add('student-row');
            studentRow.dataset.rollNo = student.rollNo; // Store roll number for easy access

            studentRow.innerHTML = `
                <div class="student-info">${student.rollNo} - ${student.name}</div>
                <div class="attendance-buttons">
                    <button class="attendance-btn ${student.status === 'present' ? 'present' : 'default'}" data-status="present">Present</button>
                    <button class="attendance-btn ${student.status === 'absent' ? 'absent' : 'default'}" data-status="absent">Absent</button>
                </div>
            `;
            studentListDiv.appendChild(studentRow);
        });
    }

    // Event listener for marking attendance (using event delegation)
    studentListDiv.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.classList.contains('attendance-btn')) {
            const studentRow = clickedButton.closest('.student-row');
            const rollNo = studentRow.dataset.rollNo;
            const newStatus = clickedButton.dataset.status;

            // Find the student in our data array and update their status
            const studentIndex = students.findIndex(s => s.rollNo === rollNo);
            if (studentIndex !== -1) {
                students[studentIndex].status = newStatus;
            }

            // Update button styles for the clicked row
            const buttonsInRow = studentRow.querySelectorAll('.attendance-btn');
            buttonsInRow.forEach(btn => {
                btn.classList.remove('present', 'absent');
                btn.classList.add('default');
            });
            clickedButton.classList.remove('default');
            clickedButton.classList.add(newStatus);
        }
    });

    // Event listener for the submit button
    submitButton.addEventListener('click', () => {
        let presentCount = 0;
        const absentStudents = [];

        students.forEach(student => {
            if (student.status === 'present') {
                presentCount++;
            } else if (student.status === 'absent') {
                absentStudents.push(`${student.rollNo} (${student.name})`);
            }
        });

        const totalStudents = students.length;
        const absentCount = absentStudents.length;
        const unMarkedCount = totalStudents - presentCount - absentCount;

        let attendanceSummary = `*Attendance for ${currentDatePara.textContent}*\n\n`;
        attendanceSummary += `Total Students: ${totalStudents}\n`;
        attendanceSummary += `Present: ${presentCount}\n`;
        attendanceSummary += `Absent: ${absentCount}\n`;

        if (unMarkedCount > 0) {
            attendanceSummary += `Unmarked: ${unMarkedCount}\n`;
        }

        if (absentStudents.length > 0) {
            attendanceSummary += `\n*Absentees:*\n`;
            absentStudents.forEach((absentee, index) => {
                attendanceSummary += `${index + 1}. ${absentee}\n`;
            });
        } else {
            attendanceSummary += `\nAll students are present today! Great job!`;
        }

        // Simulate "sending to mobile" by opening a share dialog
        if (navigator.share) {
            navigator.share({
                title: 'Daily Attendance Report',
                text: attendanceSummary,
            }).then(() => {
                alert('Attendance report shared successfully!');
            }).catch((error) => {
                console.error('Error sharing:', error);
                alert('Failed to share attendance report. You can copy it manually.');
                navigator.clipboard.writeText(attendanceSummary).then(() => {
                    alert('Attendance report copied to clipboard!');
                }).catch(err => {
                    alert('Could not copy attendance report. Please copy it manually from the console.');
                    console.log(attendanceSummary);
                });
            });
        } else {
            alert('Your browser does not support native sharing. The attendance summary will be copied to your clipboard, or you can find it in the console.');
            navigator.clipboard.writeText(attendanceSummary).then(() => {
                alert('Attendance report copied to clipboard!');
            }).catch(err => {
                alert('Could not copy attendance report. Please copy it manually from the console.');
                console.log(attendanceSummary);
            });
        }
    });

    // --- New Initialization Function ---
    // This function wraps the initial setup of the attendance app
    function initializeAttendanceApp() {
        renderStudentList();
        // Any other setup that should happen AFTER login goes here
    }

    // Initially, keep the attendance app hidden until logged in
    attendanceApp.style.display = 'none';
    // Focus on the password input when the page loads
    passwordInput.focus();
});