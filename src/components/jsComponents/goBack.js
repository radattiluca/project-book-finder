// Fill the Result container with an empty value so that the last population reappears
export default function goBack(containerResult, containerCoverBook) {
  containerResult.innerHTML = "";
  containerCoverBook.innerHTML = "";
  return containerResult, containerCoverBook;
}
