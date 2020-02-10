const server = "http://localhost:3000"

$(document).ready(function () {

  if (!localStorage.getItem('token')) {
    $('#divLogin').show()
    $('#divRegister').hide()
    $('#divComicList').hide()
    $('#divUpdate').hide()

  } else {
    $('#divLogin').hide()
    $('#divRegister').hide()
    $('#divComicList').show()
    $('#divUpdate').hide()
  }

  function login(email, password) {
    $.ajax({
      method: 'POST',
      url: `${server}/user/login`,
      data: {
        email: email.val('#email'),
        password: password.val('#password')
      }
        .done(function (data) {
          localStorage.setItem('token', data)
          $('#divLogin').hide()
          $('#divComicList').show()
        })
        .fail(function (err) {
          console.log(err, 'error')
        })
    })
  }

  $('#loginBtn').on('submit', function (event) {
    event.preventDefault()
    login(email, password)
  })
  $('#toRegister').on('click', function (event) {
    event.preventDefault()
    $('#divRegister').show()
    $('#divLogin').hide()
  })
  $('#toLogin').on('click', function (event) {
    event.preventDefault()
    $('#divRegister').hide()
    $('#divLogin').show()
  })

  function register(name, email, password) {
    $.ajax({
      method: 'POST',
      url: `${server}/user/register`,
      data: {
        name: name.val(),
        email: email.val(),
        password: password.val()
      }
        .done(function (data) {
          localStorage.setItem('token', data)
          $('#divLogin').hide()
          $('#divComicList').show()
        })
        .fail(function (err) {
          console.log(err, 'error')
        })
    })
  }

  $('#registerSubmit').on('submit', function (event) {
    event.preventDefault()
    register(name, email, password)
  })



  // function showComics() {
  //   $.ajax({
  //     method: 'GET',
  //     url: `${server}/comics`,
  //     // headers: {
  //     //   localStorage(token)
  //     // }
  //   })
  //     .done(function () {
  //       $('#divComicList').show()
  //     })
  // }


});