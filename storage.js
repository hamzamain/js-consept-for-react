const addToLocalStorag = () => {
  const inputField = document.getElementById("input-field");
  const input = inputField.value;
  const valueField = document.getElementById("value-field");
  const value = valueField.value;
  inputField.value = "";
  valueField.value = "";
  if (input && value) {
    localStorage.setItem(input, value);
  }
};
