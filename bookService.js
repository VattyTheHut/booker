angular.module('app').service('bookService', function($http) {





  this.getBook = function(author){
    return $http.get("https://www.goodreads.com/author/list/" + author + "?format=xml&key=akVRqrnQWAzidmBfuy3JZQ")
    .then(function(response) {

      var bookList = response.data.split("<work>").slice(1);
      var formattedList = [];
      for (var book of bookList) {
          var formattedBook = {}
          formattedBook.isbn = book.substring(book.indexOf('<isbn>') + 6, book.indexOf('</isbn>')),
          formattedBook.description = book.substring(book.indexOf('<description>') + 13, book.indexOf('</description>'))
          formattedBook.publicationDay = book.substring(book.indexOf("<publication_day>") + 17, book.indexOf('</publication_day>'))
          formattedBook.publicationmouth = book.substring(book.indexOf("<publication_mouth>") + 6, book.indexOf('</publication_mouth>'))
          formattedBook.publicationyear = book.substring(book.indexOf("<publication_year>") + 18, book.indexOf('</publication_year>'))
          formattedBook.rating = parseInt(book.substring(book.indexOf('<average_rating>') + 16, book.indexOf('</average_rating>')))
          formattedBook.title = book.substring(book.indexOf('<title>') + 7, book.indexOf('</title>'))
          formattedBook.author = book.substring(book.indexOf('<name>') + 6, book.indexOf('</name>'))
          formattedBook.image_url = book.substring(book.indexOf('<image_url>') + 11, book.indexOf('</image_url>'))
          formattedList.push(formattedBook)
        }
    return formattedList;

  }) //end of .then
}

  }) //end of service
