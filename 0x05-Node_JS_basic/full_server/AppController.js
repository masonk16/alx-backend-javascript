/**
 * Contains the miscellaneous route handlers.
 * @author Mason Mapfundematsva <https://github.com/masonk16>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
