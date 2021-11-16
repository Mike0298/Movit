const isEmpty = (input) => {
  if (input.trim() === "") return true;
  else return false;
};

const isEmail = (email) => {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isAValidRequest = (array) => {
  let inValidCounter = 0;
  for (let x of array) {
    if (x === undefined) inValidCounter++;
  }
  return inValidCounter === 0 ? true : false;
};

const returnResult = (errors) => {
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateRegisterData = (data) => {
  let errors = {};

  if (!isAValidRequest([data.email, data.password, data.name])) {
    errors.inValidRequest = "Invalid request, missing required attribute(s)";
    return returnResult(errors);
  }

  //check email
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  else if (!isEmail(data.email)) errors.email = "Must be a valid email address";

  //check password
  if (isEmpty(data.password)) errors.password = "Must not be empty";
  else if (data.password.length < 6 || data.password.length > 18)
    errors.password = "Password must be between 6 to 18 characters";

  //check name
  if (isEmpty(data.name)) errors.name = "Must not be empty";

  return returnResult(errors);
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (!isAValidRequest([data.email, data.password])) {
    errors.inValidRequest = "Invalid request, missing required attribute(s)";
    return returnResult(errors);
  }

  //check email
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  else if (!isEmail(data.email)) errors.email = "Must be a valid email address";

  //check password
  if (isEmpty(data.password)) errors.password = "Must not be empty";

  return returnResult(errors);
};

exports.validateProfileData = (data) => {
  let errors = {};
  //check favGenres
  if (!isAValidRequest([data.favGenres])) {
    errors.inValidRequest = "Invalid request, missing required attribute(s)";
    return returnResult(errors);
  }
  if (isEmpty(data.favGenres)) errors.favGenres = "Must not be empty";

  return returnResult(errors);
};

exports.validateNewMovieData = (data) => {
  let errors = {};

  if (
    !isAValidRequest([data.title, data.releaseYear, data.genres, data.imageUrl])
  ) {
    errors.inValidRequest = "Invalid request, missing required attribute(s)";
    return returnResult(errors);
  }
  //check title
  if (isEmpty(data.title)) errors.title = "Title must not be empty";
  //check releaseYear
  if (isEmpty(data.releaseYear))
    errors.releaseYear = "Release year must not be empty";
  //check genres
  if (isEmpty(data.genres)) errors.genres = "At least one genre is needed";
  //check imageUrl
  if (isEmpty(data.imageUrl)) errors.imageUrl = "Image URL must not be empty";
  //check director
  if (isEmpty(data.director)) errors.director = "A director is requried";

  return returnResult(errors);
};

exports.validateCommentData = (data) => {
  let errors = {};
  if (!isAValidRequest([data.text])) {
    errors.inValidRequest = "Invalid request, missing required attribute(s)";
    return returnResult(errors);
  }
  if (isEmpty(data.text)) errors.text = "Comment must not be empty";
  return returnResult(errors);
};
