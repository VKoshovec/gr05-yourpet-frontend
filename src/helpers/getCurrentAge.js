export function getCurrentAge(dateString) {
  let today = new Date();
  let dateParts = dateString.split(".");
  let birthDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
  let age = today.getFullYear() - birthDate.getFullYear();


  let m = today.getMonth() - birthDate.getMonth();
  let d = today.getDate() - birthDate.getDate();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age === 0) {
    m = 12 + m;
    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
      m--;
    }
  }

  return age ? age + ' year' : m + ' month';
}

