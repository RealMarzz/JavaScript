function findAcademicYear(age) {
    let academicYear;
  
    switch (true) {
      case age === 5:
        academicYear = "Year 1";
        break;
      case age === 6:
        academicYear = "Year 2";
        break;
      case age === 7:
        academicYear = "Year 3";
        break;
      case age === 8:
        academicYear = "Year 4";
        break;
      case age === 9:
        academicYear = "Year 5";
        break;
      case age === 10:
        academicYear = "Year 6";
        break;
      case age === 11:
        academicYear = "Year 7";
        break;
      case age === 12:
        academicYear = "Year 8";
        break;
      case age === 13:
        academicYear = "Year 9";
        break;
      case age === 14:
        academicYear = "Year 10";
        break;
      case age === 15:
        academicYear = "Year 11";
        break;
      case age === 16:
        academicYear = "Year 12";
        break;
      case age === 17:
        academicYear = "Year 13";
        break;
      case age >= 18:
        academicYear = "University";
        break;
      default:
        academicYear = "Too young for school";
    }
  
    return academicYear;
  }
  
  function showAcademicYear() {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = findAcademicYear(age);
    document.getElementById("result").textContent = `Result: ${result}`;
  }
  