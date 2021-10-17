class Student{
    contstrucor(roomNo,firstName,lastName){
        this.rno = roomNo;
        this.fname = firstName;
        this.lname = lastName;

        console.log('Inside construcor');
    }
    set rollNo(newRollNo){
        console.log('Inside setter');
        this.rno = newRollNo;
    }
}

let s1 = new Student(101,'Brian','Kituku');
console.log(s1);
//we are caling setter
s1.rollNo = 20;
console.log(s1)