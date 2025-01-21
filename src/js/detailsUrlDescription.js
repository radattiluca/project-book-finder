/**This function takes the foundBook object and reprocesses it to return the book key to identify the description and the cover id number to display the cover image */
export default function detailsUrlDescription(foundBook) {
  if (foundBook) {
    console.log("Book found:", foundBook.key);
    console.log("Number cover id found:", foundBook.coverId);
    const keyBook = foundBook.key;
    const numCover = foundBook.coverId;
    return { keyBook, numCover }; // return an object with the book key and the cover id
  } else {
    throw new Error("Book not found");
  }
}
