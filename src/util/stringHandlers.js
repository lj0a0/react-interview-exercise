const StringHandlers = {
  extractPageNumber(str) {
    try {
      var endIndex = str.search('>; rel="');
      var leftSideString = str.substring(0, endIndex);

      var pageStr = "&page=";
      var pageStrIndex = leftSideString.search(pageStr);
      var pageStrLength = pageStr.length;

      var pageNumber = str.substring(
        pageStrIndex + pageStrLength,
        leftSideString.length
      );

      return pageNumber;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  extractPageURL(str) {
    try {
      var endIndex = str.search('>; rel="');
      var leftSideString = str.substring(0, endIndex);

      var pageStr = "&page=";
      var pageStrIndex = leftSideString.search(pageStr);
      var pageStrLength = pageStr.length;

      var httpIndex = str.search("https:");
      var pageURL = str.substring(httpIndex, pageStrIndex + pageStrLength);

      return pageURL;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  extractCode(url) {
    var searchString = "code=";
    var lastIndex = url.lastIndexOf(searchString);
    var lastPosition = lastIndex + searchString.length;
    var urlLength = url.length;
    var code = url.substring(lastPosition, urlLength);
    return code;
  },

  validateFields(email, password) {
    if (email == "" || password == "") {
      return false;
    }
    return true;
  },

  validateUser(email, password) {
    if (email == "teste@gmail.com" && password == "123456") {
      return true;
    }
    return false;
  }
};

export default StringHandlers;
