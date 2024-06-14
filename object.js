$(document).ready(function(){
  var html = '<tr><td><input class="btn btn-danger" name="remove" type="button" value="Remove"></td><td><input type="text" name="Expense[]" class="form-control" required></td><td><input type="text" name="Amount[]" class="form-control amount" required></td><td><input type="text" name="RateOfImportance[]" class="form-control" required></td></tr>';
  var max = 20;
  var x = 1;

  $("#add").click(function(){
    if(x < max) {
      $("#table_field tbody").append(html);
      x++;
      calculateTotal();
    }
  });

  $("#table_field").on('click', 'input[name="remove"]', function(){
    $(this).closest('tr').remove();
    x--;
    calculateTotal();
  });

  $("#table_field").on('input', '.amount', function(){
    calculateTotal();
  });

  $("#tab1").on('keydown', function(e){
    if(e.key === "Tab") {
      if(x < max) {
        $("#table_field tbody").append(html);
        x++;
      }
    }
  });

  $("#table_field").on('keydown', '#tab2', function(e){
    if(e.key === "Tab") {
      if(x < max) {
        $("#table_field tbody").append(html);
        x++;
      }
    }
  });

  function calculateTotal() {
    var total = 0;
    $(".amount").each(function() {
      var amount = parseFloat($(this).val());
      if (!isNaN(amount)) {
        total += amount;
      }
    });
    $("#totalAmount").val(total.toFixed(2));
  }
});
