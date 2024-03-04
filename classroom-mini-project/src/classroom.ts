export function getNumberOfGrades(grades: number[]) {
  return grades.length;
}

export function getSumGrades(grades: number[]) {
  return grades.reduce((acc, curr) => acc + curr, 0);
}

export function getAverageValue(grades: number[]) {
  return getSumGrades(grades) / getNumberOfGrades(grades);
}

export function getPassingGrades(grades = []) {
  return grades.filter((grade) => grade >= 70);
}

export function getFailingGrades(grades = []) {
  return grades.filter((grade) => grade < 70);
}

export function getRaisedGrades(grades = []) {
  return grades.map((grade) => grade + 5);
}
