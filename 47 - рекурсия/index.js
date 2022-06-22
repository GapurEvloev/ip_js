function pow(n, s) {
  if(s === 1) {
    return n;
  }
  return n * pow(n, s-1);
}

console.log(pow(2, 2));
console.log(pow(2, 4));
// end

// start
function pow1(x, n) {
  let result = 1;
  
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function pow2(x, n) {
  if(n === 1) {
    return x;
  } 
  return x * pow2(x, n - 1);
}

console.log(pow2(2, 2));
console.log(pow2(2, 3));
// end


// start
const students = {
  js: [
    {
      name: "John",
      progress: 100
    },{
      name: "Han",
      progress: 60
    }
  ],

  html: {
    basic: [
      {
        name: "Alex",
        progress: 20
      },{
        name: "Franck",
        progress: 18
      }
    ],
    pro: [
      {
        name: "Sam",
        progress: 10
      }
    ],
    semi: {
      students: [{
        name: "Test",
        progress: 100
      }]
    }
  }
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (const course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (const subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (const subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

let total = getTotalProgressByRecursion(students);
console.log(total[0]/total[1]);
// end

// start
function factorial(n) {
  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
    return "Error! Enter the number!";
  }
  if(n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));