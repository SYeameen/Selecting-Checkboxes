const checkboxes = document.querySelectorAll('.inbox [type = checkbox]');

function handleUpdate(e) {
  //Check if they had the shift key down And check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //Go ahead & do what we please
    //Loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Hey There!!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleUpdate)
);

let lastChecked;
