//Decalring the Function
function loadpoll(int) {
  //Declare the varaibles
  var x = 5;
  var y = 2;
  var int;

  //if the value passed into int is 1 x (yes)is incremented
  if (int == 1) {
    x = x + 1;
  }
    //if the value passed into int is 1 x (yes)is incremented
  if (int == 0) {
    y = y + 1;
  }

  var z = x + y;

  //Used to work out the size of the bar finds the percentage.
  var widthx = 100 * (x / (x + y));
  var widthy = 100 * (y / (x + y));
  //The output to the page.
  var outputpoll = `

  <h2>Votes:</h2>
  <table>
    <tr>
      <td>Yes:</td>
      <td>
        <div style="max-width= 100%;  width: ${widthx}px; height: 20px;background-color:#C5110B;color:white;">
        ${x}
        </div>
      </td>
    </tr>
    <br>
    <tr>
      <td>No:</td>
      <td>
          <div style="max-width= 100%; width:${widthy}px; height:20px;background-color:#C5110B;color:white;">
          ${y}
          </div>
      </td>
    </tr>
  </table>
  `;
  //Hides the buttons so that the used can't have multiple votes
  document.getElementById('outputpoll').innerHTML = outputpoll;
  document.getElementById('poll1').style.display = 'none'
  document.getElementById('poll2').style.display = 'none'
  document.getElementById('poll3').style.display = 'none'
  document.getElementById('poll4').style.display = 'none'
}
