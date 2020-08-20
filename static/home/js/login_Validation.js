$('#myModal').modal('show');
$(function() {
    $.validator.addMethod("pwcheck", function(value) {
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    }, "Please Enter Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)");


    $.validator.addMethod("phonecheck", function(value) {
        return /^[6-9]\d{9}$/.test(value);
    }, "Please Enter Mobile Number starts With 9 or 8 or 7 or 6 and  Total 10 Digits ");


    var loginform = $('#loginform');

    if (loginform.length) {
        loginform.validate({
            rules: {
                email: {
                    required: true
                },
                password: {
                    required: true,
                    pwcheck: true
                }

            },
            messages: {
                email: {
                    required: 'Email Id is Mandatory!'
                },
                password: {
                    required: 'Password is Mandatory!'
                }


            }



        });
    }

    var registerform = $('#registerform');

    if (registerform.length) {
        registerform.validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true
                },
                mobile: {
                    required: true,
                    phonecheck: true

                },


                password: {
                    required: true,
                    pwcheck: true
                },
                confirmpassword: {
                    required: true,
                    equalTo: "#password"
                }



            },
            messages: {
                username: {
                    required: 'Name is Mandatory!'
                },
                email: {
                    required: 'Email is Mandatory!'
                },
                mobile: {
                    required: 'Mobile is Mandatory!',


                },
                password: {
                    required: 'Password is Mandatory!'
                },
                confirmpassword: {
                    required: 'Confirmpassword is Mandatory!'
                }



            }

        });
    }

});