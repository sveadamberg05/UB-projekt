function randomizeAvailability() {
  let books = document.querySelectorAll(".book");

  for (let i = 0; i < books.length; i++) {
    let isAvailable = Math.random() < 0.5;
    let book = books[i];

    if (isAvailable) {
      book.classList.add("available");
      book.classList.remove("non-available");
      book.innerHTML = '<i class="fa-solid fa-circle-check"></i>Tillgänglig';
    } else {
      book.classList.add("non-available");
      book.classList.remove("available");
      book.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>Utlånad';
    }
  }
}
