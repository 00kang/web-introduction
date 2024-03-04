document.addEventListener("DOMContentLoaded", function () {
  //모든 DOM 요소가 로드된 후에 JavaScript 코드가 실행
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var selectedMovies = document.querySelectorAll(
      'input[type="radio"]:checked'
    );
    var selectedMovieValues = Array.from(selectedMovies).map(
      (radio) => radio.value
    );

    if (selectedMovieValues.length > 0) {
      alert(
        `${name}님, 저와 ${selectedMovieValues.length}개의 취향이 같으시네요!`
      );
    } else {
      alert(`${name}님, 저와 취향이 다르시네요!`);
    }
  });
});
