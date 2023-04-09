<!DOCTYPE html>
<html>
  <head>
    <title>Currency Calculator</title>
  </head>
  <body>
    <h1>Currency Calculator</h1>
    <form method="post" action="activity.php">
      <label for="amount">Amount:</label>
      <input type="text" id="amount" name="amount"><br>

      <label for="from">From:</label>
      <select id="from" name="from">
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="CAD">CAD - Canadian Dollar</option>
        
      </select><br>

      <label for="to">To:</label>
      <select id="to" name="to">
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="CAD">CAD - Canadian Dollar</option>
       
      </select><br>

      <input type="submit" value="Convert">
    </form>

    <?php
      if(isset($_POST['amount'])){
        $amount = $_POST["amount"];
        $from_currency = $_POST["from"];
        $to_currency = $_POST["to"];    

        $rates = array(
          "USD/EUR" => 0.8315,
          "USD/CAD" => 1.2591,
          "EUR/CAD" => 1.4739,
        );

        $rate_key = $from_currency . "/" . $to_currency;
        $exchange_rate = $rates[$rate_key];

        $converted_amount = $amount * $exchange_rate;

        echo "<h1>Conversion Result</h1>";
        echo "<p>" . number_format($amount, 2) . " $from_currency = " . number_format($converted_amount, 2) . " $to_currency</p>";
      }
    ?>
  
  </body>
</html>