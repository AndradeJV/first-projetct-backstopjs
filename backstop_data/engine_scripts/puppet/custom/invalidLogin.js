module.exports = async page => {
    page.type("#user-name", "Invalid User");
    
    await page.waitForTimeout(5000);
}