function SubmitForm() {
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();

$.post("submit.php", { name: name, email: email, phone: phone },
   function(data) {
     alert("Data Loaded: " + data);
   });
}