const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        const total = values.reduce((sum, g) => sum + g, 0);
        return total / values.length;
    },

    getSubjectAverage(subject) {
        const relevant = this.students
            .filter(s => subject in s.grades)
            .map(s => s.grades[subject]);
        if (relevant.length === 0) return null;
        const total = relevant.reduce((sum, g) => sum + g, 0);
        return total / relevant.length;
    },

    getTopStudent() {
        let top = null;
        let topAvg = -Infinity;
        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > topAvg) {
                topAvg = avg;
                top = student;
            }
        }
        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        let report = `Report Card for ${student.name}\n`;
        report += "-----------------------------\n";
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        const avg = this.getStudentAverage(name);
        report += "-----------------------------\n";
        report += `Average: ${avg.toFixed(2)} (${this.getLetterGrade(avg)})`;
        return report;
    }
};

// Test
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));