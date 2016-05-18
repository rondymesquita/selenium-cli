// webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until; driver = new webdriver.Builder().forBrowser('firefox').build();
webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

driver = new webdriver.Builder()
.forBrowser('firefox')
.build();
//driver.get('https://duckduckgo.com/');
// driver.findElement(By.id('search_form_input_homepage')).sendKeys('darth vader');
// driver.findElement(By.id('search_button_homepage')).click();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
  if (text.trim() === 'quit') {
    done();
  }
  
  try{
  	var fn = new Function(text);
  	fn.apply(fn);
  }catch(err){
  	console.log(err);
  }
  
  
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}