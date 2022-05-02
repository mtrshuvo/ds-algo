/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function pattern2(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n - row + 1; col++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}
// pattern2(5);
function pattern3(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      str += col;
    }
    console.log(str);
    str = "";
  }
}
// pattern3(5);

function pattern4(n) {
  let str = "";
  for (let row = 1; row <= 2 * n - 1; row++) {
    let totalColumn = row > n ? 2 * n - row : row;
    for (let col = 1; col <= totalColumn; col++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}
// pattern4(5);

/*
 *
 ***
 *****
 *******
 *********
 */

function pattern5(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let i = n - 1; i >= row; i--) {
      str += " ";
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}
//pattern5(5);

/*
 *
 ***
 *****
 *******
 *********
 *******
 *****
 ***
 *
 */

function pattern6(n) {
  let str = "";
  for (let row = 1; row <= 2 * n - 1; row++) {
    let totalColumn = row > n ? 2 * n - row : row;
    let totalSpace = n - totalColumn;

    for (let s = 1; s <= totalSpace; s++) {
      str += " ";
    }
    for (let col = 1; col <= totalColumn; col++) {
      str += "* ";
    }
    console.log(str);
    str = "";
  }
}

// pattern6(5);

/*
    1
   212
  32123
 4321234
543212345
*/

function pattern7(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    //for first part column
    for (let s = n - row; s >= 1; s--) {
      str += " ";
    }
    for (let col = row; col >= 1; col--) {
      str += col;
    }
    //second part column
    for (let col = 2; col <= row; col++) {
      str += col;
    }
    console.log(str);
    str = "";
  }
}

// pattern7(5);

function pattern8(n) {
  let str = "";
  for (let row = 1; row < 2 * n; row++) {
    //for first part column
    let toc = row > n ? 2 * n - row : row;
    let tos = n - toc;
    for (let s = n - toc; s >= 1; s--) {
      str += " ";
    }
    for (let col = toc; col >= 1; col--) {
      str += col;
    }
    //second part column
    for (let col = 2; col <= toc; col++) {
      str += col;
    }
    console.log(str);
    str = "";
  }
}

// pattern8(5);

function pattern9(n) {
  let str = "";
  for (let row = 1; row <= 2 * n - 1; row++) {
    for (let col = 1; col <= 2 * n - 1; col++) {
      let inAtEveryIndex = 4;
      str += inAtEveryIndex;
    }
    console.log(str);
    str = "";
  }
}
pattern9(4);
