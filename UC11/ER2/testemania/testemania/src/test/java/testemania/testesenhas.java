package testemania;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class testesenhas {
	
	private WebDriver driver;

	@Before
	public void abrirNavegador() {
	System.setProperty("webdriver.chrome.driver","C:\\Program Files\\chromedriver\\chromedriver.exe");	
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	}

	
	@Test
	public void testeNavegador() {
		driver.get("http://localhost:4200/login");
		WebElement inputEmail = driver.findElement(By.id("email"));
		WebElement inputSenha = driver.findElement(By.id("senha"));
		WebElement botaoLogin = driver.findElement(By.id("botao-enviar"));
		/*
		inputEmail.sendKeys("luiz@email.com");
		inputSenha.sendKeys("vip123");
		botaoLogin.click();
		*/
		
		String []listaSenhas = {"senhaum","senhadois","senhaerrada","outrasenhaerrada","vip123"};
	
		
		for (int tentativas = 0; tentativas < listaSenhas.length; tentativas ++) {
		try {
			
			inputEmail.clear();
			inputSenha.clear();
			inputEmail.sendKeys("luiz@email.com");
			inputSenha.sendKeys(listaSenhas[tentativas]);
			botaoLogin.click();
			Thread.sleep(3000);
		}	
			catch (InterruptedException e) {
				e.printStackTrace();
			}
		
		}
	}
}	
