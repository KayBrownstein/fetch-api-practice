let data = {
  book: {
    name: 'book from fetch'
  }
};
let jsonStringData = JSON.stringify(data);

fetch('http://localhost:4567/books.json'
  // method: 'post',
  // body: jsonStringData
)
  .then(response => {
    if (response.ok) {
      console.log(response);
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  // .then(response => response.json())
  .then(response => response.json())
  .then(body => {
    console.log(jsonStringData);
    $.each(body.books, (index, element) => {
      $(`<li> ${element.name} </li>`).insertAfter("#books");
    });
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  // .then(body => {
  //   console.log(body);
  // })
  // .catch(error => console.error(`Error in fetch: ${error.message}`));
