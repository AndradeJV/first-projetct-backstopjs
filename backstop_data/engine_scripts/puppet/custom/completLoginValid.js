import LoginPage from "./pages/LoginPage";


module.exports = async page => {
    await page.type("#user-name", "standard_user");
    await page.type("#password", "secret_sauce");

    page.click("#login-button")
    await page.waitForTimeout(2000);
}