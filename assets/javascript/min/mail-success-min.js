function SubmitForm(){var a=$("#name").val(),e=$("#email").val(),n=$("#phone").val();$.post("submit.php",{name:a,email:e,phone:n},function(a){alert("Data Loaded: "+a)})}