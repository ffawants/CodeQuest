function openSection(sectionId) {
  const title = document.getElementById("title");
  const video = document.getElementById("video");
  const desc = document.getElementById("desc");
  const text = document.getElementById("text");

  let quizDone = false;
  title.innerHTML = "";
  video.innerHTML = "";
  desc.innerHTML = "";
  text.innerHTML = "";
  switch (sectionId) {
    case "l1":
      title.innerHTML += "Lesson 1";
      video.innerHTML +=
        '<iframe width="500" height="300" src="https://www.youtube.com/embed/HD13eq_Pmp8?si=gitxJQzUQBUSWoxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      desc.innerHTML += "<p>Lesson 1 description</p>";
      text.innerHTML += "<p>Lesson 1 lesson</p>";
      break;
    case "l2":
      title.innerHTML += "Lesson 2";
      video.innerHTML += "";
      desc.innerHTML += "<p>Lesson 2 description</p>";
      text.innerHTML += "<p>Lesson 2 lesson</p>";
      break;
    case "l3":
      title.innerHTML += "Lesson 3";
      video.innerHTML += "";
      desc.innerHTML += "<p>Lesson 3 description</p>";
      text.innerHTML += "<p>Lesson 3 lesson</p>";
      break;
    case "q1":
      title.innerHTML += "Quiz 1!";
      //todo: add a quiz and when they pass set quizDone to true to open the rest of the lessons
      break;
    case "l4":
      if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML += "Lesson 4";
      video.innerHTML += "";
      desc.innerHTML += "<p>Lesson 4 description</p>";
      text.innerHTML += "<p>Lesson 4 lesson</p>";
      break;
    case "l5":
      if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML += "Lesson 5";
      video.innerHTML += "";
      desc.innerHTML += "<p>Lesson 5 description</p>";
      text.innerHTML += "<p>Lesson 5 lesson</p>";
      break;
    case "f1":
      if (!quizDone) {
        alert("You have to complete the quiz first!!");
        return;
      }
      title.innerHTML += "Final Quiz!";
      break;
    default:
      break;
  }
}
